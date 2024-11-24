import { z } from 'zod'

export const schemaEditForm = z.object({
	shop: z.string().trim().optional(),
	name: z.string().trim().optional(),
	email: z.string().trim().optional(),
	phone: z.string().trim().optional(),
	address: z.string().trim().optional(),
	city: z.string().trim().optional(),
	postal: z.string().trim().optional(),
	delivery: z.enum(['yes', 'no']).optional(),
	password: z.string().trim().optional(),
})
