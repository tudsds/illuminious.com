import { parse as parseCookies } from "cookie";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "../../server/routers";

export const config = {
  runtime: 'nodejs',
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: any, res: any) {
  // Parse cookies from request headers (needed for admin auth)
  const cookies = parseCookies(req.headers.cookie || "");
  
  // Build the full URL
  const protocol = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers.host || 'localhost';
  const url = new URL(req.url || "", `${protocol}://${host}`);
  
  // Read body if present
  let bodyText: string | undefined;
  if (req.method !== "GET" && req.method !== "HEAD") {
    if (typeof req.body === 'string') {
      bodyText = req.body;
    } else if (req.body) {
      bodyText = JSON.stringify(req.body);
    } else {
      // Read from stream
      const chunks: Buffer[] = [];
      for await (const chunk of req) {
        chunks.push(chunk);
      }
      bodyText = Buffer.concat(chunks).toString('utf-8');
    }
  }
  
  // Create fetch request
  const fetchRequest = new Request(url, {
    method: req.method,
    headers: req.headers as HeadersInit,
    body: bodyText,
  });

  // Create context with cookies
  const createContext = () => {
    return Promise.resolve({
      req: {
        ...req,
        cookies,
      },
      res,
    });
  };

  try {
    // Handle the request using tRPC's fetch adapter
    const response = await fetchRequestHandler({
      endpoint: "/api/trpc",
      req: fetchRequest,
      router: appRouter,
      createContext,
    });

    // Convert Fetch API response to Vercel response
    const responseBody = await response.text();
    res.statusCode = response.status;
    
    // Copy headers
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });
    
    res.end(responseBody);
  } catch (error) {
    console.error("tRPC handler error:", error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Internal server error' }));
  }
}
