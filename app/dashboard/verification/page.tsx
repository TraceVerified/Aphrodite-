import type { Metadata } from "next";
import {
  CheckCircle2,
  XCircle,
  Clock,
  MapPin,
  Calendar,
  FileText,
  Download,
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

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../_components/ui/Table";

import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "../../_components/ui/Tabs";

export const metadata: Metadata = {
  title: "Verification — TRACE",
  description: "Review evidence, GPS and timestamp verification checks",
};

const QUEUE = [
  {
    file: "foundation_photo_03.jpg",
    project: "Greenhill Garden",
    gps: true,
    time: true,
    score: 94,
    status: "Verified",
  },
  {
    file: "walls_drone.mp4",
    project: "Affordable Housing",
    gps: true,
    time: true,
    score: 88,
    status: "Verified",
  },
  {
    file: "well_dig_day7.jpg",
    project: "Water Well",
    gps: false,
    time: true,
    score: 52,
    status: "Pending",
  },
  {
    file: "panel_install.jpg",
    project: "Solar Roof",
    gps: true,
    time: false,
    score: 61,
    status: "Pending",
  },
  {
    file: "trees_batch_b.jpg",
    project: "Tree Planting",
    gps: false,
    time: false,
    score: 22,
    status: "Rejected",
  },
];

const STATS = [
  {
    label: "Pending",
    value: 12,
    icon: Clock,
    tone: "text-yellow-600 bg-yellow-100",
  },
  {
    label: "Verified",
    value: 84,
    icon: CheckCircle2,
    tone: "text-emerald-600 bg-emerald-100",
  },
  {
    label: "Rejected",
    value: 6,
    icon: XCircle,
    tone: "text-red-600 bg-red-100",
  },
];

export default function VerificationPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Evidence & Verification
          </h1>

          <p className="text-sm text-muted-foreground">
            Review evidence, GPS and timestamp checks.
          </p>
        </div>

        <Button>
          <FileText className="mr-2 h-4 w-4" />
          Generate Trace Verified Report
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {STATS.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="flex items-center justify-between p-5">
              <div>
                <p className="text-xs font-medium text-muted-foreground">
                  {stat.label}
                </p>

                <p className="mt-1 text-3xl font-bold">
                  {stat.value}
                </p>
              </div>

              <div className={`rounded-md p-3 ${stat.tone}`}>
                <stat.icon className="h-5 w-5" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="all">
        <TabsList>
          <TabsTrigger value="all">
            All Evidence
          </TabsTrigger>

          <TabsTrigger value="pending">
            Pending
          </TabsTrigger>

          <TabsTrigger value="verified">
            Verified
          </TabsTrigger>

          <TabsTrigger value="rejected">
            Rejected
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">
            Evidence Queue
          </CardTitle>

          <CardDescription>
            GPS and timestamp checks per uploaded item
          </CardDescription>
        </CardHeader>

        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>File</TableHead>
                <TableHead>Project</TableHead>
                <TableHead>GPS</TableHead>
                <TableHead>Timestamp</TableHead>
                <TableHead>Score</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">
                  Actions
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {QUEUE.map((item) => (
                <TableRow key={item.file}>
                  <TableCell className="font-medium">
                    {item.file}
                  </TableCell>

                  <TableCell className="text-muted-foreground">
                    {item.project}
                  </TableCell>

                  <TableCell>
                    <span
                      className={`inline-flex items-center gap-1 text-xs ${item.gps
                          ? "text-emerald-600"
                          : "text-red-600"
                        }`}
                    >
                      <MapPin className="h-3 w-3" />
                      {item.gps ? "Match" : "No Match"}
                    </span>
                  </TableCell>

                  <TableCell>
                    <span
                      className={`inline-flex items-center gap-1 text-xs ${item.time
                          ? "text-emerald-600"
                          : "text-red-600"
                        }`}
                    >
                      <Calendar className="h-3 w-3" />
                      {item.time ? "Match" : "Off"}
                    </span>
                  </TableCell>

                  <TableCell className="font-semibold">
                    {item.score}
                  </TableCell>

                  <TableCell>
                    <Badge
                      variant={
                        item.status === "Verified"
                          ? "default"
                          : item.status === "Rejected"
                            ? "destructive"
                            : "secondary"
                      }
                    >
                      {item.status}
                    </Badge>
                  </TableCell>

                  <TableCell className="text-right">
                    <Button
                      size="sm"
                      variant="ghost"
                    >
                      <Download className="mr-1 h-3 w-3" />
                      Report
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}