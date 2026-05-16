
import Link from "next/link";
import { Button } from "../ui/Button";
import { ShieldCheck } from "lucide-react";

export default function Navbar() {
  return <header className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-lg bg-[image:var(--gradient-primary)] grid place-items-center">
          <ShieldCheck className="h-4 w-4 text-primary-foreground" />
        </div>
        <span className="font-semibold tracking-tight text-lg">Trace</span>
      </Link>
      <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
        <a href="#features" className="hover:text-foreground transition">Features</a>
        <a href="#how" className="hover:text-foreground transition">How it works</a>
        <a href="#who" className="hover:text-foreground transition">Who it&apos;s for</a>
      </nav>
      <div className="flex items-center gap-2">
        <Link href="/auth"><Button variant="ghost" size="sm">Sign in</Button></Link>
        <Link href="/auth"><Button size="sm" className="bg-[image:var(--gradient-primary)] shadow-[var(--shadow-elegant)]">Get started</Button></Link>
      </div>
    </div>
  </header>;
}
