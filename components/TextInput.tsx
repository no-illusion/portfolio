import { classNames } from '@/utils';
import { ExclamationCircleIcon } from '@heroicons/react/20/solid';
import { UseFormRegisterReturn } from 'react-hook-form';

type TextInputProps = {
	id: string;
	label?: string | null;
	autoComplete?: string;
	error?: string;
	rows?: number;
	register: UseFormRegisterReturn;
};

export default function TextInput({
	id,
	label,
	autoComplete,
	error,
	rows,
	register,
}: TextInputProps) {
	return (
		<div>
			{label && (
				<label
					htmlFor={id}
					className="block text-sm font-semibold leading-6 text-white"
				>
					{label}
				</label>
			)}
			<div className="mt-2.5 relative">
				{rows ? (
					<textarea
						id={id}
						rows={rows}
						className={classNames(
							'block w-full rounded-md border-0  px-3.5 py-2 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6',
							error
								? 'bg-red-600/10 text-red-400 ring-red-300 placeholder:text-red-300 focus:ring-red-500'
								: 'bg-white/5 text-white ring-white/10 focus:ring-indigo-500'
						)}
						{...register}
					/>
				) : (
					<input
						id={id}
						autoComplete={autoComplete}
						className={classNames(
							'block w-full rounded-md border-0 py-1.5 pr-10 ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6',
							error
								? 'bg-red-600/10 text-red-400 ring-red-300 placeholder:text-red-300 focus:ring-red-500'
								: 'bg-white/5 text-white ring-white/10 focus:ring-indigo-500'
						)}
						{...register}
					/>
				)}

				{error && (
					<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
						<ExclamationCircleIcon
							className="h-5 w-5 text-red-400"
							aria-hidden="true"
						/>
					</div>
				)}
			</div>
			{error && <p className="mt-2 text-xs text-red-400">{error}</p>}
		</div>
	);
}
