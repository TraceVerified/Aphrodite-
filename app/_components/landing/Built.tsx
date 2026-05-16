import Link from "next/link";
import { Button } from "../ui/Button";
import { ArrowRight } from "lucide-react";

export default function Built() {
  return <section className="px-6 pb-24">
    <div className="max-w-6xl mx-auto rounded-3xl p-12 md:p-16 text-center text-primary-foreground relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at 30% 30%, oklch(0.72 0.13 190 / 0.5), transparent 50%)" }} />
      <div className="relative">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Build a legacy of accountability.</h2>
        <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
          Every milestone verifiable. Every report effortless. Every project a permanent asset.
        </p>
        <Link href="/login">
          <Button size="lg" className="mt-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90 h-12 px-8">
            Get started with Trace <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  </section>;
}
