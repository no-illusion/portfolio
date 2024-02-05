import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
	return (
		<Link href="/">
			<div className="flex items-center text-white space-x-3">
				<Image
					className="h-6 w-auto"
					alt="Guide Genetics"
					src="/logo-icon-white.svg"
					width={100}
					height={100}
				/>
				<span className="text-sm">
					<span>Guide</span>
					<span className="font-bold ml-1">Genetics</span>
				</span>
			</div>
		</Link>
	);
}
