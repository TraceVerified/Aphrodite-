"use client"

import { CheckCircle2 } from "lucide-react";
import { Card } from "../ui/Card";

export default function Proof() {
  return <section id="how" className="py-24 px-6" style={{ background: "var(--gradient-subtle)" }}>
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div>
        <p className="text-sm font-semibold text-primary uppercase tracking-wider">How it works</p>
        <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">Every milestone, anchored in time.</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Trace captures progress as it happens — through verified media, financial documentation and intelligent analysis — building a permanent data trail you can stand behind.
        </p>
        <ul className="mt-8 space-y-4">
          {[
            "Create a project and define phases, budgets and contributors",
            "Upload geotagged, timestamped proof at the moment of impact",
            "Auto-generate audit-ready reports and impact insights",
            "Showcase your Verified Portfolio for future funding and scaling",
          ].map((t) => (
            <li key={t} className="flex gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
              <span className="text-foreground">{t}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative">
        <div className="absolute -inset-4 rounded-3xl opacity-40 blur-3xl" style={{ background: "var(--gradient-primary)" }} />
        <Card className="relative p-6 shadow-[var(--shadow-elegant)] border-border/60">
          <div className="flex items-center justify-between pb-4 border-b border-border">
            <div>
              <div className="text-xs text-muted-foreground">Project</div>
              <div className="font-semibold">Kibera Water Pipeline · Phase 02</div>
            </div>
            <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">Trace Verified</span>
          </div>
          <div className="mt-4 space-y-3">
            {[
              { who: "Field Lead · A. Otieno", when: "Today · 14:32 EAT", where: "-1.3133, 36.7920" },
              { who: "Engineer · M. Kimani", when: "Today · 11:08 EAT", where: "-1.3140, 36.7918" },
              { who: "Auditor · J. Wanjiru", when: "Yesterday · 17:45 EAT", where: "-1.3128, 36.7925" },
            ].map((r) => (
              <div key={r.when} className="flex items-center justify-between p-3 rounded-lg bg-muted/60">
                <div>
                  <div className="text-sm font-medium">{r.who}</div>
                  <div className="text-xs text-muted-foreground">{r.when}</div>
                </div>
                <div className="text-xs font-mono text-primary">{r.where}</div>
              </div>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-border flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Budget tracked</span>
            <span className="font-semibold">$184,200 / $250,000</span>
          </div>
        </Card>
      </div>
    </div>
  </section>;
}
