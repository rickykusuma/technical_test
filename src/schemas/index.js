import moment from 'moment'
import { z } from 'zod'

export const complexSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  status: z.string().min(1, { message: 'Status is required' }),
  progress: z
    .number({ message: 'Progress is required' })
    .min(1, { message: 'Progress is number is 1' })
    .max(100, { message: 'Max progress number is 100' })
    .refine((val) => !isNaN(val), { message: 'Progress is required' }),
  date: z.instanceof(moment, { message: 'Date is Required' })
})
export const columnsSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  progress: z
    .number({ message: 'Progress is required' })
    .min(1, { message: 'Progress is number is 1' })
    .max(100, { message: 'Max progress number is 100' })
    .refine((val) => !isNaN(val), { message: 'Progress is required' }),
  date: z.instanceof(moment, { message: 'Date is Required' }),
  quantity: z.number({ message: 'Quantity is required' })
})
export const deploymentSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  progress: z
    .number({ message: 'Progress is required' })
    .min(1, { message: 'Progress is number is 1' })
    .max(100, { message: 'Max progress number is 100' })
    .refine((val) => !isNaN(val), { message: 'Progress is required' }),
  date: z.instanceof(moment, { message: 'Date is Required' }),
  tech: z.string().array().min(1, { message: 'Platform is Required' })
})
