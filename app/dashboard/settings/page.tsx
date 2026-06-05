import type { Metadata } from "next";
import { User, Bell, Lock, Shield } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../../_components/ui/Card";

import { Button } from "../../_components/ui/Button";
import { Input } from "../../_components/ui/Input";
import { Label } from "../../_components/ui/Label";
import { Switch } from "../../_components/ui/Switch";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../_components/ui/Tabs";

import { Separator } from "../../_components/ui/Separator";

export const metadata: Metadata = {
  title: "Settings — TRACE",
  description:
    "Manage account, notifications, privacy and security settings",
};

function Row({
  title,
  desc,
  control,
}: {
  title: string;
  desc: string;
  control: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-3">
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-xs text-muted-foreground">
          {desc}
        </p>
      </div>

      {control}
    </div>
  );
}

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Settings
        </h1>

        <p className="text-sm text-muted-foreground">
          Manage your account, notifications and privacy.
        </p>
      </div>

      <Tabs
        defaultValue="account"
        className="space-y-4"
      >
        <TabsList>
          <TabsTrigger value="account">
            <User className="mr-2 h-4 w-4" />
            Account
          </TabsTrigger>

          <TabsTrigger value="notifications">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </TabsTrigger>

          <TabsTrigger value="privacy">
            <Lock className="mr-2 h-4 w-4" />
            Privacy
          </TabsTrigger>

          <TabsTrigger value="security">
            <Shield className="mr-2 h-4 w-4" />
            Security
          </TabsTrigger>
        </TabsList>

        {/* Account */}
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">
                Account Settings
              </CardTitle>

              <CardDescription>
                Update your profile information
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="fullName">
                    Full Name
                  </Label>
                  <Input
                    id="fullName"
                    defaultValue="Jane Doe"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">
                    Email
                  </Label>
                  <Input
                    id="email"
                    defaultValue="jane@trace.app"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="role">
                    Role
                  </Label>
                  <Input
                    id="role"
                    defaultValue="Construction Lead"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">
                    Location
                  </Label>
                  <Input
                    id="location"
                    defaultValue="Nairobi, KE"
                  />
                </div>
              </div>

              <div className="flex justify-end">
                <Button>
                  Save Changes
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">
                Notification Settings
              </CardTitle>

              <CardDescription>
                Choose what you want to be notified about
              </CardDescription>
            </CardHeader>

            <CardContent className="divide-y divide-border">
              <Row
                title="Evidence Verified"
                desc="When an upload is verified or rejected"
                control={<Switch defaultChecked />}
              />

              <Row
                title="Milestone Updates"
                desc="Progress on projects you own or collaborate on"
                control={<Switch defaultChecked />}
              />

              <Row
                title="Trust Score Changes"
                desc="When your trust score changes"
                control={<Switch />}
              />

              <Row
                title="Weekly Digest"
                desc="Summary email every Monday"
                control={<Switch defaultChecked />}
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Privacy */}
        <TabsContent value="privacy">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">
                Privacy Settings
              </CardTitle>

              <CardDescription>
                Control what is visible publicly
              </CardDescription>
            </CardHeader>

            <CardContent className="divide-y divide-border">
              <Row
                title="Public Portfolio"
                desc="Show verified projects on your public page"
                control={<Switch defaultChecked />}
              />

              <Row
                title="Show Trust Score"
                desc="Display your trust score publicly"
                control={<Switch defaultChecked />}
              />

              <Row
                title="Show GPS on Evidence"
                desc="Reveal precise GPS coordinates"
                control={<Switch />}
              />

              <Row
                title="Allow Indexing"
                desc="Let search engines index your portfolio"
                control={<Switch defaultChecked />}
              />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security */}
        <TabsContent value="security">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">
                Security Settings
              </CardTitle>

              <CardDescription>
                Protect your account
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">
                    Current Password
                  </Label>

                  <Input
                    id="currentPassword"
                    type="password"
                    placeholder="••••••••"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="newPassword">
                    New Password
                  </Label>

                  <Input
                    id="newPassword"
                    type="password"
                    placeholder="••••••••"
                  />
                </div>
              </div>

              <Separator />

              <Row
                title="Two-Factor Authentication"
                desc="Add an extra layer of security"
                control={<Switch />}
              />

              <Row
                title="Login Alerts"
                desc="Email me about new sign-ins"
                control={<Switch defaultChecked />}
              />

              <div className="flex justify-end">
                <Button>
                  Update Security
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}