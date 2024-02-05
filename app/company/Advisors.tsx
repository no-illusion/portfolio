import Image from 'next/image';
import { SectionIntro } from '@/components/SectionIntro';

const people = [
	{
		name: 'Richard Sidlow, MD',
		role: 'Advisor',
		imageUrl: '/company/sidlow.jpeg',
		bio: "Dr. Sidlow is a Medical Geneticist acitive in teaching, research, grant writing and editorial work dedicated to pediatric genetic disease diagnosis and management. A fellow of the American Academy of Pediatrics, American College of Physicians and American Board of Quality Assurance and Utilization Review Physicians, he is also a member of the Society of Human Genetics, European Society of Human Genetics, Society of Hospital Medicine and Society to Improve Diagnosis in Medicine and American College of Medical Genetics and Genomics. Dr. Sidlow’s teaching, research and clinical staff appointments are spread between the Donald and Barbara Zucker School of Medicine at Hofstra-Northwell Health, the State University of New York-Health Science Center in Brooklyn, Staten Island University Hospital-Northwell Health and since 2020, Valley Children's Hospital Madera California.",
		linkedinUrl: '#',
	},
	{
		name: 'Ian Frayling',
		role: 'Advisor',
		imageUrl: '/company/frayling.jpeg',
		bio: "Dr. Ian Frayling is a Consultant in Genetic Pathology and is based at the All-Wales Medical Genetics Service. Ian qualified in Clinical Medicine at Cambridge and after initial training in pathology he studied DNA damage repair for his PhD. He is a founding member of InSiGHT, InSiGHT's Variant Interpretation Committee, and the Mallorca Group. Dr. Frayling's research contributed to the understanding of APC in familial polyposis and he has been named and Honorary Medical Advisor to Lynch Syndrome UK.",
		linkedinUrl: '#',
	},
	{
		name: 'Bowdoin Su, MD, MBA',
		role: 'Advisor',
		imageUrl: '/company/bowdoin.png',
		bio: 'Dr. Su acts as a clinical and biomedical industry advisor for Guide Genetics. Dr. Su has held positions at Natera and Sanofi and is now an Associate Director of Medical Affairs at Abbvie. Dr. Su is a board certified OBGYN. He received his MD from UT Southwestern and his MBA from the Kellogg School of Management at Northwestern.',
		linkedinUrl: '#',
	},
	{
		name: 'Mike Knych',
		role: 'Advisor',
		imageUrl: '/company/mike.png',
		bio: 'Mike Knych is Chief Financial Officer at the Asset Management Company, a family office that has made over 250 investments, specializing in information technology and the life sciences. At AMC, Mike monitors investments in limited partnerships, directs private investment, public equities and the family venture capital fund. He holds a B.A. in Economics from Colgate University.',
		linkedinUrl: '#',
	},
];

export default function Advisors() {
	return (
		<div>
			<div className="mx-auto max-w-2xl text-center">
				<SectionIntro
					eyebrow="Advisors"
					title="Meet Our Advisory Team"
					className="mt-24 sm:mb-12 sm:mt-32 lg:mt-40"
				>
					<p>
						We work with industry leaders to ensure that we deliver the best
						results across our genetic counseling suite.
					</p>
				</SectionIntro>
			</div>
			{/* <div className="mt-24 sm:mb-12">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Meet Our Advisors
					</h2>
					<p className="mt-6 text-lg leading-8 text-slate-600">
						We also work with industry leaders to deliver the best results.
					</p>
				</div>
			</div> */}
			<ul
				role="list"
				className="space-y-12 divide-y divide-gray-200 xl:col-span-3"
			>
				{people.map((person) => (
					<li
						key={`person-${person.name}`}
						className="flex gap-6 sm:gap-10 pt-12 items-center sm:text-left text-center sm:items-start justify-center flex-col sm:flex-row"
					>
						<Image
							className="w-24 h-24 rounded-full flex-none object-cover shadow-2xl"
							src={person.imageUrl}
							alt=""
							width={200}
							height={200}
						/>
						<div className="max-w-xl flex-auto">
							<h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">
								{person.name}
							</h3>
							<p className="text-base leading-7 text-gray-600">{person.role}</p>
							{/* <ul
								role="list"
								className="mt-1 flex justify-center sm:justify-start gap-x-6"
							>
								<li>
									<a
										href={person.linkedinUrl}
										className="text-gray-400 hover:text-gray-500"
									>
										<span className="sr-only">LinkedIn</span>
										<svg
											className="h-5 w-5"
											aria-hidden="true"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path
												fillRule="evenodd"
												d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
												clipRule="evenodd"
											/>
										</svg>
									</a>
								</li>
							</ul> */}
							<p className="mt-6 text-base leading-7 text-gray-600">
								{person.bio}
							</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}
