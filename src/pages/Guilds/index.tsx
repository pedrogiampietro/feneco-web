import { Layout, LayoutHeader } from "@/components/custom/layout";
import SearchCharacter from "@/components/custom/search-character";
import { LoginDropdown } from "@/components/login-dropdown";
import ThemeSwitch from "@/components/theme-switch";
import { UserNav } from "@/components/user-nav";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/use-auth";

export default function Guilds() {
  const { isAuthenticated } = useAuth();

  const guilds = [
    { name: "Knights of Tibia", link: "/guild/pedro" },
    { name: "Mages of Tibia", link: "#" },
    { name: "Paladins of Tibia", link: "#" },
    { name: "Druids of Tibia", link: "#" },
    { name: "Sorcerers of Tibia", link: "#" },
    { name: "Archers of Tibia", link: "#" },
    { name: "Necromancers of Tibia", link: "#" },
    { name: "Assassins of Tibia", link: "#" },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredGuilds = guilds.filter((guild) =>
    guild.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <LayoutHeader>
        <div className="ml-auto flex items-center space-x-4 mt-4">
          <SearchCharacter />
          <ThemeSwitch />
          {isAuthenticated ? <UserNav /> : <LoginDropdown />}
        </div>
      </LayoutHeader>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid gap-6 px-4 md:px-6">
          <div className="space-y-3 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Guilds of Tibia
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl lg:text-base xl:text-xl">
              Explore the diverse guilds that make up the vibrant Tibia
              community.
            </p>
            <input
              type="text"
              placeholder="Search Guilds"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 mt-4 text-sm border rounded-md md:w-1/3 text-black"
            />
          </div>
          <div className="grid grid-cols-1 gap-4">
            {filteredGuilds.map((guild, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-lg border bg-background p-4 shadow-sm transition-colors hover:bg-muted"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                    <img
                      src="/placeholder.svg"
                      width={40}
                      height={40}
                      alt="Guild Logo"
                      className="h-8 w-8"
                    />
                  </div>
                  <div className="font-atkinson text-lg font-bold">
                    {guild.name}
                  </div>
                </div>
                <Link
                  to={guild.link}
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  View
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
