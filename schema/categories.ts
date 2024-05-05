import { string, z } from "zod";

export const CreateCategorySchema = z.object({
    name: z.string().min(3).max(10),
    icon: z.string().max(20),
    type: z.enum(["income", "expense"])
})

export type CreateCategorySchemaType = z.infer<typeof CreateCategorySchema>