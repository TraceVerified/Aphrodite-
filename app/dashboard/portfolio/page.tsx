import {
  ShieldCheck,
  ExternalLink,
  Share2,
  MapPin,
  Award,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../../_components/ui/Card";

import { Button } from "../../_components/ui/Button";
import { Badge } from "../../_components/ui/Badge";
import { Avatar, AvatarFallback } from "../../_components/ui/Avatar";

const VERIFIED = [
  {
    name: "School Library Build",
    location: "Eldoret, KE",
    score: 96,
  },
  {
    name: "Tree Planting Drive",
    location: "Naivasha, KE",
    score: 91,
  },
  {
    name: "Greenhill Community Garden",
    location: "Nairobi, KE",
    score: 88,
  },
];

const STATS = [
  {
    label: "Verified Projects",
    value: "16",
  },
  {
    label: "Trust Score",
    value: "87",
  },
  {
    label: "Evidence Items",
    value: "412",
  },
  {
    label: "Followers",
    value: "1.2k",
  },
];

export default function PortfolioPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Public Portfolio
          </h1>

          <p className="text-sm text-muted-foreground">
            How your work appears to the public.
          </p>
        </div>

        <div className="flex gap-2">
          <Button variant="outline">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>

          <Button>
            <ExternalLink className="mr-2 h-4 w-4" />
            View Public Page
          </Button>
        </div>
      </div>

      {/* Profile Header */}
      <Card className="overflow-hidden">
        <div className="h-32 bg-gradient-to-r from-primary to-primary/40" />

        <CardContent className="-mt-12 space-y-4 p-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="flex items-end gap-4">
              <Avatar className="h-24 w-24 border-4 border-card">
                <AvatarFallback className="bg-primary text-2xl text-primary-foreground">
                  JD
                </AvatarFallback>
              </Avatar>

              <div className="pb-2">
                <h2 className="text-xl font-bold">juliet wamboi</h2>

                <p className="text-sm text-muted-foreground">
                  Construction Lead • Nairobi, KE
                </p>

                <div className="mt-1 flex items-center gap-2">
                  <Badge className="gap-1">
                    <ShieldCheck className="h-3 w-3" />
                    Verified Pro
                  </Badge>

                  <Badge variant="outline" className="gap-1">
                    <Award className="h-3 w-3" />
                    Top 12%
                  </Badge>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-muted/40 px-5 py-3 text-center">
              <p className="text-xs text-muted-foreground">
                Trust Score
              </p>

              <p className="text-3xl font-bold text-primary">
                87
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {STATS.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="p-5 text-center">
              <p className="text-2xl font-bold">
                {stat.value}
              </p>

              <p className="mt-1 text-xs text-muted-foreground">
                {stat.label}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Verified Projects */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">
            Verified Projects
          </CardTitle>

          <CardDescription>
            Projects that earned a Trace Verified report
          </CardDescription>
        </CardHeader>

        <CardContent className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {VERIFIED.map((project) => (
            <div
              key={project.name}
              className="overflow-hidden rounded-lg border border-border"
            >
              <div className="h-28 bg-gradient-to-br from-primary/30 to-primary/5" />

              <div className="space-y-2 p-4">
                <p className="text-sm font-semibold">
                  {project.name}
                </p>

                <p className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  {project.location}
                </p>

                <div className="flex items-center justify-between border-t border-border pt-2">
                  <span className="text-xs text-muted-foreground">
                    Verification Score
                  </span>

                  <span className="text-sm font-bold text-primary">
                    {project.score}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}