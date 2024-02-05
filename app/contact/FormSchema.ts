import { z } from 'zod';
import validator from 'validator';

export const FormDataSchema = z.object({
	firstName: z.string().min(1, 'First Name is required.'),
	lastName: z.string().min(1, 'Last Name is required.'),
	email: z.string().email({ message: 'Please use a valid email address.' }),
	phoneNumber: z.string().refine(validator.isMobilePhone, {
		message: 'Please use a valid phone number.',
	}),
	message: z.string().min(1, 'Message is required.'),
});

export type Inputs = z.infer<typeof FormDataSchema>;
