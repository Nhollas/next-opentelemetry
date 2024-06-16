"use client"
import { ButtonWithTracing } from "@/components/ui/button-with-tracing"
import { trace } from "@opentelemetry/api"

export default function Home() {
  const getTestApiData = () =>
    trace
      .getTracer("next-app-frontend")
      .startActiveSpan("fetchTestApiData", {}, async (span) => {
        try {
          const response = await fetch("/api/test")
          const data = await response.json()
          console.log(data)
        } finally {
          span.end()
        }
      })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ButtonWithTracing
        spanName="homePageClickMeButton"
        onClick={() => getTestApiData()}
      >
        a Click me
      </ButtonWithTracing>
    </main>
  )
}
