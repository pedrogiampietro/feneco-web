import { ComponentProps } from "react";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns/format";
import {
  BadgeAlertIcon,
  FacebookIcon,
  InstagramIcon,
  MoreVertical,
  Reply,
  YoutubeIcon,
} from "lucide-react";
import { Layout, LayoutHeader } from "@/components/custom/layout";
import ThemeSwitch from "@/components/theme-switch";
import {
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { useAuth } from "@/hooks/use-auth";
import { LoginDropdown } from "@/components/login-dropdown";
import { UserNav } from "@/components/user-nav";
import SearchCharacter from "@/components/custom/search-character";

export default function NewsDisplay() {
  const { isAuthenticated } = useAuth();

  const mail = {
    id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
    name: "William Smith",
    email: "williamsmith@example.com",
    subject: "Meeting Tomorrow",
    text: "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    date: "2023-10-22T09:00:00",
    read: true,
    labels: ["13x", "pvp", "global"],
  };

  function getBadgeVariantFromLabel(
    label: string
  ): ComponentProps<typeof Badge>["variant"] {
    if (["pvp"].includes(label.toLowerCase())) {
      return "default";
    }

    if (["global"].includes(label.toLowerCase())) {
      return "outline";
    }

    return "secondary";
  }

  return (
    <Layout>
      <LayoutHeader>
        <div className="ml-auto flex items-center space-x-4 mt-4">
          <SearchCharacter />
          <ThemeSwitch />
          {isAuthenticated ? <UserNav /> : <LoginDropdown />}
        </div>
      </LayoutHeader>

      <div className="text-white">
        <header className="border p-2 flex items-center justify-between border rounded-md mx-2">
          <div className="flex items-center space-x-2">
            <img
              src="https://placehold.co/600x400"
              alt="Logo"
              className="h-8 w-8"
            />
            <span className="text-lg font-bold">CAST</span>
          </div>
          <div className="flex items-center space-x-4">
            <YoutubeIcon className="h-6 w-6" />
            <FacebookIcon className="h-6 w-6" />
            <InstagramIcon className="h-6 w-6" />
          </div>
          <div className="text-sm">645 Players Online</div>
        </header>
        <main className="p-4">
          <section className="border p-4 rounded-md mb-4">
            <h2 className="text-xl font-bold mb-2">Mural de Recados</h2>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <span className="text-sm">29/06/2024 -</span>
                <BadgeAlertIcon className="h-4 w-4 text-red-500" />
                <span className="text-sm">
                  NOVO UPDATE ATIVO! UMA NOVA CIDADE, QUEST E HUNTS ALÉM DE
                  RECOMPENSA DIÁ...
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-sm">28/06/2024 -</span>
                <BadgeAlertIcon className="h-4 w-4 text-blue-500" />
                <span className="text-sm">
                  FINAL DE SEMANA COM BÔNUS E BOSS! A PARTIR DO SS, 10% + LOOT E
                  2X FAST RESPWAN...
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-sm">27/06/2024 -</span>
                <BadgeAlertIcon className="h-4 w-4 text-yellow-500" />
                <span className="text-sm">
                  Notícia Urgente de Última Hora! Hoje, 26/06, logo após o
                  CASTLE WAR, haverá um...
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-sm">24/06/2024 -</span>
                <BadgeAlertIcon className="h-4 w-4 text-green-500" />
                <span className="text-sm">
                  CASTLE WAR, PELEGOS E GUERRAS ACONTECENDO... Convogue sua
                  guild para tomar o CAS...
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-sm">23/06/2024 -</span>
                <BadgeAlertIcon className="h-4 w-4 text-purple-500" />
                <span className="text-sm">
                  INSCRIÇÕES ABERTAS PARA A 6ª COPA PVP do UnderWar! As melhores
                  guilds com os mel...
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-sm">20/06/2024 -</span>
                <BadgeAlertIcon className="h-4 w-4 text-orange-500" />
                <span className="text-sm">
                  [EVENTO] Ataque Vikings: os Bárbaros! Abra uma nova cidade e
                  ganhe exp diferenciada part...
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-sm">19/06/2024 -</span>
                <BadgeAlertIcon className="h-4 w-4 text-pink-500" />
                <span className="text-sm">
                  PROMOÇÃO DE SÃO JOÃO COM ITENS DE EDIÇÃO LIMITADA... A Pacotes
                  exclusivos e raros...
                </span>
              </li>
            </ul>
          </section>
          <section className="border p-4 rounded-md mb-4">
            <img
              src="https://placehold.co/600x400"
              alt="UnderBet"
              className="w-full h-48 object-cover rounded-md"
            />
          </section>
          <section className="border p-4 rounded-md">
            <h2 className="text-xl font-bold mb-2">
              Os clãs mais sanguinários
            </h2>
            <div className="grid grid-cols-5 gap-4">
              <div className="text-center">
                <img
                  src="https://placehold.co/600x400"
                  alt="Clan 1"
                  className="w-24 h-24 mx-auto rounded-md"
                />
                <p className="mt-2">Amostradhinos</p>
                <p className="text-sm text-muted-foreground">4126 kills</p>
              </div>
              <div className="text-center">
                <img
                  src="https://placehold.co/600x400"
                  alt="Clan 2"
                  className="w-24 h-24 mx-auto rounded-md"
                />
                <p className="mt-2">Vraau Team</p>
                <p className="text-sm text-muted-foreground">2850 kills</p>
              </div>
              <div className="text-center">
                <img
                  src="https://placehold.co/600x400"
                  alt="Clan 3"
                  className="w-24 h-24 mx-auto rounded-md"
                />
                <p className="mt-2">Brooklyn Charlovers</p>
                <p className="text-sm text-muted-foreground">1800 kills</p>
              </div>
              <div className="text-center">
                <img
                  src="https://placehold.co/600x400"
                  alt="Clan 4"
                  className="w-24 h-24 mx-auto rounded-md"
                />
                <p className="mt-2">Leed Zeppelin</p>
                <p className="text-sm text-muted-foreground">1201 kills</p>
              </div>
              <div className="text-center">
                <img
                  src="https://placehold.co/600x400"
                  alt="Clan 5"
                  className="w-24 h-24 mx-auto rounded-md"
                />
                <p className="mt-2">Premier League</p>
                <p className="text-sm text-muted-foreground">1180 kills</p>
              </div>
            </div>
            <div className="text-right mt-4">
              <a href="#" className="text-blue-500">
                Exibir mais guilds
              </a>
            </div>
          </section>
        </main>
      </div>

      <TooltipProvider>
        <div className="flex h-full flex-col">
          <div className="flex items-center p-2">
            <div className="ml-auto flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" disabled={!mail}>
                    <Reply className="h-4 w-4" />
                    <span className="sr-only">Reply</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Reply</TooltipContent>
              </Tooltip>
            </div>
            <Separator orientation="vertical" className="mx-2 h-6" />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" disabled={!mail}>
                  <MoreVertical className="h-4 w-4" />
                  <span className="sr-only">More</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>View all</DropdownMenuItem>
                <DropdownMenuItem>Star post</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <Separator />
          {mail ? (
            <div className="flex flex-1 flex-col">
              <div className="flex items-start p-4">
                <div className="flex items-start gap-4 text-sm">
                  <Avatar>
                    <AvatarImage alt={mail.name} />
                    <AvatarFallback>
                      {mail.name
                        .split(" ")
                        .map((chunk) => chunk[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid gap-1">
                    <div className="font-semibold">Conheça o Faneco AAC</div>
                    <div className="line-clamp-1 text-xs">
                      Vocês pediram, nós obedecemos!{" "}
                    </div>
                  </div>
                </div>
                {mail.date && (
                  <div className="ml-auto text-xs text-muted-foreground">
                    {format(new Date(mail.date), "PPpp")}
                  </div>
                )}
              </div>
              <Separator />
              <div className="flex-1 whitespace-pre-wrap p-4 text-sm">
                {mail.labels.length ? (
                  <div>
                    <div className="line-clamp-2 text-xs text-muted-foreground mb-2">
                      {mail.text}
                    </div>
                    <div className="flex items-center gap-2">
                      {mail.labels.map((label) => (
                        <Badge
                          key={label}
                          variant={getBadgeVariantFromLabel(label)}
                        >
                          {label}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>

              <Separator className="mt-auto" />
              <div className="p-4">
                <form>
                  <div className="grid gap-4">
                    <Textarea className="p-4" placeholder={`Reply ...`} />
                    <div className="flex items-center">
                      <Button
                        onClick={(e) => e.preventDefault()}
                        size="sm"
                        className="ml-auto"
                      >
                        Send
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center text-muted-foreground">
              No message selected
            </div>
          )}
        </div>
      </TooltipProvider>
    </Layout>
  );
}
