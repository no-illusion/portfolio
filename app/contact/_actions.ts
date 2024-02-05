'use server';
import { sendContactEmail } from '@/lib/resend';
import { FormDataSchema, Inputs } from './FormSchema';

export async function sendEmail(data: Inputs) {
	const result = FormDataSchema.safeParse(data);
	if (result.success) {
		const res = await sendContactEmail(result.data);
		if (res.success) {
			return { success: true, data: res.data };
		} else {
			return { success: false, apiError: res.message };
		}
	} else {
		return { success: false, error: result.error.flatten().fieldErrors };
	}
}
