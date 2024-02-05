import { GridPattern } from '@/components/GridPattern';
import { Container } from '@/components/Container';
import { FadeIn } from '@/components/FadeIn';
import Link from 'next/link';

export default function Testimonial() {
	return (
		<div
			id="testimonial"
			className="relative isolate bg-neutral-950 py-16 sm:py-28 md:py-32 mt-24 sm:mt-32 lg:mt-40"
		>
			<GridPattern
				className="absolute inset-0 -z-10 h-full w-full fill-neutral-900 stroke-neutral-50/10 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
				yOffset={-256}
			/>
			<Container>
				<FadeIn>
					<figure className="mx-auto max-w-4xl">
						<figcaption className="mb-10 text-xl text-slate-400 italic">
							Broad Clinical Labs, LLC., a subsidiary of the Broad Institute of
							MIT and Harvard chose our services for Project FIND-OUT.
						</figcaption>
						<blockquote className="relative font-display text-2xl sm:text-4xl font-medium tracking-tight text-neutral-100">
							<p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
								Project FIND-OUT is unique in that it provides free whole genome
								sequencing, genetic counseling, and referral to specialists for
								symptomatic infants ... Guide Genetics, which has a network of
								professional genetic counselors, an easy-to-use patient portal
								and lab referral platform will provide virtual genetic
								counseling services for the project.
							</p>
						</blockquote>
						<figcaption className="mt-10">
							<Link
								href="https://www.prnewswire.com/news-releases/combinedbrain-announces-the-launch-of-project-find-out-301981706.html"
								className="text-xl font-semibold leading-7 text-pink-600 hover:text-pink-500 hover:underline underline-offset-8"
								target="_blank"
								rel="noopener noreferrer"
							>
								Read Full Story <span aria-hidden="true">&rarr;</span>
							</Link>
						</figcaption>
					</figure>
				</FadeIn>
			</Container>
		</div>
	);
}
