import { useState } from "react";

import { Card, CardHeader, CardContent } from "@/components/ui/card";
import {@/components/ui/tabs
  Tabs,@/components/ui/badge
  TabsList,@/components/ui/avatar
  TabsTrigger,
  TabsContent,
} from "@/components/custom/ui/tabs";
import { Badge } from "@/components/custom/ui/badge";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/custom/ui/avatar";
import {
  Axe,
  Crosshair,
  Ghost,
  MedalIcon,
  SatelliteIcon,
  ShieldIcon,
  SwordIcon,
  TrophyIcon,
  WandIcon,
} from "lucide-react";
import { Layout, LayoutHeader } from "@/components/custom/layout";
import SearchCharacter from "@/components/custom/search-character";
import ThemeSwitch from "@/components/theme-switch";
import { UserNav } from "@/components/user-nav";
import { LoginDropdown } from "@/components/login-dropdown";
import { useAuth } from "@/hooks/use-auth";

export default function Character() {
  const [activeTab, setActiveTab] = useState("deathlist");
  const { isAuthenticated } = useAuth();

  return (
    <Layout>
      <LayoutHeader>
        <div className="ml-auto flex items-center space-x-4 mt-4">
          <SearchCharacter />
          <ThemeSwitch />
          {isAuthenticated ? <UserNav /> : <LoginDropdown />}
        </div>
      </LayoutHeader>

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
                          <p className="text-sm text-gray-400">
                            Grim Reaper x 1
                          </p>
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
                <p className="text-xs text-muted-foreground">
                  Earned 1 year ago
                </p>
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
    </Layout>
  );
}
