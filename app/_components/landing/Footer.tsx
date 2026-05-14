import { ShieldCheck } from "lucide-react";

export default function Footer() {
  return <footer className="border-t border-border py-10 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <div className="h-6 w-6 rounded-md bg-[image:var(--gradient-primary)] grid place-items-center">
          <ShieldCheck className="h-3.5 w-3.5 text-primary-foreground" />
        </div>
        <span className="font-semibold text-foreground">Trace</span>
        <span>· Proof of Progress</span>
      </div>
      <div>© {new Date().getFullYear()} Trace. A global project transparency network.</div>
    </div>
  </footer>
}
