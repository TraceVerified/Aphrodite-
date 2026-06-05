import type { Metadata } from "next";
import { UserPlus, Mail, Activity } from "lucide-react";

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
import { Avatar, AvatarFallback } from "../../_components/ui/Avatar";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../_components/ui/Select";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../_components/ui/Table";

export const metadata: Metadata = {
  title: "Collaborators — TRACE",
  description: "Manage collaborators and track project contributions",
};

const PEOPLE = [
  {
    name: "Marcus Owino",
    email: "marcus@trace.app",
    role: "Owner",
    contributions: 142,
    active: "Today",
  },
  {
    name: "Aisha Khamis",
    email: "aisha@trace.app",
    role: "Collaborator",
    contributions: 87,
    active: "2h ago",
  },
  {
    name: "David Mwangi",
    email: "david@trace.app",
    role: "Collaborator",
    contributions: 54,
    active: "Yesterday",
  },
  {
    name: "Lina Otieno",
    email: "lina@trace.app",
    role: "Viewer",
    contributions: 0,
    active: "3d ago",
  },
];

const ACTIVITY = [
  {
    who: "Aisha Khamis",
    what: "Uploaded 8 evidence files to Greenhill Garden",
    when: "2h ago",
  },
  {
    who: "Marcus Owino",
    what: "Marked Foundation milestone as complete",
    when: "5h ago",
  },
  {
    who: "David Mwangi",
    what: "Added GPS notes to Well Site B",
    when: "Yesterday",
  },
];

export default function CollaboratorsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Collaborators
          </h1>

          <p className="text-sm text-muted-foreground">
            Manage your team and track contributions.
          </p>
        </div>
      </div>

      {/* Invite Collaborators */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">
            Invite Collaborators
          </CardTitle>

          <CardDescription>
            Send an invite by email and assign a role
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-wrap gap-3">
          <div className="relative min-w-[260px] flex-1">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

            <Input
              placeholder="email@company.com"
              className="pl-9"
            />
          </div>

          <Select defaultValue="collaborator">
            <SelectTrigger className="w-[180px]">
              <SelectValue />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="owner">
                Owner
              </SelectItem>

              <SelectItem value="collaborator">
                Collaborator
              </SelectItem>

              <SelectItem value="viewer">
                Viewer
              </SelectItem>
            </SelectContent>
          </Select>

          <Button>
            <UserPlus className="mr-2 h-4 w-4" />
            Send Invite
          </Button>
        </CardContent>
      </Card>

      {/* Team + Activity */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-base">
              Team
            </CardTitle>
          </CardHeader>

          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Member</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Contributions</TableHead>
                  <TableHead>Last Active</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {PEOPLE.map((person) => (
                  <TableRow key={person.email}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="bg-primary/10 text-xs text-primary">
                            {person.name
                              .split(" ")
                              .map((name) => name[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>

                        <div>
                          <p className="text-sm font-medium">
                            {person.name}
                          </p>

                          <p className="text-xs text-muted-foreground">
                            {person.email}
                          </p>
                        </div>
                      </div>
                    </TableCell>

                    <TableCell>
                      <Badge
                        variant={
                          person.role === "Owner"
                            ? "default"
                            : person.role === "Viewer"
                              ? "outline"
                              : "secondary"
                        }
                      >
                        {person.role}
                      </Badge>
                    </TableCell>

                    <TableCell className="font-medium">
                      {person.contributions}
                    </TableCell>

                    <TableCell className="text-muted-foreground">
                      {person.active}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Activity Tracking */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-primary" />

              <CardTitle className="text-base">
                Activity Tracking
              </CardTitle>
            </div>
          </CardHeader>

          <CardContent className="space-y-4">
            {ACTIVITY.map((activity, index) => (
              <div
                key={index}
                className="border-l-2 border-primary/30 pl-3"
              >
                <p className="text-sm font-medium">
                  {activity.who}
                </p>

                <p className="text-xs text-muted-foreground">
                  {activity.what}
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  {activity.when}
                </p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}