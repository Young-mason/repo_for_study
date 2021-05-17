import { setupServer } from "msw/node";
import { handler } from "./handlers";

// This configures a request mocking server with the given request handler.
export const server = setupServer(...handler);
