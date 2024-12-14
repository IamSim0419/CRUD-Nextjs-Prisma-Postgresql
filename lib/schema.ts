import { z } from "zod";

export const PostSchema = z.object({
    title: z.string().min(3),
    description: z.string().min(3),
})