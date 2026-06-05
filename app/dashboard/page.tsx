import {
  FolderKanban,
  Activity,
  CheckCircle2,
  ShieldCheck,
  TrendingUp,
  Clock,
  DollarSign,
  Sparkles,
  Camera,
  FileCheck,
  UserPlus,
  MapPin,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../_components/ui/Card";

import { Progress } from "../_components/ui/Progress";
import { Badge } from "../_components/ui/Badge";

const STATS = [
  {
    label: "Total Projects",
    value: "24",
    icon: FolderKanban,
    change: "+3 this month",
  },
  {
    label: "Active Projects",
    value: "8",
    icon: Activity,
    change: "2 due this week",
  },
  {
    label: "Completed",
    value: "16",
    icon: CheckCircle2,
    change: "+5 verified",
  },
  {
    label: "Trust Score",
    value: "87",
    icon: ShieldCheck,
    change: "Top 12%",
  },
];

const PROGRESS = [
  {
    label: "Scope Progress",
    value: 72,
    icon: TrendingUp,
    hint: "18 of 25 milestones",
  },
  {
    label: "Time Progress",
    value: 64,
    icon: Clock,
    hint: "On schedule",
  },
  {
    label: "Cost Progress",
    value: 81,
    icon: DollarSign,
    hint: "Within budget",
  },
];

const ACTIVITY = [
  {
    icon: Camera,
    text: "Uploaded 12 photos to Greenhill Garden",
    time: "2m ago",
  },
  {
    icon: FileCheck,
    text: "Milestone 'Foundation' marked verified",
    time: "1h ago",
  },
  {
    icon: UserPlus,
    text: "Marcus joined as Collaborator",
    time: "3h ago",
  },
  {
    icon: MapPin,
    text: "GPS check passed for Site B Inspection",
    time: "Yesterday",
  },
];

const MY_PROJECTS = [
  {
    name: "Greenhill Community Garden",
    progress: 72,
    status: "Active",
  },
  {
    name: "Solar Roof Installation",
    progress: 45,
    status: "Active",
  },
  {
    name: "School Library Build",
    progress: 100,
    status: "Verified",
  },
  {
    name: "Water Well Project",
    progress: 28,
    status: "Active",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Welcome back, Juliet
        </h1>
        <p className="text-sm text-muted-foreground">
          Here&apos;s what&apos;s happening across your projects.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s) => (
          <Card key={s.label}>
            <CardContent className="p-5">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-medium text-muted-foreground">
                    {s.label}
                  </p>
                  <p className="mt-2 text-3xl font-bold">{s.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {s.change}
                  </p>
                </div>

                <div className="rounded-md bg-primary/10 p-2 text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Progress */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {PROGRESS.map((p) => (
          <Card key={p.label}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium">
                  {p.label}
                </CardTitle>
                <p.icon className="h-4 w-4 text-muted-foreground" />
              </div>
            </CardHeader>

            <CardContent>
              <div className="flex items-baseline justify-between">
                <span className="text-2xl font-bold">{p.value}%</span>
                <span className="text-xs text-muted-foreground">
                  {p.hint}
                </span>
              </div>

              <Progress value={p.value} className="mt-3" />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI Summary */}
      <Card className="border-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <CardTitle className="text-base">AI Summary</CardTitle>
          </div>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-muted-foreground">
            You&apos;re on track across 6 of 8 active projects. Two
            milestones need evidence uploads in the next 3 days.
            Your Trust Score increased by 4 points this week thanks
            to verified evidence on Greenhill Garden.
          </p>
        </CardContent>
      </Card>

      {/* Activity + Projects */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">My Projects</CardTitle>
            <CardDescription>
              Snapshot of your current portfolio
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            {MY_PROJECTS.map((p) => (
              <div key={p.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">
                    {p.name}
                  </span>

                  <Badge
                    variant={
                      p.status === "Verified"
                        ? "default"
                        : "secondary"
                    }
                  >
                    {p.status}
                  </Badge>
                </div>

                <div className="flex items-center gap-3">
                  <Progress
                    value={p.progress}
                    className="h-2 flex-1"
                  />

                  <span className="w-10 text-right text-xs text-muted-foreground">
                    {p.progress}%
                  </span>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">
              Recent Activity
            </CardTitle>
          </CardHeader>

          <CardContent className="space-y-4">
            {ACTIVITY.map((a, i) => (
              <div key={i} className="flex gap-3">
                <div className="rounded-md bg-muted p-2 text-primary">
                  <a.icon className="h-4 w-4" />
                </div>

                <div className="flex-1">
                  <p className="text-sm">{a.text}</p>
                  <p className="text-xs text-muted-foreground">
                    {a.time}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}