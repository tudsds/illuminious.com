import "dotenv/config";
import express from "express";
import { parse as parseCookies } from "cookie";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { appRouter } from "../../server/routers";
import { createContext } from "../../server/_core/context";

const app = express();

// Parse JSON body
app.use(express.json({ limit: "50mb" }));

// Parse cookies from request headers (needed for admin auth)
app.use((req, _res, next) => {
  req.cookies = parseCookies(req.headers.cookie || "");
  next();
});

// Mount tRPC handler
app.use(
  "/api/trpc",
  createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);

export default app;
