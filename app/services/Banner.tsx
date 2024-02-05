import WaveRipple from '@/components/WaveRipple';
import { Container } from '@/components/Container';
import { FadeIn } from '@/components/FadeIn';

export default function Banner() {
	return (
		<div id="main-banner" className="bg-gray-950">
			<Container className="py-24 pt-48">
				<FadeIn className="max-w-5xl mx-auto text-center">
					<h1 className="font-display text-5xl sm:text-7xl font-medium tracking-tight text-white [text-wrap:balance]">
						Best-in-class, tech enabled genetics counseling suite.
					</h1>
					<p className="mt-6 text-2xl text-slate-400">
						Your labs, your patients, and our counselors collaborating together
						within our state-of-the-art genetic counseling platform to provide
						best-in-class care.
					</p>
				</FadeIn>
			</Container>
			<div className="h-64">
				<WaveRipple />
			</div>
		</div>
	);
}
