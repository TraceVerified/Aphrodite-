"use client"

export default function Working() {
  return <section id="who" className="py-24 px-6">
    <div className="max-w-7xl mx-auto text-center">
      <p className="text-sm font-semibold text-primary uppercase tracking-wider">Built for everyone who builds</p>
      <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto">From kitchen gardeners to governments.</h2>
      <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
        Trace is home to project managers at every level — individuals, teams, NGOs, movements, companies and governments showcasing their work to the world.
      </p>
      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {["Individuals", "Teams", "NGOs", "Governments", "Movements", "Companies", "Engineers", "Entrepreneurs", "Investors"].map((t) => (
          <span key={t} className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">{t}</span>
        ))}
      </div>
    </div>
  </section>;
}
