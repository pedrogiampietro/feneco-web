import { ColumnDef } from "@tanstack/react-table";
import { Server } from "@/pages/Highscores/data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

export const columns: ColumnDef<Server>[] = [
  {
    accessorKey: "Rank",
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Rank" />
    ),
    cell: ({ row }) => <div>{row.getValue("Rank")}</div>,
  },
  {
    accessorKey: "Name",
    filterFn: (row: any, id, value) => {
      return row.getValue(id).toLowerCase().includes(value.toLowerCase());
    },
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => <div>{row.getValue("Name")}</div>,
  },
  {
    accessorKey: "Vocation",
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Vocation" />
    ),
    cell: ({ row }) => <div>{row.getValue("Vocation")}</div>,
  },
  {
    accessorKey: "Level",
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Level" />
    ),
    cell: ({ row }) => <div>{row.getValue("Level")}</div>,
  },
  {
    accessorKey: "Points",
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Points" />
    ),
    cell: ({ row }) => <div>{row.getValue("Points")}</div>,
  },
  {
    accessorKey: "Status",
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => <div>{row.getValue("Status")}</div>,
  },
  {
    accessorKey: "Type",
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Type" />
    ),
    cell: ({ row }) => <div>{row.getValue("Type")}</div>,
  },
  {
    accessorKey: "Region",
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Region" />
    ),
    cell: ({ row }) => <div>{row.getValue("Region")}</div>,
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
