import { useState } from "react";
import ThemeSwitch from "@/components/theme-switch";
import { UserNav } from "@/components/user-nav";
import { Layout, LayoutBody, LayoutHeader } from "@/components/custom/layout";
import { DataTable } from "./components/data-table";
import { columns } from "./components/columns";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/hooks/use-auth";
// import { fetchServers } from "@/services/serverService";
import { LoginDropdown } from "@/components/login-dropdown";
import { servers as dataServer } from "./data/servers";

export default function Highscores() {
  const { isAuthenticated } = useAuth();
  const [servers, setServers] = useState(dataServer);

  // useEffect(() => {
  //   const getServers = async () => {
  //     try {
  //       const serverData = await fetchServers();
  //       console.log("serverData", serverData);
  //       setServers(serverData);
  //     } catch (error) {
  //       console.error("Erro ao carregar servidores:", error);
  //     }
  //   };

  //   getServers();
  // }, []);

  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <LayoutHeader>
        <div className="ml-auto flex items-center space-x-4">
          <ThemeSwitch />
          {isAuthenticated ? <UserNav /> : <LoginDropdown />}
        </div>
      </LayoutHeader>

      <LayoutBody className="flex flex-col" fixedHeight>
        <Separator className="my-4" />

        <div className="mb-2 flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Highscorees</h2>
            <p className="text-muted-foreground">
              Skills displayed in the Highscores do not include any bonuses
              (loyalty, equipment etc.).
            </p>
          </div>
        </div>
        <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
          <DataTable data={servers} columns={columns} />
        </div>
      </LayoutBody>
    </Layout>
  );
}
