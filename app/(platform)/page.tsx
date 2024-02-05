import Header from '@/components/Header';
import Banner from './Banner';
import Features from './Features';
import Stakeholders from './Stakeholders';
import Solutions from './Solutions';
import Footer from '@/components/Footer';

export default function Home() {
	return (
		<div>
			<Header />
			<Banner />
			<Features />
			<Stakeholders />
			<Solutions />
			<Footer dark={true} />
		</div>
	);
}
