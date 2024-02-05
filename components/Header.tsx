'use client';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import { classNames } from '@/utils';
import Link from 'next/link';

const navigation = [
	{ name: 'Platform', href: '/' },
	{ name: 'Services', href: '/services' },
	{ name: 'Company', href: '/company' },
	{ name: 'Contact', href: '/contact' },
];

export default function Header({ dark = false }: { dark?: boolean }) {
	const pathname = usePathname();
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header
			className={classNames(
				'absolute inset-x-0 top-0 z-50',
				dark ? 'bg-gray-950' : 'bg-transparent'
			)}
		>
			<nav
				className="flex items-center justify-between p-6 lg:px-8"
				aria-label="Global"
			>
				<div className="flex lg:flex-1">
					<span className="-m-1.5 p-1.5">
						<span className="sr-only">Guide Genetics</span>
						<Logo />
						{/* <img
							className="h-8 w-auto"
							src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
							alt=""
						/> */}
					</span>
				</div>
				<div className="flex lg:hidden">
					<button
						type="button"
						className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-6 w-6" aria-hidden="true" />
					</button>
				</div>
				<div className="hidden lg:flex lg:gap-x-12">
					{navigation.map((item) => (
						<a
							key={item.name}
							href={item.href}
							className={classNames(
								pathname === item.href
									? 'text-[#BA2284] font-bold underline underline-offset-8 decoration-2'
									: 'text-white',
								'text-sm font-semibold leading-6'
							)}
						>
							{item.name}
						</a>
					))}
				</div>
				<div className="hidden lg:flex lg:flex-1 lg:justify-end">
					<Link
						href="https://portal.guidegenetics.com"
						className="text-sm font-semibold leading-6 text-white"
					>
						Log in <span aria-hidden="true">&rarr;</span>
					</Link>
				</div>
			</nav>
			<Dialog
				as="div"
				className="lg:hidden"
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
			>
				<div className="fixed inset-0 z-50" />
				<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
					<div className="flex items-center justify-between">
						<span className="-m-1.5 p-1.5">
							<span className="sr-only">Guide Genetics</span>
							<Logo />
						</span>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-gray-400"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6 flow-root">
						<div className="-my-6 divide-y divide-gray-500/25">
							<div className="space-y-2 py-6">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
									>
										{item.name}
									</a>
								))}
							</div>
							<div className="py-6">
								<Link
									href="https://portal.guidegenetics.com"
									className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-gray-800"
								>
									Log in
								</Link>
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</header>
	);
}
