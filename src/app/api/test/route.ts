import { trace } from "@opentelemetry/api"

export const GET = async () => {
  return await trace
    .getTracer("next-app-backend")
    .startActiveSpan("testApiData", async (span) => {
      try {
        return Response.json({ message: "Hello from the API!" })
      } finally {
        span.end()
      }
    })
}
