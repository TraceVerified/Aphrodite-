import type { StaticImageData } from "next/image";
import { MapPin, Users } from "lucide-react";
import projectWater from "../../_assets/projects/project-water.jpg";
import projectSolar from "../../_assets/projects/project-solar.jpg";
import projectTrees from "../../_assets/projects/project-trees.jpg";
import projectSchool from "../../_assets/projects/project-school.jpg";
import projectHousing from "../../_assets/projects/project-housing.jpg";
import projectGarden from "../../_assets/projects/project-garden.jpg";
import Link from "next/link";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";

type Project = {
  title: string;
  location: string;
  category: string;
  image: string | StaticImageData;
  metric: string;
  metricLabel: string;
  progress: number;
  contributors: number;
};

const VERIFIED_PROJECTS: Project[] = [
  { title: "Kibera Water Pipeline", location: "Nairobi, KE", category: "Infrastructure", image: projectWater, metric: "12.4K", metricLabel: "people served", progress: 78, contributors: 24 },
  { title: "Solar Microgrid Phase II", location: "Kigali, RW", category: "Energy", image: projectSolar, metric: "1.8 MW", metricLabel: "clean capacity", progress: 92, contributors: 18 },
  { title: "Mwanza Reforestation", location: "Mwanza, TZ", category: "Climate", image: projectTrees, metric: "84K", metricLabel: "trees planted", progress: 64, contributors: 132 },
  { title: "Rural School Build", location: "Kakamega, KE", category: "Education", image: projectSchool, metric: "6", metricLabel: "schools completed", progress: 100, contributors: 41 },
  { title: "Affordable Housing Pilot", location: "Accra, GH", category: "Urban", image: projectHousing, metric: "120", metricLabel: "units verified", progress: 48, contributors: 56 },
  { title: "Kitchen Garden Network", location: "Kampala, UG", category: "Food security", image: projectGarden, metric: "2,300", metricLabel: "households", progress: 55, contributors: 87 },
];


function ProjectCard({ title, location, category, image, metric, metricLabel, progress, contributors }: Project) {
  const imageSrc = typeof image === "string" ? image : image.src;

  return (
    <article className="relative w-[340px] md:w-[400px] h-[420px] md:h-[460px] shrink-0 rounded-2xl overflow-hidden border border-primary-foreground/15 shadow-[var(--shadow-elegant)] group">
      <img
        src={imageSrc}
        alt={title}
        loading="lazy"
        width={1024}
        height={768}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10" />

      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-primary-foreground/15 backdrop-blur text-primary-foreground border border-primary-foreground/25">
          {category}
        </span>
        <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/90 text-primary-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground animate-pulse" />
          Trace Verified
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-5 text-primary-foreground">
        <div className="flex items-center gap-1.5 text-xs text-primary-foreground/80">
          <MapPin className="h-3 w-3" /> {location}
        </div>
        <h4 className="mt-1 text-xl font-semibold leading-tight">{title}</h4>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <div className="text-3xl font-bold leading-none">{metric}</div>
            <div className="text-xs text-primary-foreground/70 mt-1">{metricLabel}</div>
          </div>
          <div className="text-right">
            <div className="text-sm font-semibold">{progress}%</div>
            <div className="text-[10px] text-primary-foreground/70 uppercase tracking-wider">complete</div>
          </div>
        </div>

        <div className="mt-3 h-1.5 rounded-full bg-primary-foreground/20 overflow-hidden">
          <div className="h-full rounded-full bg-[image:var(--gradient-primary)]" style={{ width: `${progress}%` }} />
        </div>
        <div className="mt-2 flex items-center gap-1.5 text-[11px] text-primary-foreground/70">
          <Users className="h-3 w-3" /> {contributors} contributors
        </div>
      </div>
    </article>
  );
}

export default function Hero() {
  return <section className="relative isolate overflow-hidden text-primary-foreground" style={{ background: "var(--hero-background)" }}>
    <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: "var(--hero-aura)" }} />
    <div className="absolute inset-0 z-0 pointer-events-none opacity-80" style={{ backgroundImage: "var(--hero-grid)", backgroundSize: "56px 56px" }} />
    <div className="absolute inset-x-0 bottom-0 z-0 h-48 pointer-events-none bg-gradient-to-t from-background/20 to-transparent" />

    <div className="relative z-10 max-w-7xl mx-auto px-6 py-14 lg:py-16 min-h-[calc(100vh-4rem)] flex flex-col justify-center text-primary-foreground">
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-12 items-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3 py-1 text-xs font-medium backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-glow animate-pulse" />
            The new global standard for project transparency
          </div>
          <h1 className="mt-6 text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.08] pb-2">
            Proof of Progress.<br />
            <span className="inline-block text-primary-glow pb-2 drop-shadow-sm">
              Verified Truth.
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 max-w-2xl leading-relaxed">
            Trace is a global project transparency platform that creates immutable proof of every phase, timeline, budget and contribution — replacing "trust me" with "see for yourself."
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/login">
              <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-12 px-6 shadow-[var(--shadow-elegant)]">
                Start tracing <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="h-12 px-6 bg-primary-foreground/10 border-primary-foreground/35 text-primary-foreground hover:bg-primary-foreground/20">
              See how it works
            </Button>
          </div>

        </div>
        <div className="min-w-0">
          <div className="mb-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary-foreground/70">Trace Verified · Live</p>
              <h3 className="text-xl md:text-2xl font-semibold mt-1">Projects already proving their progress</h3>
            </div>
            <span className="hidden md:inline text-xs text-primary-foreground/60">Hover to pause</span>
          </div>
          <div className="marquee-mask overflow-hidden -mx-6 lg:mx-0 py-2">
            <div className="animate-marquee flex gap-5 w-max px-6 lg:px-0">
              {[...VERIFIED_PROJECTS, ...VERIFIED_PROJECTS].map((p, i) => (
                <ProjectCard key={`${p.title}-${i}`} {...p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>;
}
