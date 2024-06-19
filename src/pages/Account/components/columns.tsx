import { ColumnDef } from "@tanstack/react-table";
import { Character } from "@/pages/Account/data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";
import { CheckCircledIcon, CrossCircledIcon } from "@radix-ui/react-icons";

export const characterColumns: ColumnDef<Character>[] = [
  // {
  //   accessorKey: "Id",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Id" />
  //   ),
  //   cell: ({ row }) => <div>{row.getValue("Id")}</div>,
  // },
  {
    accessorKey: "Name",
    filterFn: (row, id, value) => {
      return row.getValue(id).toLowerCase().includes(value.toLowerCase());
    },
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => <div>{row.getValue("Name")}</div>,
  },
  {
    accessorKey: "Level",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Level" />
    ),
    cell: ({ row }) => <div>{row.getValue("Level")}</div>,
  },
  {
    accessorKey: "Status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => (
      <div className="flex items-center space-x-2">
        {row.getValue("Status") === "online" ? (
          <CheckCircledIcon className="text-green-500" />
        ) : (
          <CrossCircledIcon className="text-red-500" />
        )}
        <span>{row.getValue("Status")}</span>
      </div>
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
