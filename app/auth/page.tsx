"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "../_components/ui/Button";
import { Input } from "../_components/ui/Input";
import { Label } from "../_components/ui/Label";
import { Card } from "../_components/ui/Card";
import { ShieldCheck, Mail, Lock, ArrowRight } from "lucide-react";

export default function AuthPage() {
  const [mode, setMode] = useState<"signin" | "signup">("signin");

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      {/* Left: brand panel */}
      <div className="relative hidden lg:flex flex-col justify-between p-12 text-primary-foreground overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
        <div className="absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, oklch(0.72 0.13 190 / 0.5), transparent 45%), radial-gradient(circle at 80% 70%, oklch(0.55 0.11 195 / 0.4), transparent 50%)" }} />

        <Link href="/" className="relative flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-primary-foreground/15 backdrop-blur grid place-items-center border border-primary-foreground/20">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <span className="font-semibold text-xl tracking-tight">Trace</span>
        </Link>

        <div className="relative max-w-md">
          <h2 className="text-4xl font-bold leading-tight tracking-tight">
            Replace &quot;trust me&quot; with &quot;see for yourself.&quot;
          </h2>
          <p className="mt-4 text-primary-foreground/80 leading-relaxed">
            Sign in to capture verified, geotagged proof of every milestone — and turn finished projects into a permanent portfolio of impact.
          </p>

          <div className="mt-10 space-y-3">
            {[
              "Immutable proof of progress",
              "Real-time geotagged validation",
              "Audit-ready reports, automatically",
            ].map((t) => (
              <div key={t} className="flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-primary-glow" />
                <span className="text-sm text-primary-foreground/90">{t}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="relative text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Trace · Proof of Progress
        </p>
      </div>

      {/* Right: form */}
      <div className="flex items-center justify-center p-6 md:p-12">
        <div className="w-full max-w-md">
          <Link href="/" className="lg:hidden flex items-center gap-2 mb-8">
            <div className="h-8 w-8 rounded-lg bg-[image:var(--gradient-primary)] grid place-items-center">
              <ShieldCheck className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg">Trace</span>
          </Link>

          <h1 className="text-3xl font-bold tracking-tight">
            {mode === "signin" ? "Welcome back." : "Create your account."}
          </h1>
          <p className="mt-2 text-muted-foreground">
            {mode === "signin"
              ? "Sign in to continue building verified proof of progress."
              : "Start tracing your projects with immutable, verified records."}
          </p>

          <Card className="mt-8 p-6 border-border/60 shadow-[var(--shadow-elegant)]">
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              {mode === "signup" && (
                <div className="space-y-2">
                  <Label htmlFor="name">Full name</Label>
                  <Input id="name" placeholder="Ada Otieno" />
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="email" type="email" placeholder="you@organization.org" className="pl-9" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  {mode === "signin" && (
                    <Link href="/auth/forgot-password" className="text-xs text-primary hover:underline">Forgot?</Link>
                  )}
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="password" type="password" placeholder="••••••••" className="pl-9" />
                </div>
              </div>

              <Button type="submit" className="w-full h-11 bg-[image:var(--gradient-primary)] shadow-[var(--shadow-elegant)]">
                {mode === "signin" ? "Sign in" : "Create account"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <div className="relative py-2">
                <div className="absolute inset-0 flex items-center"><span className="w-full border-t border-border" /></div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">or continue with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button type="button" variant="outline" className="h-11">Google</Button>
                <Button type="button" variant="outline" className="h-11">Facebook</Button>
              </div>
            </form>
          </Card>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            {mode === "signin" ? "New to Trace?" : "Already have an account?"}{" "}
            <button
              onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
              className="text-primary font-medium hover:underline"
            >
              {mode === "signin" ? "Create an account" : "Sign in"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}