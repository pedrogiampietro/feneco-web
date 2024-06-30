import { useState } from "react";
import { Layout, LayoutHeader } from "@/components/custom/layout";
import ThemeSwitch from "@/components/theme-switch";
import { useAuth } from "@/hooks/use-auth";
import { LoginDropdown } from "@/components/login-dropdown";
import { UserNav } from "@/components/user-nav";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function ViewGuildInformation() {
  const [activeTab, setActiveTab] = useState("members");
  const { isAuthenticated } = useAuth();

  return (
    <Layout>
      <LayoutHeader>
        <div className="ml-auto flex items-center space-x-4">
          <ThemeSwitch />
          {isAuthenticated ? <UserNav /> : <LoginDropdown />}
        </div>
      </LayoutHeader>
      <div className="w-full max-w-6xl mx-auto">
        <header className="flex items-center justify-between p-4 bg-primary text-primary-foreground rounded-t-lg shadow-md">
          <div className="flex items-center gap-4">
            <div className="bg-primary-foreground rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold shadow-sm">
              G
            </div>
            <div>
              <div className="font-bold text-lg">The Mighty Guild</div>
              <div className="text-sm text-muted-foreground">120 Members</div>
            </div>
          </div>
          <div className="text-2xl font-bold">The Mighty Guild</div>
        </header>
        <div className="grid grid-cols-2 gap-6 p-6">
          <div className="space-y-4">
            <Card>
              <CardContent>
                <p>
                  Welcome to the Mighty Guild, a community of adventurers,
                  warriors, and mages who have banded together to conquer the
                  challenges of the realm. Our guild is known for its unwavering
                  camaraderie, strategic prowess, and unparalleled bravery in
                  the face of adversity.
                </p>
                <p>
                  Whether you're a seasoned veteran or a fresh-faced recruit,
                  you'll find a home within our ranks. Together, we'll embark on
                  epic quests, vanquish fearsome foes, and forge lasting bonds
                  of friendship that will carry us through the toughest of
                  battles.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
        <Tabs
          defaultValue="members"
          className="w-full"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="members">Members</TabsTrigger>
            <TabsTrigger value="wars">Wars</TabsTrigger>
          </TabsList>
          <TabsContent value="members">
            <div className="relative mx-4">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">Members</h2>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { name: "John Doe", level: 25, status: "green" },
                    { name: "Jane Smith", level: 18, status: "red" },
                    { name: "Bob Johnson", level: 32, status: "green" },
                    { name: "Sarah Lee", level: 22, status: "green" },
                    { name: "Tom Wilson", level: 15, status: "red" },
                    { name: "Emily Davis", level: 28, status: "green" },
                  ].map((member, index) => (
                    <Card key={index} className="flex items-center gap-4 p-4">
                      <div
                        className={`rounded-full w-3 h-3 bg-${member.status}-500`}
                      />
                      <div>
                        <div className="font-bold">{member.name}</div>
                        <div className="text-sm text-muted-foreground">
                          Level {member.level}
                        </div>
                      </div>
                      <Badge
                        className={`ml-auto bg-${member.status}-200 text-${member.status}-800`}
                      >
                        {member.status === "green" ? "Online" : "Offline"}
                      </Badge>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="wars">
            <div className="p-4">
              <div className="flex items-center mb-4">
                <span className="px-2 py-1 text-sm font-bold text-black bg-green-500">
                  Active War
                </span>
                <span className="ml-4 text-sm">
                  Winning the war against Fluffy Kittens (1 - 0)
                </span>
                <span className="ml-auto text-sm">Started August 8, 2015</span>
              </div>
              <div className="flex items-center mb-4 space-x-2">
                <span className="px-2 py-1 text-sm font-bold text-black bg-red-500">
                  110% death loss
                </span>
                <span className="px-2 py-1 text-sm font-bold text-black bg-yellow-500">
                  1,000,000gp wager
                </span>
                <span className="px-2 py-1 text-sm font-bold text-black bg-blue-500">
                  invites allowed
                </span>
              </div>
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  <img
                    src="https://placehold.co/600x400"
                    alt="Guild Logo"
                    className="object-cover w-10 h-10"
                  />
                  <span className="ml-2 text-lg font-bold">
                    DRAGONS OF THE DANK (1 KILL)
                  </span>
                </div>
                <div className="flex items-center ml-auto">
                  <img
                    src="https://placehold.co/600x400"
                    alt="Guild Logo"
                    className="object-cover w-10 h-10"
                  />
                  <span className="ml-2 text-lg font-bold">
                    FLUFFY KITTENS (0 KILLS)
                  </span>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  <span className="ml-2 text-sm">
                    <span className="font-bold text-green-500">Synt4x</span> (1
                    kill / 0 deaths)
                  </span>
                </div>
                <div className="flex items-center ml-auto">
                  <span className="ml-2 text-sm">
                    <span className="font-bold text-blue-500">Some Noob</span>{" "}
                    (0 kills / 1 death)
                  </span>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
}
