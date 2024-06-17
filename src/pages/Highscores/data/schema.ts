import { z } from "zod";

// Schema for server data
export const serverSchema = z.object({
  Rank: z.number(),
  Name: z.string(),
  Vocation: z.string(),
  World: z.string(),
  Level: z.number(),
  Points: z.number(),
  Status: z.enum(["online", "offline", "maintenance"]),
  Type: z.enum(["PvP", "NoPvP"]),
  Region: z.enum(["BR", "USA"]),
});

export type Server = z.infer<typeof serverSchema>;
