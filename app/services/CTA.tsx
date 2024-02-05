import { Container } from '@/components/Container';
import { FadeIn } from '@/components/FadeIn';
import { Button } from '@/components/Button';
import { ContactUs } from '@/components/ContactUs';

export default function CTA() {
	return (
		<Container className="my-24 sm:mt-40 lg:mt-52">
			<FadeIn className="rounded-[2.5rem] bg-neutral-950 p-12 md:px-16 md:py-24 lg:py-32">
				<div className="mx-auto max-w-4xl">
					<div className="max-w-xl">
						<h2 className="font-display text-4xl sm:text-5xl font-medium text-white [text-wrap:balance]">
							Need something more?
						</h2>
						<h3 className="mt-4 text-xl text-slate-400">
							We offer clinical support on tap with tailored support for
							specialty diseases, research trials, health study results, among
							others. We also offer consulting services to improve your system
							for optimal efficiency and patient care.
						</h3>
						<div className="mt-6 flex">
							<Button href="/contact" invert>
								Contact us
							</Button>
						</div>
						<div className="mt-10 border-t border-white/10 pt-10">
							<h3 className="font-display text-base font-semibold text-white">
								How to reach us
							</h3>
							<ContactUs
								invert
								className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
							/>
						</div>
					</div>
				</div>
			</FadeIn>
		</Container>
	);
}
