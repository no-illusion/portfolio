import { classNames } from '@/utils';

function Office({
	name,
	children,
	invert = false,
}: {
	name: string;
	children: React.ReactNode;
	invert?: boolean;
}) {
	return (
		<address
			className={classNames(
				'text-sm not-italic',
				invert ? 'text-neutral-300' : 'text-neutral-600'
			)}
		>
			<strong className={invert ? 'text-white' : 'text-neutral-950'}>
				{name}
			</strong>
			<br />
			{children}
		</address>
	);
}

export function ContactUs({
	invert = false,
	...props
}: React.ComponentPropsWithoutRef<'ul'> & { invert?: boolean }) {
	return (
		<ul role="list" {...props}>
			<li>
				<Office name="Address" invert={invert}>
					Guide Genetics, Inc. Genetic Counseling Services Urban Co-Works
					<br />
					433 State Street, 4th Floor Schenectady
					<br />
					New York, 12305 1 Carlsberg Gate
				</Office>
			</li>
			<li>
				<Office name="Telephone" invert={invert}>
					Monday through Friday 9 AM to 6 PM, EST
					<br />
					888-260-6543 (toll-free)
				</Office>
			</li>
			<li>
				<Office name="Fax" invert={invert}>
					888-204-5975
				</Office>
			</li>
			<li>
				<Office name="Email" invert={invert}>
					info@guidegenetics.com
				</Office>
			</li>
		</ul>
	);
}
