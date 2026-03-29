import { useState, type ReactNode } from "react"
import { Link } from "react-router-dom"

import { SiteFooter } from "@/components/landing/SiteFooter"
import { SiteHeader } from "@/components/landing/SiteHeader"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Layout } from "@/components/layout/Layout"

/**
 * Rutas bajo public/groups/ — .webp. Si renombran archivos, actualizar imageSrc.
 * `href`: string = tarjeta enlazada; `null` = tarjeta estática.
 */
type Community = {
  name: string
  description: string
  imageSrc: string
  initials: string
  href: string | null
}

const communities: Community[] = [
  {
    name: "AWS Villahermosa",
    description:
      "Comunidad en torno a la nube AWS: buenas prácticas, arquitectura y experiencias locales.",
    imageSrc: "/groups/aws.webp",
    initials: "AWS",
    href: null,
  },
  {
    name: "Cursor Villahermosa",
    description:
      "Espacio para quienes usan Cursor y herramientas de desarrollo con asistencia de IA.",
    imageSrc: "/groups/cursor.webp",
    initials: "CU",
    href: null,
  },
  {
    name: "Claude Villahermosa",
    description:
      "Encuentros y conversación en torno a Claude y el ecosistema de IA conversacional.",
    imageSrc: "/groups/claude.webp",
    initials: "CL",
    href: null,
  },
]

const communityCardLinkClass =
  "block text-inherit no-underline outline-none transition-opacity hover:opacity-95 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"

function CommunityCardLink({
  href,
  children,
}: {
  href: string
  children: ReactNode
}) {
  if (href.startsWith("/")) {
    return (
      <Link to={href} className={communityCardLinkClass}>
        {children}
      </Link>
    )
  }
  if (/^https?:\/\//i.test(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={communityCardLinkClass}
      >
        {children}
      </a>
    )
  }
  return (
    <a href={href} className={communityCardLinkClass}>
      {children}
    </a>
  )
}

function CommunityCard({ name, description, imageSrc, initials, href }: Community) {
  const [imageFailed, setImageFailed] = useState(false)

  const card = (
    <Card
      className="gap-0 overflow-hidden p-0 py-0 data-[size=sm]:gap-0 data-[size=sm]:py-0"
      size="sm"
    >
      <div className="relative aspect-4/3 w-full bg-card">
        {!imageFailed ? (
          <img
            src={imageSrc}
            alt={name}
            className="absolute inset-0 block size-full object-cover object-center"
            onError={() => setImageFailed(true)}
          />
        ) : null}
        {imageFailed ? (
          <div
            className="flex size-full items-center justify-center bg-muted"
            aria-hidden
          >
            <span className="font-heading text-2xl font-semibold tracking-tight text-muted-foreground">
              {initials}
            </span>
          </div>
        ) : null}
      </div>
      <CardHeader className="border-0 px-3 pb-3 pt-3 sm:px-4 sm:pb-4">
        <CardTitle className="font-heading text-base sm:text-lg">{name}</CardTitle>
        <CardDescription className="text-pretty text-xs sm:text-sm">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  )

  if (href) {
    return <CommunityCardLink href={href}>{card}</CommunityCardLink>
  }

  return card
}

export default function Groups() {
  return (
    <Layout>
      <SiteHeader />
      <main className="flex flex-col gap-10">
        <section
          className="flex flex-col gap-6"
          aria-labelledby="groups-page-heading"
        >
          <div className="flex max-w-3xl flex-col gap-4">
            <h1
              id="groups-page-heading"
              className="font-heading text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            >
              Comunidades hermanas
            </h1>
            <p className="text-pretty text-sm text-muted-foreground sm:text-base">
              Estos grupos tomaron forma o se fortalecieron junto al ecosistema de{" "}
              <span className="text-foreground">Dev Night Talks</span> en
              Villahermosa: espacios distintos con su propio enfoque, la misma
              energía de compartir y aprender en comunidad.
            </p>
            <p className="text-pretty text-sm text-muted-foreground sm:text-base">
              Cada uno organiza sus propios encuentros y dinámicas; aquí solo los
              damos a conocer para que puedas sumarte al que más te interese.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {communities.map((c) => (
              <CommunityCard key={c.name} {...c} />
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </Layout>
  )
}
