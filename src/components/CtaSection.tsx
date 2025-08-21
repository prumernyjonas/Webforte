export default function CtaSection() {
	return (
		<section className='py-24 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden'>
			{/* Background decoration */}
			<div className='absolute inset-0 bg-black/10'></div>
			<div className='absolute top-0 left-0 w-full h-full'>
				<div className='absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl'></div>
				<div className='absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl'></div>
			</div>

			<div className='container text-center relative z-10'>
				<div className='max-w-4xl mx-auto'>
					<div className='inline-block px-6 py-2 bg-white/20 text-white rounded-full mb-6 font-medium backdrop-blur-sm'>
						🚀 Připraveni na transformaci?
					</div>
					<h2 className='text-4xl md:text-5xl font-bold mb-6 text-white leading-tight'>
						Získejte <span className='text-accent'>konkurenční výhodu</span>
						<br />s AI řešeními na míru
					</h2>
					<p className='text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed'>
						Neztrácejte čas. Začněte s bezplatnou konzultací ještě dnes a
						zjistěte, kom můžeme automatizovat vaše procesy a zvýšit efektivitu
						o 40-60%.
					</p>

					<div className='flex flex-col sm:flex-row gap-6 justify-center items-center'>
						<a href='/konzultace' className='cta-urgent group'>
							<svg
								className='w-6 h-6'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M13 10V3L4 14h7v7l9-11h-7z'
								/>
							</svg>
							Bezplatná konzultace ZDARMA
							<svg
								className='w-5 h-5 transition-transform group-hover:translate-x-1'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M17 8l4 4m0 0l-4 4m4-4H3'
								/>
							</svg>
						</a>
						<a href='/pripadove-studie' className='btn-secondary group'>
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
									d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z'
								/>
							</svg>
							Prohlédnout výsledky
						</a>
					</div>

					<div className='mt-8 text-white/80 text-sm'>
						✅ Bez závazků • ✅ 60 minut zdarma • ✅ Okamžitá zpětná vazba
					</div>
				</div>
			</div>
		</section>
	);
}
