import React from 'react';

export interface ContactEmailProps {
	firstName: string;
	lastName: string;
	phoneNumber: string;
	email: string;
	message: string;
}

export const ContactEmailTemplate: React.FC<Readonly<ContactEmailProps>> = ({
	firstName,
	lastName,
	phoneNumber,
	email,
	message,
}) => (
	<div>
		<h1>
			{firstName} {lastName} sent an online enquiry.
		</h1>
		<div>{message}</div>
		<h2>Contact Details:</h2>
		<ol>
			<li>
				Name: {firstName} {lastName}
			</li>
			<li>Phone: {phoneNumber}</li>
			<li>Email: {email}</li>
		</ol>
	</div>
);
