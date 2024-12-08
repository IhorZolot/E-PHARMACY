import { z } from 'zod'

export const validationEditMedicineSchema = z.object({
	photo: z.any().optional(),
	name: z.string().optional(),
	price: z.string().optional(),
	category: z.string().optional(),
	description: z.string().optional(),
})
