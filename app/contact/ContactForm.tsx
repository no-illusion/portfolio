'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Inputs, FormDataSchema } from './FormSchema';
import { toast } from 'react-hot-toast';
import TextInput from '@/components/TextInput';
import { sendEmail } from './_actions';
import { useForm, SubmitHandler } from 'react-hook-form';

export default function ContactForm() {
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { isSubmitting, errors },
	} = useForm<Inputs>({
		resolver: zodResolver(FormDataSchema),
	});

	const processForm: SubmitHandler<Inputs> = async (data) => {
		const result = await sendEmail(data);

		if (!result) {
			toast.error('Whoops! Something went wrong.');
			return;
		}

		if (result.success === false) {
			if (result.error) {
				toast.error('Make sure you have added valid inputs.');
			} else if (result.apiError) {
				toast.error(result.apiError);
			}
			return;
		}

		reset();
		toast.success('Message sent!');
	};

	return (
		<div>
			<form
				onSubmit={handleSubmit(processForm)}
				className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
			>
				<div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
					<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
						<TextInput
							id="first-name"
							label="First Name"
							autoComplete="given-name"
							error={errors.firstName?.message}
							register={register('firstName', {
								required: 'First name is required.',
							})}
						/>
						<TextInput
							id="last-name"
							label="Last Name"
							autoComplete="family-name"
							error={errors.lastName?.message}
							register={register('lastName', {
								required: 'Last name is required.',
							})}
						/>
						<div className="sm:col-span-2">
							<TextInput
								id="email"
								label="Email"
								autoComplete="email"
								error={errors.email?.message}
								register={register('email', {
									required: 'Email is required.',
								})}
							/>
						</div>
						<div className="sm:col-span-2">
							<TextInput
								id="phone-number"
								label="Phone number"
								autoComplete="tel"
								error={errors.phoneNumber?.message}
								register={register('phoneNumber', {
									required: 'Phone number is required.',
								})}
							/>
						</div>
						<div className="sm:col-span-2">
							<TextInput
								id="message"
								label="Message"
								error={errors.message?.message}
								rows={4}
								register={register('message', {
									required: 'Message is required.',
									minLength: {
										value: 4,
										message: 'Message must have at least 4 characters.',
									},
								})}
							/>
						</div>
					</div>
					<div className="mt-8 flex justify-end">
						<button
							disabled={isSubmitting}
							className="rounded-full bg-[#BA2284] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-500"
						>
							{isSubmitting ? 'Sending...' : 'Send Message'}
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}
