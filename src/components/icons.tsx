use client";

import * as React from "react";
import { Icons } from "@/components/icons"

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
}

const Button = React.forwardRef<HTMLButtonElement, Props>(({
  className,
  variant,
  children,
  ...props
}, ref) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        variant === "default" &&
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        variant === "destructive" &&
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        variant === "outline" &&
          "bg-background border border-input hover:bg-accent hover:text-accent-foreground",
        variant === "secondary" &&
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        variant === "ghost" && "hover:bg-accent hover:text-accent-foreground",
        variant === "link" && "underline-offset-4 hover:underline",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
    </button>
  )
})
Button.displayName = "Button"

export { Button }
