import { z } from "zod";

// Schema for character data
export const characterSchema = z.object({
  Id: z.number(),
  Name: z.string(),
  Level: z.number(),
  Status: z.enum(["online", "offline"]),
});

export type Character = z.infer<typeof characterSchema>;
