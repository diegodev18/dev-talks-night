import { ArrowRight01Icon } from "@hugeicons/core-free-icons"
import { HugeiconsIcon } from "@hugeicons/react"
import { useEffect, useState } from "react"
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

function ArrowSeparator({ delay }: { delay: number }) {
  return (
    <HugeiconsIcon
      icon={ArrowRight01Icon}
      strokeWidth={2}
      className="size-3 text-muted-foreground nav-item-anim"
      style={{ animationDelay: `${delay}ms` }}
      aria-hidden
    />
  )
}

function NavButton({ item, delay }: { item: NavItem; delay: number }) {
  return (
    <Button
      variant="ghost"
      size="sm"
      asChild
      className="nav-item-anim"
      style={{ animationDelay: `${delay}ms` }}
    >
      <Link to={item.to}>{item.label}</Link>
    </Button>
  )
}

export function SiteHeader() {
  const location = useLocation()
  const isLanding = location.pathname === "/"
  const [animKey, setAnimKey] = useState(0)

  useEffect(() => {
    setAnimKey((k) => k + 1)
  }, [location.pathname])

  const landingItems = landingNav.flatMap((item, i) => {
    const delay = i * 40
    const elements = [
      <NavButton key={item.label} item={item} delay={delay} />,
    ]
    if (i < landingNav.length - 1) {
      elements.push(<ArrowSeparator key={`arrow-${i}`} delay={delay + 20} />)
    }
    return elements
  })

  const separatorDelay = landingNav.length * 40
  const separator = (
    <div
      key="separator"
      className="mx-1 hidden h-5 w-px bg-border nav-item-anim md:block"
      style={{ animationDelay: `${separatorDelay}ms` }}
    />
  )

  const pageItems = pageNav.map((item) => {
    const delay = separatorDelay + 40
    return <NavButton key={item.label} item={item} delay={delay} />
  })

  const groupsItems = [
    <NavButton
      key="inicio"
      item={{ label: "Inicio", to: "/", type: "page" }}
      delay={0}
    />,
    <div
      key="separator"
      className="mx-1 h-5 w-px bg-border nav-item-anim"
      style={{ animationDelay: "20ms" }}
    />,
    ...pageNav.map((item) => {
      const delay = 40
      return <NavButton key={item.label} item={item} delay={delay} />
    }),
  ]

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
          <div key={`landing-${animKey}`} className="flex items-center gap-1">
            {landingItems}
            {separator}
            {pageItems}
          </div>
        ) : (
          <div key={`groups-${animKey}`} className="flex items-center gap-1">
            {groupsItems}
          </div>
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
