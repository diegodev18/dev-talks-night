import * as React from "react"

const ViewTransition = (React as any).ViewTransition

type DirectionalTransitionProps = {
  children: React.ReactNode
}

export function DirectionalTransition({ children }: DirectionalTransitionProps) {
  return (
    <ViewTransition
      enter={{ "nav-forward": "nav-forward", "nav-back": "nav-back", default: "none" }}
      exit={{ "nav-forward": "nav-forward", "nav-back": "nav-back", default: "none" }}
      default="none"
    >
      {children}
    </ViewTransition>
  )
}
