"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "../../_components/ui/Button";
import { Input } from "../../_components/ui/Input";
import { Label } from "../../_components/ui/Label";
import { Card } from "../../_components/ui/Card";
import { ShieldCheck, Mail, CheckCircle2, ArrowLeft } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to Supabase auth
    if (email) setSubmitted(true);
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-background">
      {/* Left: brand panel */}
      <div
        className="relative hidden lg:flex flex-col justify-between p-12 text-primary-foreground overflow-hidden"
        style={{ background: "var(--gradient-hero)" }}
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, oklch(0.72 0.13 190 / 0.5), transparent 45%), radial-gradient(circle at 80% 70%, oklch(0.55 0.11 195 / 0.4), transparent 50%)",
          }}
        />

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
            Sign in to capture verified, geotagged proof of every milestone — and
            turn finished projects into a permanent portfolio of impact.
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

          <Link
            href="/auth"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to sign in
          </Link>

          <h1 className="text-3xl font-bold tracking-tight">Reset your password.</h1>
          <p className="mt-2 text-muted-foreground">
            Enter your email and we’ll send you a link to create a new password.
          </p>

          <Card className="mt-8 p-6 border-border/60 shadow-[var(--shadow-elegant)]">
            {!submitted ? (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@organization.org"
                      className="pl-9"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full h-11 bg-[image:var(--gradient-primary)] shadow-[var(--shadow-elegant)]"
                >
                  Send reset link
                  <ArrowLeft className="ml-2 h-4 w-4 rotate-180" />
                </Button>
              </form>
            ) : (
              <div className="text-center py-6">
                <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 grid place-items-center mb-4">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Check your email</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We sent a password reset link to <strong>{email}</strong>. Click the
                  link in the email to set a new password.
                </p>
                <p className="mt-4 text-xs text-muted-foreground">
                  Didn’t receive it? Check your spam folder or{" "}
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-primary hover:underline"
                  >
                    try again
                  </button>
                  .
                </p>
              </div>
            )}
          </Card>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Remember your password?{" "}
            <Link href="/auth" className="text-primary font-medium hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}