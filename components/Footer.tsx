import { classNames } from '@/utils';

const navigation = {
	main: [
		{ name: 'Platform', href: '/' },
		{ name: 'Services', href: '/services' },
		{ name: 'Company', href: '/company' },
		{ name: 'Contact', href: '/contact' },
	],
	social: [
		{
			name: 'Facebook',
			href: 'https://www.facebook.com/GuideGenetics/',
			icon: (props: any) => (
				<svg fill="currentColor" viewBox="0 0 24 24" {...props}>
					<path
						fillRule="evenodd"
						d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
		{
			name: 'X',
			href: 'https://twitter.com/GuideGenetics',
			icon: (props: any) => (
				<svg fill="currentColor" viewBox="0 0 30 30" {...props}>
					<path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"></path>
				</svg>
			),
		},
		{
			name: 'LinkedIn',
			href: 'https://www.linkedin.com/company/guidegenetics',
			icon: (props: any) => (
				<svg fill="currentColor" viewBox="0 0 20 20" {...props}>
					<path
						fillRule="evenodd"
						d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
						clipRule="evenodd"
					/>
				</svg>
			),
		},
	],
};

export default function Footer({ dark = false }: { dark?: boolean }) {
	return (
		<footer className={dark ? 'bg-neutral-950' : 'bg-white'}>
			<div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
				<nav
					className="-mb-6 columns-2 flex justify-center gap-x-12"
					aria-label="Footer"
				>
					{navigation.main.map((item) => (
						<div key={item.name} className="pb-6">
							<a
								href={item.href}
								className={classNames(
									'text-sm leading-6',
									dark
										? 'text-slate-400 hover:text-white'
										: 'text-gray-600 hover:text-gray-900'
								)}
							>
								{item.name}
							</a>
						</div>
					))}
				</nav>
				<div className="mt-10 flex justify-center space-x-10">
					{navigation.social.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className={classNames(
								dark
									? 'text-slate-400 hover:text-white'
									: 'text-gray-400 hover:text-gray-500'
							)}
						>
							<span className="sr-only">{item.name}</span>
							<item.icon className="h-6 w-6" aria-hidden="true" />
						</a>
					))}
				</div>
				<p
					className={classNames(
						'mt-10 text-center text-xs leading-5',
						dark ? 'text-slate-400' : 'text-gray-500'
					)}
				>
					&copy; {new Date().getFullYear()} Guide Genetics, Inc. All rights
					reserved.
				</p>
			</div>
		</footer>
	);
}
