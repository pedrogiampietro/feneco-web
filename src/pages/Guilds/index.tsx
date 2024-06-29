import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

export default function ViewGuildInformation() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <header className="flex items-center justify-between p-4 bg-primary text-primary-foreground rounded-t-lg">
        <div className="flex items-center gap-4">
          <div className="bg-primary-foreground rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold">
            G
          </div>
          <div>
            <div className="font-bold">The Mighty Guild</div>
            <div className="text-sm text-muted-foreground">120 Members</div>
          </div>
        </div>
        <div className="text-2xl font-bold">The Mighty Guild</div>
      </header>
      <div className="grid grid-cols-2 gap-6 p-6">
        <div className="space-y-4">
          <p>
            Welcome to the Mighty Guild, a community of adventurers, warriors,
            and mages who have banded together to conquer the challenges of the
            realm. Our guild is known for its unwavering camaraderie, strategic
            prowess, and unparalleled bravery in the face of adversity.
          </p>
          <p>
            Whether you're a seasoned veteran or a fresh-faced recruit, you'll
            find a home within our ranks. Together, we'll embark on epic quests,
            vanquish fearsome foes, and forge lasting bonds of friendship that
            will carry us through the toughest of battles.
          </p>
        </div>
        <div className="aspect-video rounded-lg overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
      <div className="border-t">
        <NavigationMenu className="w-full">
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-12 items-center justify-center px-6 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                prefetch={false}
              >
                Members
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group inline-flex h-12 items-center justify-center px-6 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                prefetch={false}
              >
                Wars
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Members</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-background rounded-lg p-4 flex items-center gap-4">
            <div className="bg-green-500 rounded-full w-3 h-3" />
            <div>
              <div className="font-bold">John Doe</div>
              <div className="text-sm text-muted-foreground">Level 25</div>
            </div>
          </div>
          <div className="bg-background rounded-lg p-4 flex items-center gap-4">
            <div className="bg-red-500 rounded-full w-3 h-3" />
            <div>
              <div className="font-bold">Jane Smith</div>
              <div className="text-sm text-muted-foreground">Level 18</div>
            </div>
          </div>
          <div className="bg-background rounded-lg p-4 flex items-center gap-4">
            <div className="bg-green-500 rounded-full w-3 h-3" />
            <div>
              <div className="font-bold">Bob Johnson</div>
              <div className="text-sm text-muted-foreground">Level 32</div>
            </div>
          </div>
          <div className="bg-background rounded-lg p-4 flex items-center gap-4">
            <div className="bg-green-500 rounded-full w-3 h-3" />
            <div>
              <div className="font-bold">Sarah Lee</div>
              <div className="text-sm text-muted-foreground">Level 22</div>
            </div>
          </div>
          <div className="bg-background rounded-lg p-4 flex items-center gap-4">
            <div className="bg-red-500 rounded-full w-3 h-3" />
            <div>
              <div className="font-bold">Tom Wilson</div>
              <div className="text-sm text-muted-foreground">Level 15</div>
            </div>
          </div>
          <div className="bg-background rounded-lg p-4 flex items-center gap-4">
            <div className="bg-green-500 rounded-full w-3 h-3" />
            <div>
              <div className="font-bold">Emily Davis</div>
              <div className="text-sm text-muted-foreground">Level 28</div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">Wars</h2>
        <div className="bg-background rounded-lg p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className="bg-primary-foreground rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold">
                G
              </div>
              <div>
                <div className="font-bold">The Mighty Guild</div>
                <div className="text-sm text-muted-foreground">120 Members</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-primary-foreground rounded-full w-10 h-10 flex items-center justify-center text-2xl font-bold">
                E
              </div>
              <div>
                <div className="font-bold">Eternal Crusaders</div>
                <div className="text-sm text-muted-foreground">90 Members</div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <div className="font-bold">Kills: 32</div>
              <div className="text-sm text-muted-foreground">
                The Mighty Guild
              </div>
            </div>
            <div>
              <div className="font-bold">Kills: 28</div>
              <div className="text-sm text-muted-foreground">
                Eternal Crusaders
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
