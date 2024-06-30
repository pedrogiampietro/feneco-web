import { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { BookIcon, ShieldIcon, ZapIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const quests = [
  {
    name: "Demon Oak Quest",
    difficulty: "Challenging",
    rewards: "Demon Oak Shield, Rare Crafting Materials",
    location: "Venore Forest",
  },
  {
    name: "Pits of Inferno",
    difficulty: "Extremely Difficult",
    rewards: "Inferno Sword, Demonic Essence",
    location: "Hellfire Fortress",
  },
  {
    name: "Forgotten Knowledge",
    difficulty: "Moderate",
    rewards: "Ancient Tome, Runic Tablet",
    location: "Edron Ruins",
  },
  {
    name: "Cults and Rituals",
    difficulty: "Difficult",
    rewards: "Cultist Robes, Sacrificial Dagger",
    location: "Darashia Catacombs",
  },
  {
    name: "The Shattered Isles",
    difficulty: "Moderate",
    rewards: "Shipwrecked Amulet, Treasure Map",
    location: "Svargrond Archipelago",
  },
];

const items = [
  {
    name: "Magic Sword",
    type: "Weapon",
    effect: "Increases damage by 20%",
  },
  {
    name: "Healing Potion",
    type: "Consumable",
    effect: "Restores 50 HP",
  },
  {
    name: "Dragon Shield",
    type: "Armor",
    effect: "Reduces fire damage by 30%",
  },
];

const monsters = [
  {
    name: "Dragon",
    habitat: "Caves",
    drops: "Dragon Ham, Gold Coins",
  },
  {
    name: "Cyclops",
    habitat: "Mountains",
    drops: "Cyclops Toe, Gold Coins",
  },
  {
    name: "Ghoul",
    habitat: "Graveyards",
    drops: "Ghoul Bone, Skull",
  },
];

export default function Wikia() {
  const [selectedQuest, setSelectedQuest] = useState<any>(null);
  const [activeNavItem, setActiveNavItem] = useState("Quests");

  const handleRowClick = (quest: any) => {
    setSelectedQuest(quest);
  };

  const handleBackClick = () => {
    setSelectedQuest(null);
  };

  const navItems = [
    { name: "Quests", icon: <BookIcon className="w-5 h-5" /> },
    { name: "Items", icon: <ShieldIcon className="w-5 h-5" /> },
    { name: "Monsters", icon: <ZapIcon className="w-5 h-5" /> },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 bg-background border-b">
        <div className="container px-4 md:px-6 mx-auto py-4 flex items-center justify-between">
          <Link
            to="#"
            className="flex items-center gap-2 font-semibold text-2xl"
          >
            <BookIcon className="w-8 h-8 text-primary" />
            Tibia Wiki
          </Link>
          <div className="relative flex-1 max-w-md">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search the wiki..."
              className="w-full rounded-full bg-muted pl-10 pr-4 py-2 text-sm"
            />
          </div>
        </div>
      </header>
      <main className="flex-1 container px-4 md:px-6 mx-auto py-8">
        <div className="grid md:grid-cols-[200px_1fr] gap-8">
          <nav className="hidden md:block bg-muted rounded-lg overflow-hidden">
            <div className="p-4 border-b">
              <h3 className="text-lg font-semibold">Navigation</h3>
            </div>
            <div className="grid gap-1 p-4">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  className={`block w-full px-3 py-2 rounded-md text-left flex items-center gap-2 ${
                    activeNavItem === item.name
                      ? "bg-muted-foreground text-background"
                      : "hover:bg-muted/50"
                  } focus:outline-none`}
                  onClick={() => {
                    setActiveNavItem(item.name);
                    setSelectedQuest(null);
                  }}
                >
                  {item.icon}
                  {item.name}
                </Button>
              ))}
            </div>
          </nav>
          <div className="grid gap-8">
            <div className="grid gap-4">
              <h1 className="text-3xl font-bold">{activeNavItem}</h1>
              {activeNavItem === "Quests" && (
                <>
                  {selectedQuest ? (
                    <div className="mt-8 p-4 border rounded-lg bg-muted">
                      <Button
                        onClick={handleBackClick}
                        className="mb-4 flex items-center gap-2"
                      >
                        <ChevronLeftIcon className="w-5 h-5" />
                        Back to Quests
                      </Button>
                      <h1 className="text-3xl font-bold">
                        {selectedQuest.name}
                      </h1>
                      <p className="mt-2">
                        <strong>Difficulty:</strong> {selectedQuest.difficulty}
                      </p>
                      <p className="mt-2">
                        <strong>Rewards:</strong> {selectedQuest.rewards}
                      </p>
                      <p className="mt-2">
                        <strong>Location:</strong> {selectedQuest.location}
                      </p>
                      <div className="grid gap-8">
                        <div className="grid gap-4">
                          <div className="grid md:grid-cols-[1fr_300px] gap-6">
                            <div className="grid gap-4">
                              <p className="text-muted-foreground">
                                The Demon Oak Quest is a challenging quest in
                                Tibia that requires players to defeat a powerful
                                demonic tree creature. This quest is known for
                                its difficulty and the valuable rewards it
                                offers.
                              </p>
                              <div className="grid gap-2">
                                <h2 className="text-xl font-semibold">
                                  Objective
                                </h2>
                                <p>
                                  The objective of the Demon Oak Quest is to
                                  defeat the Demon Oak, a massive and powerful
                                  tree-like creature that has been corrupted by
                                  dark magic. Players must navigate through a
                                  dangerous forest, solve puzzles, and
                                  ultimately confront and defeat the Demon Oak
                                  in order to complete the quest.
                                </p>
                              </div>
                              <div className="grid gap-2">
                                <h2 className="text-xl font-semibold">
                                  Rewards
                                </h2>
                                <p>
                                  Completing the Demon Oak Quest rewards players
                                  with valuable items, such as the Demon Oak
                                  Shield, a powerful defensive item that
                                  provides significant protection against
                                  various types of damage. Additionally, players
                                  may receive rare and valuable resources, such
                                  as unique crafting materials or powerful
                                  enchantments.
                                </p>
                              </div>
                            </div>
                            <div className="grid gap-4">
                              <img
                                src="/placeholder.svg"
                                alt="Demon Oak"
                                className="rounded-lg object-cover"
                              />
                              <div className="grid gap-2">
                                <h2 className="text-xl font-semibold">
                                  Difficulty
                                </h2>
                                <p>
                                  The Demon Oak Quest is considered one of the
                                  most challenging quests in Tibia. Players must
                                  be well-prepared, with strong equipment,
                                  skills, and a solid understanding of the game
                                  mechanics, in order to successfully complete
                                  this quest. Failure can result in significant
                                  setbacks, including the loss of valuable items
                                  or even character death.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="grid gap-4">
                          <h2 className="text-2xl font-bold">Related Items</h2>
                          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <Card>
                              <CardHeader>
                                <img
                                  src="/placeholder.svg"
                                  alt="Demon Oak Shield"
                                  className="rounded-t-lg object-cover w-full"
                                />
                              </CardHeader>
                              <CardContent className="p-4">
                                <h3 className="text-lg font-semibold">
                                  Demon Oak Shield
                                </h3>
                                <p className="text-muted-foreground">
                                  A powerful defensive item obtained from
                                  completing the Demon Oak Quest.
                                </p>
                                <Button
                                  variant="outline"
                                  className="mt-4"
                                  onClick={() => {}}
                                >
                                  View Details
                                </Button>
                              </CardContent>
                            </Card>
                            <Card>
                              <CardHeader>
                                <img
                                  src="/placeholder.svg"
                                  alt="Demon Oak Amulet"
                                  className="rounded-t-lg object-cover w-full"
                                />
                              </CardHeader>
                              <CardContent className="p-4">
                                <h3 className="text-lg font-semibold">
                                  Demon Oak Amulet
                                </h3>
                                <p className="text-muted-foreground">
                                  A rare amulet that provides additional
                                  protection against demonic creatures.
                                </p>
                                <Button
                                  variant="outline"
                                  className="mt-4"
                                  onClick={() => {}}
                                >
                                  View Details
                                </Button>
                              </CardContent>
                            </Card>
                            <Card>
                              <CardHeader>
                                <img
                                  src="/placeholder.svg"
                                  alt="Demon Oak Axe"
                                  className="rounded-t-lg object-cover w-full"
                                />
                              </CardHeader>
                              <CardContent className="p-4">
                                <h3 className="text-lg font-semibold">
                                  Demon Oak Axe
                                </h3>
                                <p className="text-muted-foreground">
                                  A powerful melee weapon obtained from the
                                  Demon Oak Quest.
                                </p>
                                <Button
                                  variant="outline"
                                  className="mt-4"
                                  onClick={() => {}}
                                >
                                  View Details
                                </Button>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                        <div className="grid gap-4">
                          <h2 className="text-2xl font-bold">
                            Related Monsters
                          </h2>
                          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            <Card>
                              <CardHeader>
                                <img
                                  src="/placeholder.svg"
                                  alt="Demon Oak"
                                  className="rounded-t-lg object-cover w-full"
                                />
                              </CardHeader>
                              <CardContent className="p-4">
                                <h3 className="text-lg font-semibold">
                                  Demon Oak
                                </h3>
                                <p className="text-muted-foreground">
                                  The powerful demonic tree creature that must
                                  be defeated in the Demon Oak Quest.
                                </p>
                                <Button
                                  variant="outline"
                                  className="mt-4"
                                  onClick={() => {}}
                                >
                                  View Details
                                </Button>
                              </CardContent>
                            </Card>
                            <Card>
                              <CardHeader>
                                <img
                                  src="/placeholder.svg"
                                  alt="Demon Skeleton"
                                  className="rounded-t-lg object-cover w-full"
                                />
                              </CardHeader>
                              <CardContent className="p-4">
                                <h3 className="text-lg font-semibold">
                                  Demon Skeleton
                                </h3>
                                <p className="text-muted-foreground">
                                  Undead creatures that guard the Demon Oak and
                                  its surroundings.
                                </p>
                                <Button
                                  variant="outline"
                                  className="mt-4"
                                  onClick={() => {}}
                                >
                                  View Details
                                </Button>
                              </CardContent>
                            </Card>
                            <Card>
                              <CardHeader>
                                <img
                                  src="/placeholder.svg"
                                  alt="Demon Parrot"
                                  className="rounded-t-lg object-cover w-full"
                                />
                              </CardHeader>
                              <CardContent className="p-4">
                                <h3 className="text-lg font-semibold">
                                  Demon Parrot
                                </h3>
                                <p className="text-muted-foreground">
                                  Demonic birds that patrol the area around the
                                  Demon Oak.
                                </p>
                                <Button
                                  variant="outline"
                                  className="mt-4"
                                  onClick={() => {}}
                                >
                                  View Details
                                </Button>
                              </CardContent>
                            </Card>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="overflow-auto border rounded-lg">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Name</TableHead>
                            <TableHead>Difficulty</TableHead>
                            <TableHead>Rewards</TableHead>
                            <TableHead>Location</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {quests.map((quest) => (
                            <TableRow
                              key={quest.name}
                              onClick={() => handleRowClick(quest)}
                              className="cursor-pointer hover:bg-muted/50"
                            >
                              <TableCell className="font-medium">
                                {quest.name}
                              </TableCell>
                              <TableCell>{quest.difficulty}</TableCell>
                              <TableCell>{quest.rewards}</TableCell>
                              <TableCell>{quest.location}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  )}
                </>
              )}
              {activeNavItem === "Items" && (
                <div className="overflow-auto border rounded-lg">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Effect</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {items.map((item) => (
                        <TableRow
                          key={item.name}
                          className="cursor-pointer hover:bg-muted/50"
                        >
                          <TableCell className="font-medium">
                            {item.name}
                          </TableCell>
                          <TableCell>{item.type}</TableCell>
                          <TableCell>{item.effect}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
              {activeNavItem === "Monsters" && (
                <div className="overflow-auto border rounded-lg">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Habitat</TableHead>
                        <TableHead>Drops</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {monsters.map((monster) => (
                        <TableRow
                          key={monster.name}
                          className="cursor-pointer hover:bg-muted/50"
                        >
                          <TableCell className="font-medium">
                            {monster.name}
                          </TableCell>
                          <TableCell>{monster.habitat}</TableCell>
                          <TableCell>{monster.drops}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-muted border-t">
        <div className="container px-4 md:px-6 mx-auto py-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; 2023 Tibia Wiki. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              to="#"
              className="text-muted-foreground hover:text-foreground"
            >
              About
            </Link>
            <Link
              to="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Contact
            </Link>
            <Link
              to="#"
              className="text-muted-foreground hover:text-foreground"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
