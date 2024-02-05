import {
	RectangleGroupIcon,
	CalendarDaysIcon,
	ArrowsRightLeftIcon,
	PencilSquareIcon,
} from '@heroicons/react/24/outline';

const features = [
	{
		name: 'Admin Dashboard',
		description:
			'Birds eye view of all cases in the portal. This allows you to see patients, referrals, or consults in one place.',
		icon: RectangleGroupIcon,
	},
	{
		name: 'Patient Scheduling',
		description:
			'A summary of referred patients, displaying the scheduling stage they are in (scheduled, completed, new consults).',
		icon: CalendarDaysIcon,
	},
	{
		name: 'Lab Referrals',
		description:
			'Invite users to your portal. This could include referring labs, counselers to review cases, or other healthcare providers.',
		icon: ArrowsRightLeftIcon,
	},
	{
		name: 'Counselor Notes',
		description:
			'Review patients, write notes, view attached reports and information from referring entities.',
		icon: PencilSquareIcon,
	},
];

export default function Features() {
	return (
		<div id="features" className="bg-white pt-24 sm:pt-32 pb-16">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl text-center">
					<h2 className="text-base font-semibold leading-7 text-[#BA2284]">
						Genetic Counseling for the 21st Century
					</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Everything you need as a genetic counselor
					</p>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						Genetic counselors need a set of tools that allow them to serve the
						needs of diverse patients better without being burnt out by endless
						administrative workloads.
					</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl  lg:max-w-4xl">
					<dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
						{features.map((feature) => (
							<div key={feature.name} className="relative pl-16">
								<dt className="text-base font-semibold leading-7 text-gray-900">
									<div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#BA2284]">
										<feature.icon
											className="h-6 w-6 text-white"
											aria-hidden="true"
										/>
									</div>
									{feature.name}
								</dt>
								<dd className="mt-2 text-base leading-7 text-gray-600">
									{feature.description}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
			{/* <div className="relative bg-gray-950">
				<div className="h-32 w-full bg-gray-950 absolute bottom-0 transform skew-y-12"></div>
				<div className="h-32 w-full bg-gray-950 absolute bottom-0 transform -skew-y-12"></div>
			</div> */}
		</div>
	);
}
