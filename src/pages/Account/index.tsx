import ThemeSwitch from "@/components/theme-switch";
import { UserNav } from "@/components/user-nav";
import { Layout, LayoutBody, LayoutHeader } from "@/components/custom/layout";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@/hooks/use-auth";
import { LoginDropdown } from "@/components/login-dropdown";
import { Button } from "@/components/custom/button";
import { useState, useEffect } from "react";
import { DataTable } from "./components/data-table";
import { characterColumns } from "./components/columns";

const characterData = [
  { Id: 1, Name: "Character One", Level: 20, Status: "online" },
  { Id: 2, Name: "Character Two", Level: 15, Status: "offline" },
  { Id: 3, Name: "Character Three", Level: 30, Status: "online" },
];

export default function AccountManagement() {
  const { isAuthenticated } = useAuth();
  const [characters, setCharacters] = useState<any>([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      // Simulação de uma chamada para obter os personagens do usuário
      setCharacters(characterData);
    };

    fetchCharacters();
  }, []);

  return (
    <Layout>
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
            <h2 className="text-2xl font-bold tracking-tight">
              Account Management
            </h2>
            <p className="text-muted-foreground">
              Manage your account settings and characters
            </p>
          </div>
        </div>

        <div className="flex space-x-4 my-4">
          <Button>Create New Character</Button>
          <Button>Change Your Password</Button>
          <Button>Transfer a Character</Button>
        </div>

        <Separator className="my-4" />

        <div className="flex-1 overflow-auto">
          <h3 className="text-xl font-semibold mb-2">Your Characters</h3>
          <DataTable data={characters} columns={characterColumns} />
        </div>
      </LayoutBody>
    </Layout>
  );
}
