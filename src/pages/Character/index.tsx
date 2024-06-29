import { useState } from "react";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Axe,
  Crosshair,
  Ghost,
  SatelliteIcon,
  ShieldIcon,
  SwordIcon,
  WandIcon,
} from "lucide-react";

export default function Character() {
  const [activeTab, setActiveTab] = useState("deathlist");
  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto p-4 md:p-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="bg-muted rounded-full w-16 h-16 flex items-center justify-center text-4xl font-bold">
            JD
          </div>
          <div>
            <h1 className="text-2xl font-bold">Jaina Dawnbringer</h1>
            <p className="text-muted-foreground">Level 42 Mage</p>
            <p className="text-muted-foreground">Stormwind, Azeroth</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <Card>
          <CardHeader className="bg-muted/20 px-6 py-4">
            <h2 className="text-lg font-semibold">Character Stats</h2>
          </CardHeader>
          <CardContent className="grid grid-cols-2 gap-4 p-6">
            <div className="flex flex-col gap-1">
              <span className="text-muted-foreground">Level</span>
              <span className="text-2xl font-bold">42</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-muted-foreground">Experience</span>
              <span className="text-2xl font-bold">7,542,987</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-muted-foreground">Deaths</span>
              <span className="text-2xl font-bold">17</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-muted-foreground">Kills</span>
              <span className="text-2xl font-bold">12,345</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <Tabs
            defaultValue="deathlist"
            className="w-full"
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="deathlist">Death List</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
            </TabsList>
            <TabsContent value="deathlist">
              <div className="relative mx-4">
                <div className="absolute left-4 top-0 h-full border-l-2 border-[#d1c4e9]" />
                <div className="relative mb-8 flex items-center">
                  <div className="w-8 h-8 bg-[#d1c4e9] rounded-full flex items-center justify-center mr-4">
                    <Crosshair color="black" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="text-base">
                        Fragged a player at level 83.{" "}
                        <Badge variant="destructive">unjustified</Badge>
                      </p>
                      <p className="text-sm text-gray-400">4 days ago</p>
                    </div>
                    <div className="flex items-center mt-2">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>SY</AvatarFallback>
                      </Avatar>
                      <div className="ml-2">
                        <p className="text-sm">Syntax 65 Paladin</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative mb-8 flex items-center">
                  <div className="w-8 h-8 bg-[#d1c4e9] rounded-full flex items-center justify-center mr-4">
                    <Ghost color="black" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <p className="text-base">Died at level 78.</p>
                      <p className="text-sm text-gray-400">5 days ago</p>
                    </div>
                    <div className="flex items-center mt-2">
                      <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>VO</AvatarFallback>
                      </Avatar>
                      <div className="ml-2">
                        <p className="text-sm">
                          Volturiy 105 Sorcerer{" "}
                          <Badge variant="secondary">most damage</Badge>
                        </p>
                        <p className="text-sm text-gray-400">Grim Reaper x 1</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="skills">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 py-4 px-4">
                <div className="flex items-center gap-4">
                  <div className="bg-muted rounded-full w-12 h-12 flex items-center justify-center">
                    <WandIcon className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Magic</p>
                    <p className="text-xs text-muted-foreground">5</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-muted rounded-full w-12 h-12 flex items-center justify-center">
                    <SatelliteIcon className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Club</p>
                    <p className="text-xs text-muted-foreground">8</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-muted rounded-full w-12 h-12 flex items-center justify-center">
                    <SwordIcon className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Sword</p>
                    <p className="text-xs text-muted-foreground">8</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-muted rounded-full w-12 h-12 flex items-center justify-center">
                    <Crosshair />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Distance</p>
                    <p className="text-xs text-muted-foreground">8</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-muted rounded-full w-12 h-12 flex items-center justify-center">
                    <Axe />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Axe</p>
                    <p className="text-xs text-muted-foreground">8</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="bg-muted rounded-full w-12 h-12 flex items-center justify-center">
                    <ShieldIcon className="w-6 h-6 text-muted-foreground" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Shield</p>
                    <p className="text-xs text-muted-foreground"> 6</p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
      <Card>
        <CardHeader className="bg-muted/20 px-6 py-4">
          <h2 className="text-lg font-semibold">Achievements</h2>
        </CardHeader>
        <CardContent className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6">
          <div className="flex items-center gap-4">
            <div className="bg-muted rounded-full w-12 h-12 flex items-center justify-center">
              <TrophyIcon className="w-6 h-6 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-semibold">Slayer of Onyxia</p>
              <p className="text-xs text-muted-foreground">
                Earned 2 years ago
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-muted rounded-full w-12 h-12 flex items-center justify-center">
              <MedalIcon className="w-6 h-6 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-semibold">Defender of Stormwind</p>
              <p className="text-xs text-muted-foreground">Earned 1 year ago</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-muted rounded-full w-12 h-12 flex items-center justify-center">
              <SwordIcon className="w-6 h-6 text-muted-foreground" />
            </div>
            <div>
              <p className="text-sm font-semibold">
                Vanquisher of the Lich King
              </p>
              <p className="text-xs text-muted-foreground">
                Earned 6 months ago
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function MedalIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
      <path d="M11 12 5.12 2.2" />
      <path d="m13 12 5.88-9.8" />
      <path d="M8 7h8" />
      <circle cx="12" cy="17" r="5" />
      <path d="M12 18v-2h-.5" />
    </svg>
  );
}

function TrophyIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

function FlameIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}

function SnowflakeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="m20 16-4-4 4-4" />
      <path d="m4 8 4 4-4 4" />
      <path d="m16 4-4 4-4-4" />
      <path d="m8 20 4-4 4 4" />
    </svg>
  );
}

function RocketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function ActivityIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" />
    </svg>
  );
}

function LockIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
