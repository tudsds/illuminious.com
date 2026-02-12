import type { VercelRequest, VercelResponse } from '@vercel/node';
import { parse as parseCookies } from "cookie";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "../../server/routers";

export const config = {
  runtime: 'nodejs',
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Parse cookies from request headers (needed for admin auth)
  const cookies = parseCookies(req.headers.cookie || "");
  
  // Build the full URL
  const protocol = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers.host || 'localhost';
  const path = req.url || '/api/trpc';
  const url = `${protocol}://${host}${path}`;
  
  // Get body
  let body: string | undefined;
  if (req.method !== "GET" && req.method !== "HEAD") {
    if (typeof req.body === 'string') {
      body = req.body;
    } else if (req.body) {
      body = JSON.stringify(req.body);
    }
  }
  
  // Create fetch request
  const fetchRequest = new Request(url, {
    method: req.method || 'GET',
    headers: new Headers(req.headers as HeadersInit),
    body: body,
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
    res.status(response.status);
    
    // Copy headers
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });
    
    res.send(responseBody);
  } catch (error) {
    console.error("tRPC handler error:", error);
    res.status(500).json({ error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' });
  }
}
