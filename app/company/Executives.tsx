import Image from 'next/image';
import { SectionIntro } from '@/components/SectionIntro';

export default function SplitQuote() {
	return (
		<div>
			<div className="mx-auto max-w-2xl text-center">
				<SectionIntro
					eyebrow="Executives"
					title="Meet Our Leadership Team"
					className="mb-24"
				>
					<p>
						Experts with decades of experience that are passionate about genetic
						counseling and dedicated to delivering the best results for our
						clients.
					</p>
				</SectionIntro>
			</div>
			<div className="mt-8 sm:mt-16 sm:px-6 lg:px-8">
				<div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl rounded-3xl sm:px-16">
					<section className="">
						<div className="mx-auto max-w-7xl px-6 lg:px-8">
							<div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
								<div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
									<Image
										className="mx-auto mb-6 w-28 h-28 rounded-full flex-none object-cover shadow-2xl"
										src="/company/bonnie.png"
										alt=""
										width={200}
										height={200}
									/>
									<div className="text-xl text-white sm:text-2xl font-semibold">
										Bonnie Liebers, MS, CGC
									</div>
									<div className="text-slate-200 font-semibold">
										Co-Founder / CEO
									</div>
									<figure className="mt-10 flex flex-auto flex-col justify-start">
										<blockquote className="text-lg text-slate-400">
											<p>
												Bonnie has 35 years of experience as a genetic counselor
												and started Guide Genetics in an effort to broaden the
												digital reach of genetic counselors and empower
												stakeholders in the genetic testing industry. Over the
												course of her career, Bonnie has held positions at
												Albany Medical College, Kaiser Permanente and Northeast
												Health. Bonnie holds a BS in Biology and in Psychology
												from Syracuse University, an MS in Genetic Counseling
												from the University of Pittsburgh Graduate School of
												Public Health and charter membership in the American
												Board of Genetic Counseling.
											</p>
										</blockquote>
									</figure>
								</div>
								<div className="flex flex-col border-t-2 border-white/10 pt-10 sm:pt-16 lg:border-l-2 lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20">
									<Image
										className="mx-auto mb-6 w-28 h-28 rounded-full flex-none object-cover shadow-2xl"
										src="/company/matt.jpeg"
										alt=""
										width={200}
										height={200}
									/>
									<div className="text-xl text-white sm:text-2xl font-semibold">
										Matthew Liebers, MD
									</div>
									<div className="text-slate-200 font-semibold">Co-Founder</div>
									<figure className="mt-10 flex flex-auto flex-col justify-start">
										<blockquote className="text-lg text-slate-400">
											<p>
												Matt&apos;s background is in healthcare consulting, data
												science and genomics research. Matt focused his research
												work at Massachusetts General Hospital in cancer
												genomics and CRISPR/Cas9 gene editing. He also spent
												time in consulting, at McKinsey & Co., working primarily
												in the pharmaceuticals and medical devices space. Matt
												holds a BS in Biology and Applied Economics from Cornell
												University, an MD at the Icahn School of Medicine at
												Mount Sinai, and is pursuing a Masters in Biomedical
												Informatics at the Harvard Medical School.
											</p>
										</blockquote>
									</figure>
								</div>
							</div>
						</div>
					</section>
					<div
						className="absolute -top-24 right-0 -z-10 transform-gpu blur-3xl"
						aria-hidden="true"
					>
						<div
							className="aspect-[1404/767] w-[87.75rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
							style={{
								clipPath:
									'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
