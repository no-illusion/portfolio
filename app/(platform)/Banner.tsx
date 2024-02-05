import { Container } from '@/components/Container';
import { FadeIn } from '@/components/FadeIn';
import Image from 'next/image';
import ThreeContainer from '@/components/DNAModel/ThreeContainer';

export default function Banner() {
	return (
		<div className="relative isolate overflow-hidden z-10 min-h-screen">
			<ThreeContainer />
			<div className="absolute inset-0 -z-10 bg-black opacity-50"></div>
			<Image
				src="/platform/banner.jpeg"
				alt=""
				className="absolute inset-0 -z-20 h-full w-full object-cover filter brightness-[0.5]"
				width={1013}
				height={570}
			/>
			<div
				className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
				aria-hidden="true"
			>
				<div
					className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
					style={{
						clipPath:
							'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
					}}
				/>
			</div>
			<Container className="py-24 pt-48">
				<FadeIn className="max-w-5xl mx-auto text-center">
					<h1 className="font-display text-5xl sm:text-7xl font-medium tracking-tight text-white [text-wrap:balance]">
						All your genetic counseling needs in one platform
					</h1>
					<p className="mt-6 mb-12 max-w-3xl mx-auto text-2xl text-slate-400">
						Improving patient care in genetic testing for labs, genetic
						counselors, and patients in one seamless and integrated platform.
					</p>
					<div className="mt-10 flex items-center justify-center gap-x-6">
						<a
							href="#features"
							className="rounded-full bg-[#BA2284] px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-400"
						>
							Learn More
						</a>
						<a
							href="/services"
							className="text-sm font-semibold leading-6 text-white"
						>
							Counseling Services <span aria-hidden="true">→</span>
						</a>
					</div>
				</FadeIn>
			</Container>
			<div
				className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
				aria-hidden="true"
			>
				<div
					className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
					style={{
						clipPath:
							'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
					}}
				/>
			</div>
		</div>
	);
}
