import Header from '@/components/Header';
import Banner from './Banner';
import Executives from './Executives';
import Advisors from './Advisors';

export default function CompanyPage() {
	return (
		<div>
			<Header />
			<Banner />
			<div
				id="team"
				className="bg-white mx-auto max-w-7xl py-24 md:py-32 px-6 lg:px-8"
			>
				<Executives />
				<Advisors />
			</div>
		</div>
	);
}
