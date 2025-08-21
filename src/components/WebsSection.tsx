import Image from 'next/image';
import Link from 'next/link';

export default function AIServicesSection() {
	return (
		<section className='py-24 relative overflow-hidden curved-section'>
			<div className='container relative z-10'>
				<div className='text-center max-w-3xl mx-auto mb-20'>
					<div className='inline-block rotate-badge px-4 py-2 bg-accent text-primary rounded-full mb-4 font-medium'>
						Inovativní technologie
					</div>
					<h2 className='text-3xl md:text-5xl font-bold mb-6'>
						Objevte sílu <span className='gradient-text'>AI řešení</span> na
						míru
					</h2>
					<p className='text-lg text-gray-600'>
						Naše pokročilé technologie kombinují umělou inteligenci a
						automatizaci pro vytvoření řešení, která výrazně zvyšují
						produktivitu a efektivitu vašeho podnikání.
					</p>
				</div>

				<div className='relative mt-32 mb-32'>
					{/* Central image with blob shape */}
					<div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[300px] h-[300px] md:w-[400px] md:h-[400px]'>
						<div className='circular-image-container w-full h-full shadow-lg'>
							<Image
								src='/ai_service.webp'
								alt='AI technologie v praxi'
								fill
								className='object-cover'
							/>
						</div>
					</div>

					{/* Service cards in a circular arrangement */}
					<div className='grid grid-cols-1 md:grid-cols-3 gap-8 relative z-20'>
						<div className='card p-6 md:p-8 bg-white service-card floating animation-delay-1'>
							<div className='w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-7 w-7 text-primary'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M13 10V3L4 14h7v7l9-11h-7z'
									/>
								</svg>
							</div>
							<h3 className='text-xl font-semibold mb-3'>
								Správa dat v reálném čase
							</h3>
							<p className='text-gray-600 mb-4'>
								Naše AI algoritmy analyzují a zpracovávají velké objemy dat v
								reálném čase, což vám umožňuje činit informovaná rozhodnutí
								okamžitě.
							</p>
							<Link
								href='/sluzby'
								className='text-primary font-medium flex items-center group'
							>
								Více informací
								<svg
									className='ml-2 w-4 h-4 transition-transform group-hover:translate-x-1'
									viewBox='0 0 24 24'
									fill='none'
								>
									<path
										d='M5 12H19M19 12L12 5M19 12L12 19'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</Link>
						</div>

						<div className='card p-6 md:p-8 bg-white service-card floating-slow animation-delay-2'>
							<div className='w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-6'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-7 w-7 text-secondary'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
									/>
								</svg>
							</div>
							<h3 className='text-xl font-semibold mb-3'>
								Automatizace workflow
							</h3>
							<p className='text-gray-600 mb-4'>
								Eliminujte manuální procesy a soustřeďte se na to, co je
								důležité. Naše nástroje přebírají opakující se úkoly a šetří váš
								drahocenný čas.
							</p>
							<Link
								href='/automatizace'
								className='text-primary font-medium flex items-center group'
							>
								Více informací
								<svg
									className='ml-2 w-4 h-4 transition-transform group-hover:translate-x-1'
									viewBox='0 0 24 24'
									fill='none'
								>
									<path
										d='M5 12H19M19 12L12 5M19 12L12 19'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</Link>
						</div>

						<div className='card p-6 md:p-8 bg-white service-card floating-slower animation-delay-3'>
							<div className='w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-7 w-7 text-primary'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
									/>
								</svg>
							</div>
							<h3 className='text-xl font-semibold mb-3'>
								Inteligentní predikce
							</h3>
							<p className='text-gray-600 mb-4'>
								Naše prediktivní modely analyzují historická data a identifikují
								vzorce, které vám pomohou předvídat budoucí trendy a potřeby
								vašich zákazníků.
							</p>
							<Link
								href='/ai-reseni'
								className='text-primary font-medium flex items-center group'
							>
								Více informací
								<svg
									className='ml-2 w-4 h-4 transition-transform group-hover:translate-x-1'
									viewBox='0 0 24 24'
									fill='none'
								>
									<path
										d='M5 12H19M19 12L12 5M19 12L12 19'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</Link>
						</div>
					</div>
				</div>

				{/* Additional Features Section */}
				<div className='mt-24'>
					<div className='flex flex-col lg:flex-row items-center gap-16'>
						<div className='lg:w-1/2 order-2 lg:order-1'>
							<div className='space-y-12'>
								<div className='relative'>
									<div className='absolute -left-6 top-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center z-10'>
										<div className='text-primary font-bold'>01</div>
									</div>
									<div className='bg-white rounded-xl p-6 ml-4 relative z-0 shadow-sm'>
										<h3 className='text-xl font-semibold mb-2'>
											Analýza a konzultace
										</h3>
										<p className='text-gray-600'>
											Začínáme důkladnou analýzou vašich potřeb a procesů. Naši
											specialisté identifikují oblasti, kde můžete nejvíce těžit
											z implementace AI a automatizačních řešení.
										</p>
									</div>
								</div>

								<div className='relative'>
									<div className='absolute -left-6 top-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center z-10'>
										<div className='text-primary font-bold'>02</div>
									</div>
									<div className='bg-white rounded-xl p-6 ml-4 relative z-0 shadow-sm'>
										<h3 className='text-xl font-semibold mb-2'>
											Vývoj na míru
										</h3>
										<p className='text-gray-600'>
											Vytváříme řešení přesně podle vašich potřeb. Naše AI
											systémy se přizpůsobí vašim existujícím procesům a
											integrují se s vašimi stávajícími technologiemi.
										</p>
									</div>
								</div>

								<div className='relative'>
									<div className='absolute -left-6 top-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center z-10'>
										<div className='text-primary font-bold'>03</div>
									</div>
									<div className='bg-white rounded-xl p-6 ml-4 relative z-0 shadow-sm'>
										<h3 className='text-xl font-semibold mb-2'>
											Implementace a podpora
										</h3>
										<p className='text-gray-600'>
											Zajistíme hladké nasazení a následnou podporu. Náš tým vám
											poskytne školení a bude s vámi pracovat na optimalizaci
											výsledků.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className='lg:w-1/2 order-1 lg:order-2'>
							<div className='relative'>
								<div className='rotate-badge bg-accent text-primary px-4 py-2 rounded-full inline-block font-medium mb-6'>
									Náš proces
								</div>
								<h2 className='text-3xl md:text-4xl font-bold mb-6'>
									Jak probíhá spolupráce s{' '}
									<span className='gradient-text'>WebForte AI</span>
								</h2>
								<p className='text-lg text-gray-600 mb-8'>
									Naším cílem je vytvořit řešení, které přesně odpovídá vašim
									potřebám a přináší měřitelné výsledky. Spolupráce s námi je
									transparentní, efektivní a zaměřená na vaše cíle.
								</p>
								<Link href='/konzultace' className='btn-primary'>
									Zjistit více o našem procesu
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
