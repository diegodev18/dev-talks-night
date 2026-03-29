function App() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-6 px-6 py-12">
      <h1 className="text-3xl font-medium tracking-tight text-[var(--text-h)] sm:text-4xl">
        dev-talks-night
      </h1>
      <p className="max-w-md text-center text-balance text-[var(--text)]">
        Plantilla en blanco: React, Vite, Tailwind, MPA y alias <code>@/</code>.
      </p>
      <nav>
        <a
          href="/agenda.html"
          className="text-[var(--accent)] underline underline-offset-4 hover:opacity-90"
        >
          Agenda
        </a>
      </nav>
    </main>
  )
}

export default App
