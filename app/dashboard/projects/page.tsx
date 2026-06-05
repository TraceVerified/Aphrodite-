import type { Metadata } from "next";
import {
  Plus,
  Search,
  Filter,
  MapPin,
  Calendar,
  Eye,
  Lock,
  Upload,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../../_components/ui/Card";

import { Button } from "../../_components/ui/Button";
import { Input } from "../../_components/ui/Input";
import { Badge } from "../../_components/ui/Badge";
import { Progress } from "../../_components/ui/Progress";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../_components/ui/Select";

import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "../../_components/ui/Tabs";

export const metadata: Metadata = {
  title: "Projects — TRACE",
  description: "Manage your active and completed projects",
};

const PROJECTS = [
  {
    name: "Greenhill Community Garden",
    location: "Nairobi, KE",
    progress: 72,
    status: "Active",
    visibility: "Public",
    date: "Jun 2026",
    milestones: "18/25",
  },
  {
    name: "Solar Roof Installation",
    location: "Kisumu, KE",
    progress: 45,
    status: "Active",
    visibility: "Private",
    date: "May 2026",
    milestones: "9/20",
  },
  {
    name: "School Library Build",
    location: "Eldoret, KE",
    progress: 100,
    status: "Verified",
    visibility: "Public",
    date: "Apr 2026",
    milestones: "30/30",
  },
  {
    name: "Water Well Project",
    location: "Turkana, KE",
    progress: 28,
    status: "Active",
    visibility: "Public",
    date: "Jul 2026",
    milestones: "4/14",
  },
  {
    name: "Tree Planting Drive",
    location: "Naivasha, KE",
    progress: 88,
    status: "Active",
    visibility: "Public",
    date: "Jun 2026",
    milestones: "22/25",
  },
  {
    name: "Affordable Housing Block",
    location: "Mombasa, KE",
    progress: 60,
    status: "Active",
    visibility: "Private",
    date: "Aug 2026",
    milestones: "12/20",
  },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Projects
          </h1>

          <p className="text-sm text-muted-foreground">
            Manage your active and completed projects.
          </p>
        </div>

        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Project
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="flex flex-wrap items-center gap-3 p-4">
          <div className="relative min-w-[220px] flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              placeholder="Search projects..."
              className="pl-9"
            />
          </div>

          <Select>
            <SelectTrigger className="w-[160px]">
              <Filter className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Status" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="all">
                All statuses
              </SelectItem>
              <SelectItem value="active">
                Active
              </SelectItem>
              <SelectItem value="verified">
                Verified
              </SelectItem>
              <SelectItem value="draft">
                Draft
              </SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-[160px]">
              <SelectValue placeholder="Visibility" />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="all">
                All
              </SelectItem>
              <SelectItem value="public">
                Public
              </SelectItem>
              <SelectItem value="private">
                Private
              </SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Tabs */}
      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">
            All
          </TabsTrigger>

          <TabsTrigger value="active">
            Active
          </TabsTrigger>

          <TabsTrigger value="verified">
            Verified
          </TabsTrigger>

          <TabsTrigger value="drafts">
            Drafts
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Project Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((project) => (
          <Card
            key={project.name}
            className="overflow-hidden transition-shadow hover:shadow-md"
          >
            <div className="h-28 bg-gradient-to-br from-primary/30 to-primary/5" />

            <CardHeader className="pb-2">
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="text-base">
                  {project.name}
                </CardTitle>

                <Badge
                  variant={
                    project.status === "Verified"
                      ? "default"
                      : "secondary"
                  }
                >
                  {project.status}
                </Badge>
              </div>

              <CardDescription className="flex items-center gap-3 text-xs">
                <span className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {project.location}
                </span>

                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {project.date}
                </span>
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-3">
              <div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>
                    Milestones {project.milestones}
                  </span>

                  <span>{project.progress}%</span>
                </div>

                <Progress
                  value={project.progress}
                  className="mt-1.5 h-2"
                />
              </div>

              <div className="flex items-center justify-between border-t border-border pt-3">
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  {project.visibility === "Public" ? (
                    <Eye className="h-3 w-3" />
                  ) : (
                    <Lock className="h-3 w-3" />
                  )}

                  {project.visibility}
                </span>

                <Button size="sm" variant="ghost">
                  <Upload className="mr-1 h-3 w-3" />
                  Evidence
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}