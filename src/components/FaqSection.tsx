export default function FaqSection() {
	return (
		<section className='py-16'>
			<div className='container'>
				<div className='bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto'>
					<h2 className='text-2xl font-bold mb-6'>
						Máte otázky? Tady jsou odpovědi!
					</h2>

					<div className='space-y-4'>
						<div className='border border-gray-200 rounded-lg p-4'>
							<div className='flex justify-between items-center mb-2'>
								<h3 className='text-lg font-medium text-gray-800'>
									1. Kolik stojí vytvoření webu, včetně e-shopu?
								</h3>
								<button className='w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='w-4 h-4'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M19 9l-7 7-7-7'
										/>
									</svg>
								</button>
							</div>
							<div>
								<p className='text-gray-600'>
									Konečná cena vždy závisí na konkrétních požadavcích. U
									jednoduchých webů začínáme na{' '}
									<strong>základní částce 15 000 Kč</strong>. U složitějších
									webů je potřeba{' '}
									<a href='/konzultace' className='text-primary underline'>
										individuální konzultace
									</a>
									. Jak vám po telefonu sdělujeme, ceny jsou orientační a v
									závislosti na rozsahu projektu.
								</p>
							</div>
						</div>

						<div className='border border-gray-200 rounded-lg p-4'>
							<div className='flex justify-between items-center'>
								<h3 className='text-lg font-medium text-gray-800'>
									2. Máte web, ale náš redesign může přinést zlepšení. Můžeme ho
									optimalizovat?
								</h3>
								<button className='w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='w-4 h-4'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M12 6v6m0 0v6m0-6h6m-6 0H6'
										/>
									</svg>
								</button>
							</div>
						</div>

						<div className='border border-gray-200 rounded-lg p-4'>
							<div className='flex justify-between items-center'>
								<h3 className='text-lg font-medium text-gray-800'>
									3. Jak probíhá tvorba webových stránek u vás?
								</h3>
								<button className='w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='w-4 h-4'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M12 6v6m0 0v6m0-6h6m-6 0H6'
										/>
									</svg>
								</button>
							</div>
						</div>

						<div className='border border-gray-200 rounded-lg p-4'>
							<div className='flex justify-between items-center'>
								<h3 className='text-lg font-medium text-gray-800'>
									4. Pomůžete mi také se propagací webu ve vyhledávačích?
								</h3>
								<button className='w-6 h-6 flex items-center justify-center bg-gray-100 rounded-full'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='w-4 h-4'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M12 6v6m0 0v6m0-6h6m-6 0H6'
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>

					<div className='mt-6 flex'>
						<a href='/kontakt' className='btn-outline flex items-center'>
							Další časté dotazy? Prozkoumat znalostní…
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='w-4 h-4 ml-2'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M14 5l7 7m0 0l-7 7m7-7H3'
								/>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
