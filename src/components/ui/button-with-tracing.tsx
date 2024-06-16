import * as React from "react"
import { trace, Attributes } from "@opentelemetry/api"
import { Button, ButtonProps } from "./button"

interface ButtonWithTracingProps extends ButtonProps {
  spanName: string
  attributes?: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => Attributes
}

const ButtonWithTracing = React.forwardRef<
  HTMLButtonElement,
  ButtonWithTracingProps
>(({ spanName, onClick, ...props }, ref) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
    trace.getTracer("next-app-frontend").startActiveSpan(
      spanName,
      {
        attributes: {
          "ui.element.type": e.currentTarget.tagName,
          "ui.element.class": e.currentTarget.className,
          "ui.element.text": e.currentTarget.textContent || "",
          ...props.attributes?.(e),
        },
      },
      (span) => {
        try {
          if (onClick) {
            onClick(e)
          }
        } finally {
          span.end()
        }
      },
    )

  return <Button {...props} ref={ref} onClick={handleClick} />
})

ButtonWithTracing.displayName = "ButtonWithTracing"

export { ButtonWithTracing }
