import Image from 'next/image';
import Link from 'next/link';

export default function ProjectsSection() {
	return (
		<section className='py-32 relative overflow-hidden curved-section'>
			<div className='container relative z-10'>
				<div className='text-center mb-20'>
					<div className='rotate-badge inline-block px-4 py-2 bg-accent text-primary rounded-full mb-4 font-medium'>
						Naše práce
					</div>
					<h2 className='text-display-lg mb-6'>
						Případové studie{' '}
						<span className='gradient-text'>AI implementací</span>
					</h2>
					<p className='text-lg text-gray-600 max-w-3xl mx-auto'>
						Podívejte se na projekty, kde jsme pomocí umělé inteligence a
						automatizace pomohli našim klientům dosáhnout výjimečných výsledků a
						získat konkurenční výhodu.
					</p>
				</div>

				{/* Enhanced Case Study 1 - Story-driven approach */}
				<div className='grid md:grid-cols-12 gap-8 mb-24'>
					<div className='md:col-span-5 order-2 md:order-1 flex items-center'>
						<div className='space-y-6 section-reveal'>
							{/* Challenge Badge */}
							<div className='bg-red-50 border border-red-200 text-red-700 text-xs px-3 py-1 rounded-full inline-block'>
								<span className='icon-neural-network mr-2'>🎯</span>
								Výzva: Prediktivní analýza
							</div>

							{/* Story Title */}
							<h3 className='text-display-lg text-brand-neural'>
								DataInsight AI
							</h3>

							{/* Challenge Section */}
							<div className='bg-gray-50 p-4 rounded-lg border-l-4 border-red-400'>
								<h4 className='font-semibold text-gray-800 mb-2 flex items-center'>
									<span className='w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mr-2 text-red-600 text-sm'>
										!
									</span>
									Výzva
								</h4>
								<p className='text-gray-600 text-sm'>
									E-commerce společnost ztrácela €2M ročně kvůli neoptimálním
									skladovým zásobám a neefektivním marketingovým kampaním.
								</p>
							</div>

							{/* Solution Section */}
							<div className='bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400'>
								<h4 className='font-semibold text-gray-800 mb-2 flex items-center'>
									<span className='w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2 text-blue-600 text-sm'>
										⚡
									</span>
									Řešení
								</h4>
								<p className='text-gray-600 text-sm'>
									Implementovali jsme komplexní systém strojového učení pro
									predikci nákupního chování zákazníků s real-time analýzou dat.
								</p>
							</div>

							{/* Pull Quote */}
							<blockquote className='border-l-4 border-brand-electric pl-4 italic text-lg text-gray-700 bg-gradient-to-r from-blue-50 to-transparent p-4 rounded-r-lg'>
								&ldquo;AI systém nám umožnil předvídat poptávku s 94% přesností.
								To změnilo celý náš business.&rdquo;
								<footer className='text-sm text-gray-500 mt-2 not-italic'>
									— Jana Svobodová, CEO DataInsight
								</footer>
							</blockquote>

							{/* Impact Metrics */}
							<div className='grid grid-cols-3 gap-4'>
								<div className='text-center p-3 bg-green-50 rounded-lg border border-green-200'>
									<div
										className='metric-counter text-2xl font-bold text-green-600'
										data-target='28'
									>
										28%
									</div>
									<div className='text-xs text-green-700'>Vyšší konverze</div>
								</div>
								<div className='text-center p-3 bg-green-50 rounded-lg border border-green-200'>
									<div
										className='metric-counter text-2xl font-bold text-green-600'
										data-target='32'
									>
										32%
									</div>
									<div className='text-xs text-green-700'>Méně zásob</div>
								</div>
								<div className='text-center p-3 bg-green-50 rounded-lg border border-green-200'>
									<div
										className='metric-counter text-2xl font-bold text-green-600'
										data-target='4'
									>
										4 měsíce
									</div>
									<div className='text-xs text-green-700'>Do ROI</div>
								</div>
							</div>

							{/* Technology Stack */}
							<div className='flex flex-wrap gap-2'>
								<span className='text-neural-code'>Machine Learning</span>
								<span className='text-neural-code'>Python/TensorFlow</span>
								<span className='text-neural-code'>Real-time Analytics</span>
							</div>

							<Link
								href='/pripadove-studie'
								className='group inline-flex items-center text-primary font-medium attention-pulse'
							>
								Prohlédnout celou případovou studii
								<svg
									className='ml-2 w-4 h-4 transition-transform group-hover:translate-x-1'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
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

					<div className='md:col-span-7 order-1 md:order-2'>
						<div className='relative section-reveal stagger-1'>
							<div className='card-quantum rounded-2xl overflow-hidden shadow-2xl p-2'>
								<div className='rounded-xl overflow-hidden'>
									<Image
										src='/projects/datainsight_dashboard.webp'
										alt='DataInsight AI Dashboard'
										width={700}
										height={500}
										className='object-cover w-full h-full'
									/>
								</div>
							</div>

							{/* Floating Success Metric */}
							<div className='absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg floating-slower max-w-[260px] card-neural'>
								<div className='flex items-center mb-2'>
									<Image
										src='/clients/ecommerce-avatar.webp'
										alt='Klient avatar'
										width={40}
										height={40}
										className='rounded-full mr-3'
									/>
									<div>
										<div className='font-medium'>Jana Svobodová</div>
										<div className='text-xs text-gray-500'>
											CEO, DataInsight
										</div>
									</div>
								</div>
								<div className='flex items-center gap-2 mb-2'>
									<span className='text-2xl'>📈</span>
									<span className='text-lg font-bold text-green-600'>
										€2.4M
									</span>
									<span className='text-sm text-gray-600'>ročních úspor</span>
								</div>
								<div className='w-full bg-gray-200 rounded-full h-2'>
									<div
										className='bg-green-500 h-2 rounded-full progress-ring'
										style={{ '--progress': '94' } as React.CSSProperties}
									></div>
								</div>
								<p className='text-xs text-gray-500 mt-1'>
									94% přesnost predikce
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className='grid md:grid-cols-12 gap-8 mb-24'>
					<div className='md:col-span-7 order-1'>
						<div className='relative'>
							<div className='relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-green-50 to-emerald-100 p-2'>
								<div className='rounded-xl overflow-hidden'>
									<Image
										src='/projects/automation_factory.webp'
										alt='Automatizovaná výroba'
										width={700}
										height={500}
										className='object-cover w-full h-full'
									/>
								</div>
							</div>
							<div className='absolute -top-6 -left-6 bg-white p-4 rounded-2xl shadow-lg floating-slow max-w-[260px]'>
								<div className='flex items-center mb-2'>
									<Image
										src='/clients/manufacturing-avatar.webp'
										alt='Klient avatar'
										width={40}
										height={40}
										className='rounded-full mr-3'
									/>
									<div>
										<div className='font-medium'>Petr Dvořák</div>
										<div className='text-xs text-gray-500'>COO, MechTech</div>
									</div>
								</div>
								<p className='text-sm text-gray-600 italic'>
									&ldquo;Automatizace našich výrobních procesů s WebForte AI
									vedla k výraznému zlepšení efektivity a kvality. Můžeme nyní
									lépe plánovat a reagovat na změny.&rdquo;
								</p>
							</div>
						</div>
					</div>

					<div className='md:col-span-5 order-2 flex items-center'>
						<div className='space-y-6'>
							<div className='bg-accent text-primary text-xs px-3 py-1 rounded-full inline-block'>
								Průmyslová automatizace
							</div>
							<h3 className='text-2xl md:text-3xl font-bold'>Smart Factory</h3>
							<p className='text-gray-600'>
								Vyvinuli jsme komplexní řešení pro automatizaci výrobních
								procesů ve strojírenské firmě. Integrace IoT senzorů, strojového
								vidění a prediktivní údržby výrazně zvýšila efektivitu celého
								provozu.
							</p>
							<ul className='space-y-2 text-gray-600'>
								<li className='flex items-center'>
									<svg
										className='h-5 w-5 mr-2 text-primary'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M5 13l4 4L19 7'
										/>
									</svg>
									Snížení provozních nákladů o 35%
								</li>
								<li className='flex items-center'>
									<svg
										className='h-5 w-5 mr-2 text-primary'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M5 13l4 4L19 7'
										/>
									</svg>
									Zvýšení produktivity o 42%
								</li>
								<li className='flex items-center'>
									<svg
										className='h-5 w-5 mr-2 text-primary'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M5 13l4 4L19 7'
										/>
									</svg>
									Minimalizace prostojů o 67%
								</li>
							</ul>
							<Link
								href='/automatizace'
								className='group inline-flex items-center text-primary font-medium'
							>
								Prohlédnout celou případovou studii
								<svg
									className='ml-2 w-4 h-4 transition-transform group-hover:translate-x-1'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
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

				<div className='grid md:grid-cols-12 gap-8'>
					<div className='md:col-span-5 order-2 md:order-1 flex items-center'>
						<div className='space-y-6'>
							<div className='bg-accent text-primary text-xs px-3 py-1 rounded-full inline-block'>
								Zákaznická podpora
							</div>
							<h3 className='text-2xl md:text-3xl font-bold'>AI Asistent</h3>
							<p className='text-gray-600'>
								Pro velkou bankovní instituci jsme vyvinuli pokročilý AI
								chatbot, který zvládá komplexní dotazy klientů, zpracovává
								dokumenty a poskytuje personalizované finanční poradenství 24/7.
							</p>
							<ul className='space-y-2 text-gray-600'>
								<li className='flex items-center'>
									<svg
										className='h-5 w-5 mr-2 text-primary'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M5 13l4 4L19 7'
										/>
									</svg>
									78% dotazů vyřešeno bez lidského zásahu
								</li>
								<li className='flex items-center'>
									<svg
										className='h-5 w-5 mr-2 text-primary'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M5 13l4 4L19 7'
										/>
									</svg>
									Snížení čekací doby o 92%
								</li>
								<li className='flex items-center'>
									<svg
										className='h-5 w-5 mr-2 text-primary'
										fill='none'
										viewBox='0 0 24 24'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth='2'
											d='M5 13l4 4L19 7'
										/>
									</svg>
									Zvýšení zákaznické spokojenosti o 24%
								</li>
							</ul>
							<Link
								href='/ai-reseni'
								className='group inline-flex items-center text-primary font-medium'
							>
								Prohlédnout celou případovou studii
								<svg
									className='ml-2 w-4 h-4 transition-transform group-hover:translate-x-1'
									viewBox='0 0 24 24'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
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

					<div className='md:col-span-7 order-1 md:order-2'>
						<div className='relative'>
							<div className='relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-50 to-violet-100 p-2'>
								<div className='rounded-xl overflow-hidden'>
									<Image
										src='/projects/chatbot_support.webp'
										alt='AI Chatbot'
										width={700}
										height={500}
										className='object-cover w-full h-full'
									/>
								</div>
							</div>
							<div className='absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg floating-slower max-w-[260px]'>
								<div className='flex items-center mb-2'>
									<Image
										src='/clients/finance-avatar.webp'
										alt='Klient avatar'
										width={40}
										height={40}
										className='rounded-full mr-3'
									/>
									<div>
										<div className='font-medium'>Martina Svobodová</div>
										<div className='text-xs text-gray-500'>CIO, FinBank</div>
									</div>
								</div>
								<p className='text-sm text-gray-600 italic'>
									&ldquo;AI Asistent zásadně změnil způsob, jakým komunikujeme s
									našimi klienty. Dostupnost 24/7 a schopnost řešit komplexní
									požadavky překonala naše očekávání.&rdquo;
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className='mt-24 text-center'>
					<Link
						href='/pripadove-studie'
						className='btn-primary btn-smart-feedback inline-flex items-center gap-2 group whitespace-nowrap'
					>
						Prohlédnout další projekty
						<svg
							className='w-5 h-5 transition-transform group-hover:translate-x-1 flex-shrink-0'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
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
		</section>
	);
}
