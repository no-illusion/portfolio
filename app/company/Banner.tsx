import { Container } from '@/components/Container';
import { FadeIn } from '@/components/FadeIn';
import Image from 'next/image';
import Link from 'next/link';

export default function Banner() {
	return (
		<div className="min-h-screen relative isolate text-center overflow-hidden bg-neutral-950">
			<Image
				src="/company/banner.jpeg"
				alt=""
				width={2830}
				height={1500}
				className="absolute inset-0 -z-10 h-full w-full object-cover"
			/>
			<div
				className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
				aria-hidden="true"
			>
				<div
					className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
					style={{
						clipPath:
							'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
					}}
				/>
			</div>
			<div
				className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
				aria-hidden="true"
			>
				<div
					className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
					style={{
						clipPath:
							'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
					}}
				/>
			</div>
			<Container className="py-24 pt-48">
				<FadeIn className="max-w-5xl mx-auto text-center">
					<h1 className="font-display text-5xl sm:text-7xl font-medium tracking-tight text-white [text-wrap:balance]">
						Empowering genetic counseling with technology
					</h1>
					<p className="mt-6 mb-12 max-w-3xl mx-auto text-2xl text-slate-400">
						Our company is on a mission to revolutionize clinical genetics care
						with technology. This can only occur when clinical expertise and
						technology can work together.
					</p>
					<Link
						href="#team"
						className="rounded-full bg-[#BA2284] px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600"
					>
						See Our Leadership Team
					</Link>
				</FadeIn>
			</Container>
		</div>
	);
}
