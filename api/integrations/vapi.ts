import Vapi from "@vapi-ai/web";

// Initialize Vapi client with web token from environment
export const vapi = new Vapi(
  process.env.NEXT_PUBLIC_VAPI_WEB_TOKEN || ""
);

