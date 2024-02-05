import { SectionIntro } from '@/components/SectionIntro';
import { Container } from '@/components/Container';
import { FadeIn, FadeInStagger } from '@/components/FadeIn';
import {
	BeakerIcon,
	HomeModernIcon,
	BuildingOffice2Icon,
} from '@heroicons/react/20/solid';

const referrers = [
	{
		name: 'Labs',
		logo: BeakerIcon,
		description:
			'Ease the burden of risk assessment and test interpretation with out board-certified genetic counselors who can provide your patients with pre-test or post-test genetic counseling.',
	},
	{
		name: 'Providers',
		logo: HomeModernIcon,
		description:
			'Bring the expertise of genetic counselors to your clinic. We can support your in-house clinical team with expert advice from a board-certified genetic counselor.',
	},
	{
		name: 'Others',
		logo: BuildingOffice2Icon,
		description:
			'We support research foundations and bio-pharma with genetic counselor support customized to your testing menu, giving your sequencing the robust interpretation it deserves.',
	},
];

export default function Referrers() {
	return (
		<div id="referrer-types">
			<SectionIntro
				eyebrow="Services"
				title="All referrer types can benefit from our services"
				className="mt-24 sm:mt-32 lg:mt-40"
			>
				<p>
					We have built in capabilities that remain flexible, no matter who you
					are. Whether you are a testing lab, clinic, individual physician,
					research foundation, bio-pharma, or any other industry partner, we
					have the capacity to serve you.
				</p>
			</SectionIntro>
			<Container className="my-16">
				<FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
					{referrers.map((referrer, referrerIndex) => (
						<FadeIn key={`referrer-${referrerIndex}`} className="flex">
							<article className="relative flex w-full shadow-md flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
								<h3>
									<span className="absolute inset-0 rounded-3xl" />
									<referrer.logo className="h-8 w-8" />
								</h3>
								{/* <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
										Some text
									</p> */}
								<p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
									{referrer.name}
								</p>
								<p className="mt-4 text-base text-neutral-600">
									{referrer.description}
								</p>
							</article>
						</FadeIn>
					))}
				</FadeInStagger>
			</Container>
		</div>
	);
}
