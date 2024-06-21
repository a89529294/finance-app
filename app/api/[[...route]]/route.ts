import { Hono } from "hono";
import { handle } from "hono/vercel";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
import { clerkMiddleware, getAuth } from "@hono/clerk-auth";
import authors from "./authors";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.use("*", clerkMiddleware()).route("/authors", authors);

export const GET = handle(app);
export const POST = handle(app);
