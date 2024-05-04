import { z } from "zod";

export const CreateTransactionSchema = z.object({
    amount: z.coerce.number().positive().multipleOf(0.01),
    description: z.string().optional(),
    category: z.string(),
    type: z.union([z.literal("income"), z.literal("expense")])
})

export type CreateTransactionSchema = z.infer<typeof CreateTransactionSchema>