import * as React from "react";
import { CheckIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import { Column } from "@tanstack/react-table";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/custom/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

interface DataTableFacetedFilterProps<TData, TValue> {
  column?: Column<TData, TValue>;
  title?: string;
  options: {
    label: string;
    value: string;
    icon?: React.ComponentType<{ className?: string }>;
  }[];
  selectedValues: Set<string>;
  setSelectedValues: (values: Set<string>) => void;
}

export function DataTableFacetedFilter<TData, TValue>({
  column,
  title,
  options,
  selectedValues,
  setSelectedValues,
}: DataTableFacetedFilterProps<TData, TValue>) {
  const handleSelect = (value: string) => {
    const newSelectedValues = new Set(selectedValues);
    if (newSelectedValues.has(value)) {
      newSelectedValues.delete(value);
    } else {
      newSelectedValues.add(value);
    }
    setSelectedValues(newSelectedValues);

    const filterValues = Array.from(newSelectedValues);
    column?.setFilterValue(filterValues.length ? filterValues : undefined);
  };

  const clearFilters = () => {
    setSelectedValues(new Set());
    column?.setFilterValue(undefined);
  };

  React.useEffect(() => {
    if (!column?.getFilterValue()?.length) {
      setSelectedValues(new Set());
    }
  }, [column]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 border-dashed">
          <PlusCircledIcon className="mr-2 h-4 w-4" />
          {title}
          {selectedValues.size > 0 && (
            <>
              <Separator orientation="vertical" className="mx-2 h-4" />
              <Badge
                variant="secondary"
                className="rounded-sm px-1 font-normal lg:hidden"
              >
                {selectedValues.size}
              </Badge>
              <div className="hidden space-x-1 lg:flex">
                {selectedValues.size > 2 ? (
                  <Badge
                    variant="secondary"
                    className="rounded-sm px-1 font-normal"
                  >
                    {selectedValues.size} selected
                  </Badge>
                ) : (
                  Array.from(selectedValues).map((value) => (
                    <Badge
                      variant="secondary"
                      key={value}
                      className="rounded-sm px-1 font-normal"
                    >
                      {options.find((option) => option.value === value)?.label}
                    </Badge>
                  ))
                )}
              </div>
            </>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0" align="start">
        {options.map((option) => {
          const isSelected = selectedValues.has(option.value);
          return (
            <div
              key={option.value}
              onClick={() => handleSelect(option.value)}
              className={cn(
                "relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
                isSelected ? "bg-accent text-accent-foreground" : ""
              )}
            >
              <div
                className={cn(
                  "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                  isSelected
                    ? "bg-primary text-primary-foreground"
                    : "opacity-50 [&_svg]:invisible"
                )}
              >
                <CheckIcon className={cn("h-4 w-4")} />
              </div>
              {option.icon && (
                <option.icon className="mr-2 h-4 w-4 text-muted-foreground" />
              )}
              <span>{option.label}</span>
            </div>
          );
        })}
        {selectedValues.size > 0 && (
          <>
            <Separator className="my-2" />
            <div
              onClick={clearFilters}
              className="cursor-pointer text-center text-sm text-red-600"
            >
              Clear filters
            </div>
          </>
        )}
      </PopoverContent>
    </Popover>
  );
}
