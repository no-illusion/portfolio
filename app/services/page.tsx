import Header from '@/components/Header';
import Banner from './Banner';
import Referrers from './Referrers';
import Testimonial from './Testimonial';
import Expertise from './Expertise';
import CTA from './CTA';
import Footer from '@/components/Footer';

export default function ServicesPage() {
	return (
		<>
			<Header dark={true} />
			<Banner />
			<Referrers />
			<Testimonial />
			<Expertise />
			<CTA />
			<Footer />
		</>
	);
}
