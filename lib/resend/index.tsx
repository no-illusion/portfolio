import { Resend } from 'resend';
import { ContactEmailProps, ContactEmailTemplate } from './EmailTemplates';

const resend = new Resend(process.env.RESEND_API_KEY!);

export const sendContactEmail = async ({
	firstName,
	lastName,
	email,
	phoneNumber,
	message,
}: ContactEmailProps) => {
	const { data, error } = await resend.emails.send({
		from: 'Guide Genetics <support@guidegenetics.com>',
		to: ['support@guidegenetics.com'],
		subject: 'Web Enquiry',
		react: ContactEmailTemplate({
			firstName,
			lastName,
			phoneNumber,
			email,
			message,
		}) as React.ReactElement,
	});

	if (error) return { success: false, message: error.message };

	return { success: true, data: data };
};
