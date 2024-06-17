import { Cross2Icon } from "@radix-ui/react-icons";
import { Table } from "@tanstack/react-table";
import { Button } from "@/components/custom/button";
import { Input } from "@/components/ui/input";
import { DataTableViewOptions } from "../components/data-table-view-options";
import { types, regions, statuses } from "../data/data";
import { DataTableFacetedFilter } from "./data-table-faceted-filter";
import { useState, useEffect } from "react";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const [filters, setFilters] = useState({
    type: new Set<string>(),
    country: new Set<string>(),
    status: new Set<string>(),
  });

  const resetFilters = () => {
    table.resetColumnFilters();
    setFilters({
      type: new Set<string>(),
      country: new Set<string>(),
      status: new Set<string>(),
    });
  };

  useEffect(() => {
    if (!isFiltered) {
      setFilters({
        type: new Set<string>(),
        country: new Set<string>(),
        status: new Set<string>(),
      });
    }
  }, [isFiltered]);

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 flex-col-reverse items-start gap-y-2 sm:flex-row sm:items-center sm:space-x-2">
        <Input
          placeholder="Search player"
          value={(table.getColumn("Name")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("Name")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        <div className="flex gap-x-2">
          {table.getColumn("Type") && (
            <DataTableFacetedFilter
              column={table.getColumn("Type")}
              title="Type"
              options={types}
              selectedValues={filters.type}
              setSelectedValues={(values) =>
                setFilters((prev) => ({ ...prev, type: values }))
              }
            />
          )}
          {table.getColumn("Region") && (
            <DataTableFacetedFilter
              column={table.getColumn("Region")}
              title="Region"
              options={regions}
              selectedValues={filters.country}
              setSelectedValues={(values) =>
                setFilters((prev) => ({ ...prev, country: values }))
              }
            />
          )}
          {table.getColumn("Status") && (
            <DataTableFacetedFilter
              column={table.getColumn("Status")}
              title="Status"
              options={statuses}
              selectedValues={filters.status}
              setSelectedValues={(values) =>
                setFilters((prev) => ({ ...prev, status: values }))
              }
            />
          )}
        </div>
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={resetFilters}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
