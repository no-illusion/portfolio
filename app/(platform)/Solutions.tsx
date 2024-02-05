'use client';
import Link from 'next/link';
import { useState } from 'react';
import { classNames } from '@/utils';

const options = [
	{
		key: 'provider',
		eyebrow: 'Genetic Care',
		title: 'Providers',
		subtitle: 'A platform catered to you',
		blurb:
			'Whether you are counselor, counseling group, or geneticist, we can support you with:',
		options: [
			'A white labelled platform for your independent genetic counseling work.',
			'Or join the Guide Genetics network and work directly as a counselor serving patients that we see.',
		],
		ctaText: 'Contact us for a quote',
		ctaLink: '/contact',
	},
	{
		key: 'referrer',
		eyebrow: 'Genetic Counseling',
		title: 'Referrers',
		subtitle: 'Access tech-enabled services.',
		blurb:
			'Whether you are a lab, physician, clinic / hospital, or other entity (e.g. foundation), we can support you with:',
		options: [
			'Genetic counseling services that scale with you.',
			'Technology solutions that simplify your referrals.',
			'Launch and go to market support for new genetic tests.',
		],
		ctaText: 'Learn More',
		ctaLink: '/services',
	},
];

export default function Pricing() {
	const [active, setActive] = useState<'provider' | 'referrer'>('referrer');
	return (
		<div className="bg-white pt-16 pb-40">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl mb-8 text-center">
					<h2 className="text-base font-semibold leading-7 text-[#BA2284]">
						Our Solutions
					</h2>
					<h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						A personalized platform optimized for modern clinical genetics.
					</h2>
					<p className="my-6 mb-12 text-lg leading-8 text-slate-600">
						In the complex genetic counseling landscape, we know that everyone
						has different needs. Whether you are a provider or a referrer, we
						have tailored tools for you.
					</p>
				</div>
				<div className="mx-auto mt-16 max-w-5xl lg:px-6">
					<div className="grid bg-slate-50 sm:px-6 sm:pb-16 md:grid-cols-2 md:rounded-[2.5rem] md:px-8 md:pt-16 lg:p-20">
						{options.map((option) => {
							return (
								<div
									key={`option-${option.eyebrow}`}
									className={classNames(
										'relative sm:rounded-3xl py-16 md:py-12 px-10 lg:px-12 cursor-pointer',
										active === option.key ? 'bg-neutral-950' : ''
									)}
									onClick={() =>
										setActive(option.key as 'provider' | 'referrer')
									}
								>
									<div className="relative flex flex-col">
										<p className="flex flex-col font-display font-bold">
											<span
												className={classNames(
													'text-[1.75rem] leading-tight',
													active === option.key
														? 'text-pink-200'
														: 'text-slate-600'
												)}
											>
												{option.eyebrow}
											</span>
											<span
												className={classNames(
													'ml-1 mt-1 text-5xl tracking-tight',
													active === option.key
														? 'text-white'
														: 'text-slate-900'
												)}
											>
												{option.title}
											</span>
										</p>
										<h3
											className={classNames(
												'mt-7 text-lg font-semibold tracking-tight',
												active === option.key ? 'text-white' : 'text-slate-900'
											)}
										>
											{option.subtitle}
										</h3>
										<div
											className={classNames(
												active === option.key ? 'text-white' : 'text-slate-600'
											)}
										>
											<p className="mt-2 text-lg tracking-tight">
												{option.blurb}
											</p>
										</div>
										<div className="mt-8">
											<ul
												role="list"
												className={classNames(
													'-my-2 divide-y text-base tracking-tight',
													active === option.key
														? 'divide-slate-400 text-neutral-200'
														: 'divide-slate-200 text-slate-900'
												)}
											>
												{option.options.map((listItem, listItemIndex) => {
													return (
														<li
															key={`list-item-${listItemIndex}`}
															className="flex py-2"
														>
															<svg
																aria-hidden="true"
																viewBox="0 0 32 32"
																className={classNames(
																	'h-8 w-8 flex-none',
																	active === option.key
																		? 'fill-white'
																		: 'fill-slate-600'
																)}
															>
																<path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z"></path>
															</svg>
															<span className="ml-4">{listItem}</span>
														</li>
													);
												})}
											</ul>
										</div>
										<Link
											className={classNames(
												'inline-flex justify-center rounded-full py-3 px-4 text-base font-semibold tracking-tight shadow-sm focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 mt-8',
												active === option.key
													? 'bg-white text-pink-600 hover:text-pink-700 focus-visible:text-pink-900 focus-visible:outline-white active:bg-pink-50 active:text-pink-900/80 disabled:opacity-40 disabled:hover:text-pink-600'
													: 'bg-slate-900 text-white hover:bg-slate-700 focus-visible:outline-slate-900 active:bg-slate-700 active:text-white/80 disabled:opacity-30 disabled:hover:bg-slate-900'
											)}
											href={option.ctaLink}
										>
											{option.ctaText}
										</Link>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
