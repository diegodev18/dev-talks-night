import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { Link, useLocation } from "react-router-dom"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type NavItem = {
  label: string
  to: string
  type: "section" | "page"
}

const landingNav: NavItem[] = [
  { label: "Nosotros", to: "/#about", type: "section" },
  { label: "Evento", to: "/#evento", type: "section" },
  { label: "Programa", to: "/#agenda", type: "section" },
  { label: "FAQ", to: "/#faq", type: "section" },
  { label: "Comunidad", to: "/#partners", type: "section" },
]

const pageNav: NavItem[] = [
  { label: "Comunidades", to: "/groups", type: "page" },
]

function ArrowSeparator() {
  return (
    <HugeiconsIcon
      icon={ArrowRight01Icon}
      strokeWidth={2}
      className="size-3 text-muted-foreground"
      aria-hidden
    />
  )
}

export function SiteHeader() {
  const location = useLocation()
  const isLanding = location.pathname === "/"

  return (
    <header className="grid gap-6 border-b border-border pb-8 md:grid-cols-[auto_1fr_auto] md:items-center">
      <Link
        to="/"
        className="flex flex-col gap-0 leading-none outline-none focus-visible:ring-1 focus-visible:ring-ring"
      >
        <span className="font-heading text-[0.65rem] font-medium tracking-[0.2em] text-muted-foreground">
          DEV
        </span>
        <span className="font-heading text-sm font-semibold tracking-tight text-foreground sm:text-base">
          NIGHT TALKS
        </span>
      </Link>
      <nav
        className="flex flex-wrap items-center justify-start gap-1 md:justify-center"
        aria-label="Principal"
      >
        {isLanding ? (
          <>
            {landingNav.map((item, i) => (
              <>
                <Button key={item.label} variant="ghost" size="sm" asChild>
                  <Link to={item.to}>{item.label}</Link>
                </Button>
                {i < landingNav.length - 1 && <ArrowSeparator />}
              </>
            ))}
            <div className="mx-1 hidden h-5 w-px bg-border md:block" />
            {pageNav.map((item) => (
              <Button key={item.label} variant="ghost" size="sm" asChild>
                <Link to={item.to}>{item.label}</Link>
              </Button>
            ))}
          </>
        ) : (
          <>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/">Inicio</Link>
            </Button>
            <div className="mx-1 h-5 w-px bg-border" />
            {pageNav.map((item) => (
              <Button key={item.label} variant="ghost" size="sm" asChild>
                <Link to={item.to}>{item.label}</Link>
              </Button>
            ))}
          </>
        )}
      </nav>
      <div className="flex md:justify-end">
        <Button className={cn("landing-cta")} size="default" asChild>
          <Link to="/#final-cta">Join the Conversation</Link>
        </Button>
      </div>
    </header>
  )
}
