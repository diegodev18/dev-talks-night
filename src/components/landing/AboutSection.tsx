/** Ubicación de referencia del meetup (Villahermosa). */
const ABOUT_MAP_LAT = 17.9782405
const ABOUT_MAP_LNG = -92.945807

/** Encuadre ~barrio alrededor del punto (OSM embed: minLon, minLat, maxLon, maxLat). */
const MAP_BBOX_DELTA_LON = 0.015
const MAP_BBOX_DELTA_LAT = 0.012

const aboutMapEmbedSrc = (() => {
  const minLon = ABOUT_MAP_LNG - MAP_BBOX_DELTA_LON
  const maxLon = ABOUT_MAP_LNG + MAP_BBOX_DELTA_LON
  const minLat = ABOUT_MAP_LAT - MAP_BBOX_DELTA_LAT
  const maxLat = ABOUT_MAP_LAT + MAP_BBOX_DELTA_LAT
  const marker = `${ABOUT_MAP_LAT}%2C${ABOUT_MAP_LNG}`
  return `https://www.openstreetmap.org/export/embed.html?bbox=${minLon},${minLat},${maxLon},${maxLat}&layer=mapnik&marker=${marker}`
})()

export function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-24 grid gap-8 lg:grid-cols-2 lg:gap-10 lg:items-start"
      aria-labelledby="about-heading"
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <h2
            id="about-heading"
            className="font-heading text-lg font-medium text-foreground sm:text-xl"
          >
            Qué es Dev Night Talks
          </h2>
          <p className="max-w-2xl text-sm text-muted-foreground sm:text-base">
            Un espacio presencial en Villahermosa para charlas breves, intercambio
            de experiencias y conocer a quienes construyen producto y plataforma.
          </p>
        </div>
        <ul className="flex max-w-2xl flex-col gap-3 text-sm text-foreground">
          <li className="flex flex-col gap-1 border-l-2 border-primary/40 pl-4">
            <span className="font-medium">Formato ágil</span>
            <span className="text-muted-foreground">
              Presentaciones cortas y tiempo para preguntas.
            </span>
          </li>
          <li className="flex flex-col gap-1 border-l-2 border-primary/40 pl-4">
            <span className="font-medium">Para toda la comunidad tech</span>
            <span className="text-muted-foreground">
              Desarrollo, diseño, datos, DevOps y curiosidad por aprender.
            </span>
          </li>
          <li className="flex flex-col gap-1 border-l-2 border-primary/40 pl-4">
            <span className="font-medium">Networking real</span>
            <span className="text-muted-foreground">
              Conecta con personas que comparten tus mismos intereses.
            </span>
          </li>
        </ul>
      </div>
      <div className="relative aspect-4/3 min-h-64 w-full overflow-hidden ring-1 ring-foreground/10">
        <iframe
          title="Mapa del lugar del meetup en Villahermosa"
          src={aboutMapEmbedSrc}
          className="absolute inset-0 size-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  )
}
