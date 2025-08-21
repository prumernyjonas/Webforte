import React from 'react';

type SectionProps = {
	children: React.ReactNode;
	className?: string;
	showDivider?: boolean;
};

const Section = ({
	children,
	className = '',
	showDivider = false,
}: SectionProps) => (
	<section className={`relative w-full ${className}`}>
		{children}
		{showDivider && <div className='w-full h-px bg-gray-100 opacity-30' />}
	</section>
);

export default Section;
