import { SectionIntro } from '@/components/SectionIntro';
import { Container } from '@/components/Container';
import { FadeIn } from '@/components/FadeIn';
import { StylizedImage } from '@/components/StylizedImage';
import { List, ListItem } from '@/components/List';

export default function Expertise() {
	return (
		<>
			<SectionIntro
				eyebrow="Expertise"
				title="Our genetic counseling services span all domains."
				className="mt-24 sm:mt-32 lg:mt-40"
			>
				<p>
					From Whole Genome Sequencing (WGS), Cancer, Carrier Testing and Rare
					Diseases, Prenatal, and Others — we have an endless capacity to
					support your specific needs.
				</p>
			</SectionIntro>
			<Container className="mt-16">
				<div className="lg:flex lg:items-center lg:justify-end">
					<div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
						<FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
							<StylizedImage
								src={'/services/industry.jpg'}
								sizes="(min-width: 1024px) 41rem, 31rem"
								className="justify-center lg:justify-end"
							/>
						</FadeIn>
					</div>
					<List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
						<ListItem title="Whole Genome Sequencing">
							Guide Genetics&apos; platform and expert genetic counselor network
							is at the cutting edge of providing whole-genome sequencing (WGS)
							counseling. We have built out proprietary technology and
							capabilities to support clinical encounters, interpretation and
							next steps in the WGS space. The immense volume of data requiring
							interpretation and clinical guidance is a newer corner of genetic
							counseling which is now being routinely tackled by the experienced
							team at Guide Genetics.
						</ListItem>
						<ListItem title="Cancer">
							Increasingly, cancer management requires simultaneous
							understanding of inherited genes, tumor genetics and family
							history. Counselors will take a pedigree in concert pre-test or
							post-test consultation. This will add further insight into
							treatment options for current cancer patients, after tumor genomic
							testing.
						</ListItem>
						<ListItem title="Carrier Testing and Rare Disease">
							Carrier testing explained for those of reproductive age or those
							with family history concerns. With expertise and experience in
							rare and not-so-rare diseases, we serve individuals, commercial
							labs and clinical groups. Our genetic counselors will explain the
							genetic underpinnings of disease and put it in the context of
							family history, genetics and current, relevant published data to
							guide next steps in the clinical journey.
						</ListItem>
						<ListItem title="Prenatal">
							Get easy access to prenatal counseling for individuals and
							providers. We support family planning counseling to same-sex
							couples and individuals, and expert review third-party licensed
							genetic counselors unaffiliated to companies to give you an
							unbiased perspective.
						</ListItem>
						{/* <ListItem title="Other">
							Get clinical support on tap with tailored support for specialty
							diseases, research trials, health study results, among others. We
							also offer consulting services to improve your system for optimal
							efficiency and patient care.
						</ListItem> */}
					</List>
				</div>
			</Container>
		</>
	);
}
