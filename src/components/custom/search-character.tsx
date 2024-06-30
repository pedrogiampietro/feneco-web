import { useEffect, useState, useCallback, useTransition } from "react";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { SearchIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { ArrowUp01, ArrowDown01, LucideHome } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function SearchCharacter() {
  const [searchInput, setSearchInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();
  const navigate = useNavigate();

  const mockData = [
    {
      id: 1,
      name: "Player One",
      vocation: "Knight",
      level: 100,
    },
    {
      id: 2,
      name: "Player Two",
      vocation: "Sorcerer",
      level: 120,
    },
    {
      id: 3,
      name: "Player Three",
      vocation: "Druid",
      level: 80,
    },
  ];

  const searchResultsData = mockData.map((result) => {
    return {
      id: result.id,
      name: result.name,
      vocation: result.vocation,
      level: result.level,
    };
  });

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((isOpen) => !isOpen);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSelect = useCallback((callback: () => unknown) => {
    setIsOpen(false);
    callback();
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setSearchInput("");
    }
  }, [isOpen]);

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-9 p-0 xl:h-10 xl:w-60 xl:justify-start xl:px-3 xl:py-2"
        onClick={() => setIsOpen(true)}
        aria-label="Buscar personagem"
      >
        <SearchIcon className="h-6 w-6" />
        <span className="hidden xl:inline-flex">Buscar personagem...</span>
        <span className="sr-only">Buscar personagem</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-6 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 xl:flex">
          <span className="text-xs">Ctrl</span>K
        </kbd>
      </Button>
      <CommandDialog open={isOpen} onOpenChange={setIsOpen}>
        <CommandInput
          placeholder="Buscar personagem..."
          value={searchInput}
          onValueChange={setSearchInput}
        />
        <CommandList className="mb-10">
          <CommandEmpty
            className={cn(isPending ? "hidden" : "py-6 text-center text-sm")}
          >
            Nenhum personagem encontrado.
          </CommandEmpty>
          {isPending ? (
            <div>Loading...</div>
          ) : searchResultsData ? (
            <CommandGroup className="z-[99999]">
              {searchResultsData?.map((item) => (
                <CommandItem
                  key={item.id}
                  value={item.name}
                  onSelect={() =>
                    handleSelect(() => {
                      startTransition(() => {
                        setSearchInput("");
                        navigate(`/character/${item.name}`);
                      });
                    })
                  }
                >
                  <div className="flex flex-col justify-center cursor-pointer">
                    <h3 className="text-sm font-medium leading-none">
                      {item.name}
                    </h3>
                    <p className="text-xs leading-none text-muted-foreground cursor-pointer">
                      {item.vocation} - Level {item.level}
                    </p>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          ) : null}

          <div className="fixed inset-x-0 bottom-[-2px] flex items-center gap-1 bg-background p-3 text-muted-foreground/80">
            <div className="flex flex-col">
              <div className="flex w-4 flex-col items-center justify-center rounded-md border p-0.5">
                <ArrowUp01 className="h-2 w-2" />
              </div>
              <div className="h-1 w-4 border-x border-b"></div>
            </div>
            <div className="flex flex-col">
              <div className="flex w-4 flex-col items-center justify-center rounded-md border p-0.5">
                <ArrowDown01 className="h-2 w-2" />
              </div>
              <div className="h-1 w-4 border-x border-b"></div>
            </div>
            <div className="text-xs">para navegar</div>
            <div className="ml-2 flex flex-col">
              <div className="flex w-4 flex-col items-center justify-center rounded-md border p-0.5">
                <LucideHome className="h-2 w-2" />
              </div>
              <div className="h-1 w-4 border-x border-b"></div>
            </div>
            <div className="text-xs">para selecionar</div>

            <div className="ml-2 flex flex-col">
              <div className="flex w-4 flex-col items-center justify-center rounded-md border p-0.5 text-[7px]">
                ESC
              </div>
              <div className="h-1 w-4 border-x border-b"></div>
            </div>
            <div className="text-xs">para sair</div>
          </div>
        </CommandList>
      </CommandDialog>
    </>
  );
}
