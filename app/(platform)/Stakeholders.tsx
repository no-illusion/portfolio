'use client';
import Image from 'next/image';
import Link from 'next/link';
import {
	RectangleGroupIcon,
	UserGroupIcon,
	ArrowsRightLeftIcon,
	MinusIcon,
	PlusIcon,
	DocumentTextIcon,
	CalendarDaysIcon,
} from '@heroicons/react/20/solid';
import { Disclosure } from '@headlessui/react';

const stakeholders = [
	{ name: 'Counselors', image: '/platform/user-provider.png' },
	{ name: 'Labs', image: '/platform/user-industry.png' },
	{ name: 'Patients', image: '/platform/user-individual.png' },
	{ name: 'Other', image: '/platform/user-other.png' },
];

const faqs = [
	{
		question: 'Genetic Counselors',
		answer:
			'Receive referrals, schedule appointments, and manage consults in one convenient space.',
		features: [
			{
				name: 'Admin Dashboard.',
				description:
					'The dashboard provides you with an overview of all existing and pending cases.',
				icon: RectangleGroupIcon,
			},
			{
				name: 'Patient Management.',
				description:
					'Select any patient to and see notes, reports, and scheduling information.',
				icon: UserGroupIcon,
			},
			{
				name: 'Lab Referrals.',
				description:
					'With one click referrals, clinics and labs can direct patients to you with ease.',
				icon: ArrowsRightLeftIcon,
			},
		],
	},
	{
		question: 'Clinics & Labs',
		answer:
			'Refer patients, attach reports, add notes, and send messages to genetics counselors plugged into our network.',
		features: [
			{
				name: 'Refer to Counselors.',
				description:
					'See a list of all the leading genetics counselors in your region and refer patients quickly.',
				icon: ArrowsRightLeftIcon,
			},
			{
				name: 'Attach Reports and Notes.',
				description:
					'Streamline communication by adding notes and reports for counselors to review.',
				icon: DocumentTextIcon,
			},
		],
	},
	{
		question: 'Individuals & Patients',
		answer: 'View reports, manage your profile, schedule appointments.',
		features: [
			{
				name: 'Manage appointments.',
				description:
					'View and manage scheduled appointments to make sure that your consults work for you.',
				icon: CalendarDaysIcon,
			},
			{
				name: 'Manage patient record.',
				description:
					'Get access to all your clinical encounters, reports, and summaries in one easy location.',
				icon: DocumentTextIcon,
			},
		],
	},
];

export default function Stakeholders() {
	return (
		<div className="bg-gray-950 transform -skew-y-6 mt-40 mb-24">
			<div className="mx-auto max-w-7xl px-8 md:px-12 lg:px-16 xl:px-24 py-24 lg:pt-40 items-center transform skew-y-6">
				<div>
					<div className="relative isolate mx-auto max-w-2xl text-center pt-12 pb-12">
						<h2 className="text-base font-semibold leading-7 text-pink-400">
							A platform for everybody
						</h2>
						<p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
							A platform built around you, no matter who you are
						</p>
						<p className="mt-6 font-semibold text-lg leading-8 text-gray-300">
							Whether you are a counseler, a referring clinic, a lab, or a
							patient, our platform offers the tools you need, when you need
							them most.
						</p>
					</div>
					<div className="grid grid-cols-2 gap-y-10 sm:gap-y-16 sm:grid-cols-4">
						{stakeholders.map((stakeholder) => {
							return (
								<div
									key={`stakeholder-${stakeholder.name}`}
									className="relative"
								>
									<Image
										alt={stakeholder.name}
										src={stakeholder.image}
										width={300}
										height={248}
										className="object-cover filter brightness-50"
									/>
									{/* Overlay Text */}
									<p className="absolute inset-0 flex justify-center items-center text-white text-xl font-bold">
										{stakeholder.name}
									</p>
								</div>
							);
						})}
					</div>
					<div className="overflow-hidden pt-24 pb-0 sm:pb-8">
						<div className="mx-auto max-w-full">
							<div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:grid-cols-2">
								<div className="lg:pr-8 lg:pt-4">
									<div className="lg:max-w-lg">
										<h2 className="text-base font-semibold leading-7 text-pink-400">
											Steamlined and Integrated
										</h2>
										<p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
											A better workflow for everyone.
										</p>
										<p className="mt-6 text-lg leading-8 text-gray-300">
											Receive referrals, schedule appointments, and manage
											consults in one convenient space with features tailored to
											your needs.
										</p>
										<dl className="space-y-6 divide-y divide-white/10">
											{faqs.map((faq) => (
												<Disclosure
													as="div"
													key={faq.question}
													className="pt-6"
												>
													{({ open }) => (
														<>
															<dt>
																<Disclosure.Button className="flex w-full items-start justify-between text-left text-white">
																	<span className="text-base font-semibold leading-7 text-pink-400">
																		{faq.question}
																	</span>
																	<span className="ml-6 flex h-7 items-center">
																		{open ? (
																			<MinusIcon
																				className="h-6 w-6"
																				aria-hidden="true"
																			/>
																		) : (
																			<PlusIcon
																				className="h-6 w-6"
																				aria-hidden="true"
																			/>
																		)}
																	</span>
																</Disclosure.Button>
															</dt>
															<Disclosure.Panel as="dd" className="mt-2 pr-12">
																<dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
																	{faq.features?.map((feature) => (
																		<div
																			key={feature.name}
																			className="relative pl-9"
																		>
																			<dt className="inline font-semibold text-white">
																				<feature.icon
																					className="absolute left-1 top-1 h-5 w-5 text-pink-500"
																					aria-hidden="true"
																				/>
																				{feature.name}
																			</dt>{' '}
																			<dd className="inline">
																				{feature.description}
																			</dd>
																		</div>
																	))}
																</dl>
															</Disclosure.Panel>
														</>
													)}
												</Disclosure>
											))}
										</dl>
									</div>
								</div>
								<div className="flex items-center justify-center">
									<div className="relative isolate overflow-hidden bg-[#BA2284] px-6 pt-8 sm:mx-auto rounded-3xl sm:pl-16 sm:pr-0 sm:pt-16 lg:mx-0 lg:max-w-none">
										<div
											className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-inset ring-white"
											aria-hidden="true"
										/>
										<div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
											<Image
												src="/platform/demo.png"
												alt="Admin Dashboard"
												width={2432}
												height={1442}
												className="-mb-12 w-[57rem] max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10"
											/>
										</div>
										<div
											className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
											aria-hidden="true"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="pb-24 pt-16 sm:pb-40">
						<div className="relative isolate overflow-hidden bg-gradient-to-tr from-[#8600D4] from-0% to-[#BA2284] to-80% px-6 py-24 text-center shadow-2xl rounded-3xl sm:px-16">
							<h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
								You deserve better technology. What are you waiting for?
							</h2>
							<p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-200">
								We have over 30 years of experience delivering genetic
								counseling services. We know what works and what you need to
								thrive. Let&apos; have a chat.
							</p>
							<div className="mt-10 flex items-center justify-center gap-x-6">
								<Link
									href="/contact"
									className="rounded-full bg-white px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
								>
									Contact us
								</Link>
								<a
									href="/company"
									className="text-sm font-semibold leading-6 text-white"
								>
									Our team <span aria-hidden="true">→</span>
								</a>
							</div>
							<svg
								viewBox="0 0 1024 1024"
								className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
								aria-hidden="true"
							>
								<circle
									cx={512}
									cy={512}
									r={512}
									fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
									fillOpacity="0.7"
								/>
								<defs>
									<radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
										<stop stopColor="#7775D6" />
										<stop offset={1} stopColor="#E935C1" />
									</radialGradient>
								</defs>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
