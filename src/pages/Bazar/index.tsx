import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  AxeIcon,
  BadgeIcon,
  ClubIcon,
  CompassIcon,
  DiameterIcon,
  EllipsisIcon,
  FingerprintIcon,
  FishIcon,
  GemIcon,
  ImportIcon,
  MagnetIcon,
  ShieldIcon,
  SwordIcon,
  WaypointsIcon,
} from "lucide-react";
import { Layout, LayoutHeader } from "@/components/custom/layout";
import SearchCharacter from "@/components/custom/search-character";
import ThemeSwitch from "@/components/theme-switch";
import { UserNav } from "@/components/user-nav";
import { LoginDropdown } from "@/components/login-dropdown";
import { useAuth } from "@/hooks/use-auth";

export default function CharacterBazar() {
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

      <div className="flex flex-col items-center justify-center min-h-screen px-7">
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="w-full max-w-md">
            <CardHeader className="flex items-center justify-between p-4 relative">
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>LP</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg font-bold">Lidyh</CardTitle>
                  <CardDescription className="text-sm">
                    Level 624 - Royal Paladin
                  </CardDescription>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-9 h-9 absolute top-0 right-0 m-4"
                  >
                    <EllipsisIcon className="w-5 h-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Details</DropdownMenuItem>
                  <DropdownMenuItem>Copy Link</DropdownMenuItem>
                  <DropdownMenuItem>Favorite</DropdownMenuItem>
                  <DropdownMenuItem>Search Similar</DropdownMenuItem>
                  <DropdownMenuItem>Estimate Price</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>

            <CardContent className="p-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs font-bold">Server</Label>
                  <p className="text-sm">Celebra</p>
                </div>
                <div>
                  <Label className="text-xs font-bold">PvP</Label>
                  <p className="text-sm">Optional</p>
                </div>
                <div>
                  <Label className="text-xs font-bold">Fim do Leilão</Label>
                  <p className="text-sm">9h 8m, 20:00</p>
                </div>
                <div>
                  <Label className="text-xs font-bold">Lance Mínimo</Label>
                  <p className="text-sm">33,000</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <MagnetIcon className="w-6 h-6 text-yellow-500" />
                  <p className="text-sm">34 Magic</p>
                </div>
                <div className="flex items-center space-x-2">
                  <ClubIcon className="w-6 h-6 text-red-500" />
                  <p className="text-sm">13 Club</p>
                </div>
                <div className="flex items-center space-x-2">
                  <FingerprintIcon className="w-6 h-6 text-orange-500" />
                  <p className="text-sm">18 Fist</p>
                </div>
                <div className="flex items-center space-x-2">
                  <SwordIcon className="w-6 h-6 text-red-500" />
                  <p className="text-sm">27 Sword</p>
                </div>
                <div className="flex items-center space-x-2">
                  <FishIcon className="w-6 h-6 text-blue-500" />
                  <p className="text-sm">10 Fishing</p>
                </div>
                <div className="flex items-center space-x-2">
                  <AxeIcon className="w-6 h-6 text-red-500" />
                  <p className="text-sm">14 Axe</p>
                </div>
                <div className="flex items-center space-x-2">
                  <DiameterIcon className="w-6 h-6 text-green-500" />
                  <p className="text-sm">124 Distance</p>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldIcon className="w-6 h-6 text-red-500" />
                  <p className="text-sm">112 Shielding</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <ImportIcon className="w-6 h-6 text-gray-500" />
                  <p className="text-sm">Imbuements: 23/23</p>
                </div>
                <div className="flex items-center space-x-2">
                  <CompassIcon className="w-6 h-6 text-gray-500" />
                  <p className="text-sm">Charms: 6/19</p>
                </div>
                <div className="flex items-center space-x-2">
                  <WaypointsIcon className="w-6 h-6 text-gray-500" />
                  <p className="text-sm">Quests: 35/42</p>
                </div>
                <div className="flex items-center space-x-2">
                  <GemIcon className="w-6 h-6 text-gray-500" />
                  <p className="text-sm">Gems: 0-0-0</p>
                </div>
                <div className="flex items-center space-x-2">
                  <BadgeIcon className="w-6 h-6 text-gray-500" />
                  <p className="text-sm">Boss points: 1,190</p>
                </div>
                <div className="flex items-center space-x-2">
                  <ImportIcon className="w-6 h-6 text-red-500" />
                  <p className="text-sm text-red-500">13,530 investido</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="default">Muitas quests</Badge>
                <Badge variant="default">Muitas mounts</Badge>
                <Badge variant="default">Muitos cosmeticos comprados</Badge>
                <Badge variant="default">Mounts raras</Badge>
                <Badge variant="default">Outfits raras</Badge>
                <Badge variant="default">Primal Ordeal disponível</Badge>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full max-w-md">
            <CardHeader className="flex items-center justify-between p-4 relative">
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>LP</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg font-bold">Lidyh</CardTitle>
                  <CardDescription className="text-sm">
                    Level 624 - Royal Paladin
                  </CardDescription>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-9 h-9 absolute top-0 right-0 m-4"
                  >
                    <EllipsisIcon className="w-5 h-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Details</DropdownMenuItem>
                  <DropdownMenuItem>Copy Link</DropdownMenuItem>
                  <DropdownMenuItem>Favorite</DropdownMenuItem>
                  <DropdownMenuItem>Search Similar</DropdownMenuItem>
                  <DropdownMenuItem>Estimate Price</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>

            <CardContent className="p-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs font-bold">Server</Label>
                  <p className="text-sm">Obscura</p>
                </div>
                <div>
                  <Label className="text-xs font-bold">PvP</Label>
                  <p className="text-sm">Retro Hardcore</p>
                </div>
                <div>
                  <Label className="text-xs font-bold">Fim do Leilão</Label>
                  <p className="text-sm">10h 38m, 21:30</p>
                </div>
                <div>
                  <Label className="text-xs font-bold">Lance Atual</Label>
                  <p className="text-sm">57</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <MagnetIcon className="w-6 h-6 text-yellow-500" />
                  <p className="text-sm">7 Magic</p>
                </div>
                <div className="flex items-center space-x-2">
                  <ClubIcon className="w-6 h-6 text-red-500" />
                  <p className="text-sm">14 Club</p>
                </div>
                <div className="flex items-center space-x-2">
                  <FingerprintIcon className="w-6 h-6 text-orange-500" />
                  <p className="text-sm">10 Fist</p>
                </div>
                <div className="flex items-center space-x-2">
                  <SwordIcon className="w-6 h-6 text-red-500" />
                  <p className="text-sm">10 Sword</p>
                </div>
                <div className="flex items-center space-x-2">
                  <FishIcon className="w-6 h-6 text-blue-500" />
                  <p className="text-sm">10 Fishing</p>
                </div>
                <div className="flex items-center space-x-2">
                  <AxeIcon className="w-6 h-6 text-red-500" />
                  <p className="text-sm">10 Axe</p>
                </div>
                <div className="flex items-center space-x-2">
                  <DiameterIcon className="w-6 h-6 text-green-500" />
                  <p className="text-sm">115 Distance</p>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldIcon className="w-6 h-6 text-red-500" />
                  <p className="text-sm">105 Shielding</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <ImportIcon className="w-6 h-6 text-gray-500" />
                  <p className="text-sm">Imbuements: 0/23</p>
                </div>
                <div className="flex items-center space-x-2">
                  <CompassIcon className="w-6 h-6 text-gray-500" />
                  <p className="text-sm">Charms: 0/19</p>
                </div>
                <div className="flex items-center space-x-2">
                  <WaypointsIcon className="w-6 h-6 text-gray-500" />
                  <p className="text-sm">Quests: 0/42</p>
                </div>
                <div className="flex items-center space-x-2">
                  <GemIcon className="w-6 h-6 text-gray-500" />
                  <p className="text-sm">Gems: 0-0-0</p>
                </div>
                <div className="flex items-center space-x-2">
                  <BadgeIcon className="w-6 h-6 text-gray-500" />
                  <p className="text-sm">Boss points: 0</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="w-full max-w-md">
            <CardHeader className="flex items-center justify-between p-4 relative">
              <div className="flex items-center space-x-2">
                <Avatar>
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>LP</AvatarFallback>
                </Avatar>
                <div>
                  <CardTitle className="text-lg font-bold">Lidyh</CardTitle>
                  <CardDescription className="text-sm">
                    Level 624 - Royal Paladin
                  </CardDescription>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="w-9 h-9 absolute top-0 right-0 m-4"
                  >
                    <EllipsisIcon className="w-5 h-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Details</DropdownMenuItem>
                  <DropdownMenuItem>Copy Link</DropdownMenuItem>
                  <DropdownMenuItem>Favorite</DropdownMenuItem>
                  <DropdownMenuItem>Search Similar</DropdownMenuItem>
                  <DropdownMenuItem>Estimate Price</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>

            <CardContent className="p-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-xs font-bold">Server</Label>
                  <p className="text-sm">Talera</p>
                </div>
                <div>
                  <Label className="text-xs font-bold">PvP</Label>
                  <p className="text-sm">Open</p>
                </div>
                <div>
                  <Label className="text-xs font-bold">Fim do Leilão</Label>
                  <p className="text-sm">10h 53m, 21:45</p>
                </div>
                <div>
                  <Label className="text-xs font-bold">Lance Atual</Label>
                  <p className="text-sm">100</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <MagnetIcon className="w-6 h-6 text-yellow-500" />
                  <p className="text-sm">6 Magic</p>
                </div>
                <div className="flex items-center space-x-2">
                  <ClubIcon className="w-6 h-6 text-red-500" />
                  <p className="text-sm">110 Club</p>
                </div>
                <div className="flex items-center space-x-2">
                  <FingerprintIcon className="w-6 h-6 text-orange-500" />
                  <p className="text-sm">10 Fist</p>
                </div>
                <div className="flex items-center space-x-2">
                  <SwordIcon className="w-6 h-6 text-red-500" />
                  <p className="text-sm">110 Sword</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
