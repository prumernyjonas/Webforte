import Link from 'next/link';

interface ThankYouPageProps {
	type: 'consultation' | 'roi-calculator' | 'audit' | 'newsletter';
	userEmail?: string;
	userName?: string;
}

export default function ThankYouPage({
	type,
	userEmail,
	userName,
}: ThankYouPageProps) {
	const getContent = () => {
		switch (type) {
			case 'consultation':
				return {
					icon: '🎯',
					title: 'Děkujeme za váš zájem o konzultaci!',
					subtitle: 'Váš požadavek byl úspěšně odeslán',
					expectation:
						'Náš AI specialista vás kontaktuje do 2 pracovních hodin pro naplánování konzultace.',
					immediateValue: {
						title: 'Mezitím si můžete stáhnout náš AI Transformation Guide',
						description:
							'Praktický průvodce implementací AI v českých firmách s 15 konkrétními use cases.',
						downloadLink: '/downloads/ai-transformation-guide.pdf',
						downloadText: 'Stáhnout průvodce (PDF, 2.4 MB)',
					},
					nextSteps: [
						'Připravte si informace o vašich současných procesech',
						'Zamyslete se nad největšími výzvami ve vaší firmě',
						'Mějte připravené otázky o konkrétních AI řešeních',
					],
				};

			case 'roi-calculator':
				return {
					icon: '📊',
					title: 'Váš ROI výpočet je připraven!',
					subtitle: 'Analýza byla úspěšně dokončena',
					expectation:
						'Detailní ROI kalkulaci jsme vám odeslali na email během 5 minut.',
					immediateValue: {
						title: 'Prohlédněte si podobné úspěšné implementace',
						description:
							'Případové studie firem, které dosáhly podobných nebo vyšších úspor pomocí AI.',
						downloadLink: '/pripadove-studie',
						downloadText: 'Zobrazit případové studie',
					},
					nextSteps: [
						'Zkontrolujte si email s detailní analýzou',
						'Prohlédněte si doporučené AI řešení',
						'Naplánujte si bezplatnou konzultaci pro další kroky',
					],
				};

			case 'audit':
				return {
					icon: '🔍',
					title: 'Registrace na AI Audit dokončena!',
					subtitle: 'Těšíme se na analýzu vašich procesů',
					expectation:
						'Náš tým vás kontaktuje do 24 hodin pro naplánování bezplatného auditu.',
					immediateValue: {
						title: 'Připravte se na audit s naším checklistem',
						description:
							'Kompletní seznam dokumentů a informací, které budeme potřebovat pro efektivní audit.',
						downloadLink: '/downloads/audit-checklist.pdf',
						downloadText: 'Stáhnout checklist (PDF, 1.2 MB)',
					},
					nextSteps: [
						'Připravte si přehled současných procesů',
						'Identifikujte největší časové ztráty',
						'Shromážděte data o nákladech na manuální práci',
					],
				};

			default:
				return {
					icon: '✅',
					title: 'Děkujeme!',
					subtitle: 'Vaše registrace byla úspěšná',
					expectation: 'Budeme vás informovat o novinkách ze světa AI.',
					immediateValue: null,
					nextSteps: [],
				};
		}
	};

	const content = getContent();

	return (
		<div className='min-h-screen bg-gradient-to-br from-brand-platinum via-white to-blue-50 flex items-center justify-center p-4'>
			<div className='max-w-4xl w-full'>
				{/* Main Success Card */}
				<div className='card-neural p-8 md:p-12 text-center mb-8 section-reveal'>
					{/* Success Animation */}
					<div className='w-24 h-24 mx-auto mb-6 relative'>
						<div className='w-24 h-24 bg-green-100 rounded-full flex items-center justify-center text-4xl animate-bounce'>
							{content.icon}
						</div>
						<div className='absolute inset-0 w-24 h-24 border-4 border-green-400 rounded-full animate-ping opacity-20'></div>
					</div>

					{/* Personalized Greeting */}
					{userName && (
						<p className='text-lg text-gray-600 mb-2'>Ahoj {userName}! 👋</p>
					)}

					<h1 className='text-display-lg text-brand-neural mb-4'>
						{content.title}
					</h1>

					<p className='text-xl text-gray-600 mb-6'>{content.subtitle}</p>

					{/* Clear Expectation Setting */}
					<div className='bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8'>
						<div className='flex items-start gap-3'>
							<div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1'>
								<svg
									className='w-4 h-4 text-blue-600'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
									/>
								</svg>
							</div>
							<div className='text-left'>
								<h3 className='font-semibold text-blue-800 mb-2'>
									Co bude dál?
								</h3>
								<p className='text-blue-700'>{content.expectation}</p>
								{userEmail && (
									<p className='text-sm text-blue-600 mt-2'>
										📧 Potvrzení odeslané na: <strong>{userEmail}</strong>
									</p>
								)}
							</div>
						</div>
					</div>

					{/* Immediate Value Offer */}
					{content.immediateValue && (
						<div className='bg-gradient-to-r from-brand-quantum/5 to-brand-electric/5 border border-brand-quantum/20 rounded-lg p-6 mb-8'>
							<h3 className='font-semibold text-brand-neural mb-3 flex items-center justify-center gap-2'>
								<span className='text-2xl'>🎁</span>
								{content.immediateValue.title}
							</h3>
							<p className='text-gray-600 mb-4'>
								{content.immediateValue.description}
							</p>
							<Link
								href={content.immediateValue.downloadLink}
								className='btn-primary btn-smart-feedback inline-flex items-center gap-2'
							>
								<svg
									className='w-5 h-5'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
									/>
								</svg>
								{content.immediateValue.downloadText}
							</Link>
						</div>
					)}

					{/* Next Steps */}
					{content.nextSteps.length > 0 && (
						<div className='text-left bg-gray-50 rounded-lg p-6 mb-8'>
							<h3 className='font-semibold text-gray-800 mb-4 flex items-center gap-2'>
								<span className='text-xl'>📋</span>
								Jak se připravit na další kroky
							</h3>
							<ul className='space-y-3'>
								{content.nextSteps.map((step, index) => (
									<li key={index} className='flex items-start gap-3'>
										<span className='w-6 h-6 bg-brand-quantum text-white rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-0.5'>
											{index + 1}
										</span>
										<span className='text-gray-700'>{step}</span>
									</li>
								))}
							</ul>
						</div>
					)}
				</div>

				{/* Secondary Engagement Options */}
				<div className='grid md:grid-cols-3 gap-6 section-reveal stagger-1'>
					{/* Social Follow */}
					<div className='card-neural p-6 text-center'>
						<div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
							<svg
								className='w-6 h-6 text-blue-600'
								fill='currentColor'
								viewBox='0 0 24 24'
							>
								<path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
							</svg>
						</div>
						<h3 className='font-semibold mb-2'>Sledujte nás na LinkedIn</h3>
						<p className='text-sm text-gray-600 mb-4'>
							Týdenní AI insights a case studies
						</p>
						<a
							href='https://linkedin.com/company/webforte-ai'
							target='_blank'
							rel='noopener noreferrer'
							className='btn-outline text-sm'
						>
							Sledovat
						</a>
					</div>

					{/* Additional Resources */}
					<div className='card-neural p-6 text-center'>
						<div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
							<svg
								className='w-6 h-6 text-green-600'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
								/>
							</svg>
						</div>
						<h3 className='font-semibold mb-2'>AI Knowledge Base</h3>
						<p className='text-sm text-gray-600 mb-4'>
							Kompletní průvodce AI pro business
						</p>
						<Link href='/znalostni-baze' className='btn-outline text-sm'>
							Prozkoumat
						</Link>
					</div>

					{/* Emergency Contact */}
					<div className='card-neural p-6 text-center'>
						<div className='w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4'>
							<svg
								className='w-6 h-6 text-red-600'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
								/>
							</svg>
						</div>
						<h3 className='font-semibold mb-2'>Urgentní dotaz?</h3>
						<p className='text-sm text-gray-600 mb-4'>Zavolejte nám přímo</p>
						<a href='tel:+420123456789' className='btn-outline text-sm'>
							+420 123 456 789
						</a>
					</div>
				</div>

				{/* Footer Navigation */}
				<div className='text-center mt-12 section-reveal stagger-2'>
					<Link
						href='/'
						className='inline-flex items-center text-gray-600 hover:text-brand-quantum transition-colors'
					>
						<svg
							className='w-4 h-4 mr-2'
							fill='none'
							stroke='currentColor'
							viewBox='0 0 24 24'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M10 19l-7-7m0 0l7-7m-7 7h18'
							/>
						</svg>
						Zpět na hlavní stránku
					</Link>
				</div>
			</div>
		</div>
	);
}
