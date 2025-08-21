import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackgroundBlobs from '@/components/BackgroundBlobs';
import Section from '@/components/Section';

export const metadata: Metadata = {
	title: 'Případové studie | WebForte AI',
	description:
		'Prohlédněte si naše úspěšné projekty a případové studie implementace AI řešení a automatizace procesů.',
};

export default function PripadoveStudie() {
	return (
		<div className='min-h-screen bg-background relative'>
			<BackgroundBlobs />
			<Header />

			<main>
				{/* Hero Section */}
				<Section className='pt-32 pb-16'>
					<div className='container mx-auto px-4'>
						<div className='text-center max-w-4xl mx-auto'>
							<div className='rotate-badge inline-block px-4 py-2 bg-accent text-primary rounded-full mb-4 font-medium'>
								Naše práce
							</div>
							<h1 className='text-4xl md:text-6xl font-bold text-foreground mb-6'>
								Případové <span className='text-primary'>studie</span>
							</h1>
							<p className='text-xl text-muted-foreground mb-8'>
								Objevte, jak jsme pomohli našim klientům transformovat jejich
								podnikání pomocí AI a automatizace
							</p>
							<div className='flex flex-col sm:flex-row gap-4 justify-center'>
								<button className='bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors'>
									Bezplatná konzultace
								</button>
								<button className='border border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors'>
									Stáhnout portfolio
								</button>
							</div>
						</div>
					</div>
				</Section>

				{/* Featured Case Studies */}
				<Section className='py-16'>
					<div className='container mx-auto px-4'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl md:text-4xl font-bold mb-4'>
								Úspěšné <span className='text-primary'>projekty</span>
							</h2>
							<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
								Reálné výsledky našich AI řešení
							</p>
						</div>

						<div className='grid md:grid-cols-2 gap-8 mb-16'>
							{/* Case Study 1 */}
							<div className='bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow'>
								<div className='flex items-center mb-6'>
									<div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4'>
										<svg
											className='w-6 h-6 text-primary'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
											/>
										</svg>
									</div>
									<div>
										<h3 className='text-xl font-semibold text-foreground'>
											E-commerce automatizace
										</h3>
										<p className='text-primary'>Online retailer</p>
									</div>
								</div>
								<p className='text-muted-foreground mb-6'>
									Implementace AI chatbota a automatizace skladových procesů pro
									velký e-commerce s 50 000+ produkty.
								</p>
								<div className='grid grid-cols-2 gap-4 mb-6'>
									<div className='text-center'>
										<div className='text-2xl font-bold text-green-500'>85%</div>
										<div className='text-sm text-muted-foreground'>
											Snížení dotazů
										</div>
									</div>
									<div className='text-center'>
										<div className='text-2xl font-bold text-green-500'>60%</div>
										<div className='text-sm text-muted-foreground'>
											Rychlejší zpracování
										</div>
									</div>
								</div>
								<div className='flex flex-wrap gap-2'>
									<span className='px-3 py-1 bg-primary/10 text-primary rounded-full text-sm'>
										AI Chatbot
									</span>
									<span className='px-3 py-1 bg-primary/10 text-primary rounded-full text-sm'>
										RPA
									</span>
									<span className='px-3 py-1 bg-primary/10 text-primary rounded-full text-sm'>
										Integrace API
									</span>
								</div>
							</div>

							{/* Case Study 2 */}
							<div className='bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow'>
								<div className='flex items-center mb-6'>
									<div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4'>
										<svg
											className='w-6 h-6 text-primary'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
											/>
										</svg>
									</div>
									<div>
										<h3 className='text-xl font-semibold text-foreground'>
											Prediktivní analýza
										</h3>
										<p className='text-primary'>Výrobní společnost</p>
									</div>
								</div>
								<p className='text-muted-foreground mb-6'>
									ML model pro predikci poruch strojů a optimalizaci údržby ve
									výrobním závodě s 200+ stroji.
								</p>
								<div className='grid grid-cols-2 gap-4 mb-6'>
									<div className='text-center'>
										<div className='text-2xl font-bold text-green-500'>40%</div>
										<div className='text-sm text-muted-foreground'>
											Méně poruch
										</div>
									</div>
									<div className='text-center'>
										<div className='text-2xl font-bold text-green-500'>€2M</div>
										<div className='text-sm text-muted-foreground'>
											Úspora ročně
										</div>
									</div>
								</div>
								<div className='flex flex-wrap gap-2'>
									<span className='px-3 py-1 bg-primary/10 text-primary rounded-full text-sm'>
										Machine Learning
									</span>
									<span className='px-3 py-1 bg-primary/10 text-primary rounded-full text-sm'>
										IoT Sensory
									</span>
									<span className='px-3 py-1 bg-primary/10 text-primary rounded-full text-sm'>
										Prediktivní údržba
									</span>
								</div>
							</div>
						</div>

						<div className='grid md:grid-cols-2 gap-8'>
							{/* Case Study 3 */}
							<div className='bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow'>
								<div className='flex items-center mb-6'>
									<div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4'>
										<svg
											className='w-6 h-6 text-primary'
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
									<div>
										<h3 className='text-xl font-semibold text-foreground'>
											Dokumentová inteligence
										</h3>
										<p className='text-primary'>Právnická kancelář</p>
									</div>
								</div>
								<p className='text-muted-foreground mb-6'>
									AI systém pro automatické zpracování a analýzu právních
									dokumentů s OCR a NLP technologiemi.
								</p>
								<div className='grid grid-cols-2 gap-4 mb-6'>
									<div className='text-center'>
										<div className='text-2xl font-bold text-green-500'>90%</div>
										<div className='text-sm text-muted-foreground'>
											Rychlejší zpracování
										</div>
									</div>
									<div className='text-center'>
										<div className='text-2xl font-bold text-green-500'>95%</div>
										<div className='text-sm text-muted-foreground'>
											Přesnost extrakce
										</div>
									</div>
								</div>
								<div className='flex flex-wrap gap-2'>
									<span className='px-3 py-1 bg-primary/10 text-primary rounded-full text-sm'>
										OCR
									</span>
									<span className='px-3 py-1 bg-primary/10 text-primary rounded-full text-sm'>
										NLP
									</span>
									<span className='px-3 py-1 bg-primary/10 text-primary rounded-full text-sm'>
										Document AI
									</span>
								</div>
							</div>

							{/* Case Study 4 */}
							<div className='bg-card p-8 rounded-lg border border-border hover:shadow-lg transition-shadow'>
								<div className='flex items-center mb-6'>
									<div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4'>
										<svg
											className='w-6 h-6 text-primary'
											fill='none'
											stroke='currentColor'
											viewBox='0 0 24 24'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
											/>
										</svg>
									</div>
									<div>
										<h3 className='text-xl font-semibold text-foreground'>
											HR automatizace
										</h3>
										<p className='text-primary'>Technologická firma</p>
									</div>
								</div>
								<p className='text-muted-foreground mb-6'>
									Komplexní automatizace HR procesů včetně screeningu kandidátů
									a onboardingu nových zaměstnanců.
								</p>
								<div className='grid grid-cols-2 gap-4 mb-6'>
									<div className='text-center'>
										<div className='text-2xl font-bold text-green-500'>70%</div>
										<div className='text-sm text-muted-foreground'>
											Rychlejší nábor
										</div>
									</div>
									<div className='text-center'>
										<div className='text-2xl font-bold text-green-500'>50%</div>
										<div className='text-sm text-muted-foreground'>
											Snížení nákladů
										</div>
									</div>
								</div>
								<div className='flex flex-wrap gap-2'>
									<span className='px-3 py-1 bg-primary/10 text-primary rounded-full text-sm'>
										CV Screening
									</span>
									<span className='px-3 py-1 bg-primary/10 text-primary rounded-full text-sm'>
										Workflow
									</span>
									<span className='px-3 py-1 bg-primary/10 text-primary rounded-full text-sm'>
										Integration
									</span>
								</div>
							</div>
						</div>
					</div>
				</Section>

				{/* Industries Section */}
				<Section className='py-16 bg-muted/50'>
					<div className='container mx-auto px-4'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl md:text-4xl font-bold mb-4'>
								Odvětví, ve kterých{' '}
								<span className='text-primary'>působíme</span>
							</h2>
							<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
								Naše zkušenosti napříč různými sektory
							</p>
						</div>

						<div className='grid md:grid-cols-3 lg:grid-cols-6 gap-6'>
							{[
								{ name: 'E-commerce', icon: '🛒', projects: '15+' },
								{ name: 'Výroba', icon: '🏭', projects: '12+' },
								{ name: 'Finance', icon: '💰', projects: '8+' },
								{ name: 'Zdravotnictví', icon: '🏥', projects: '6+' },
								{ name: 'Logistika', icon: '🚚', projects: '10+' },
								{ name: 'Vzdělávání', icon: '🎓', projects: '5+' },
							].map((industry, index) => (
								<div
									key={index}
									className='bg-card p-6 rounded-lg border border-border text-center hover:shadow-lg transition-all duration-300'
								>
									<div className='text-4xl mb-3'>{industry.icon}</div>
									<h3 className='text-foreground font-semibold mb-2'>
										{industry.name}
									</h3>
									<p className='text-primary text-sm'>
										{industry.projects} projektů
									</p>
								</div>
							))}
						</div>
					</div>
				</Section>

				{/* Results Section */}
				<Section className='py-16'>
					<div className='container mx-auto px-4'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl md:text-4xl font-bold mb-4'>
								Dosažené <span className='text-primary'>výsledky</span>
							</h2>
							<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
								Měřitelný dopad našich řešení
							</p>
						</div>

						<div className='grid md:grid-cols-4 gap-8'>
							{[
								{
									metric: '€10M+',
									label: 'Úspory pro klienty',
									icon: '💰',
									color: 'text-green-500',
								},
								{
									metric: '50+',
									label: 'Úspěšných projektů',
									icon: '🎯',
									color: 'text-blue-500',
								},
								{
									metric: '98%',
									label: 'Spokojenost klientů',
									icon: '😊',
									color: 'text-purple-500',
								},
								{
									metric: '24/7',
									label: 'Podpora systémů',
									icon: '🔧',
									color: 'text-orange-500',
								},
							].map((stat, index) => (
								<div key={index} className='text-center'>
									<div className='text-4xl mb-4'>{stat.icon}</div>
									<div className={`text-4xl font-bold mb-2 ${stat.color}`}>
										{stat.metric}
									</div>
									<div className='text-muted-foreground'>{stat.label}</div>
								</div>
							))}
						</div>
					</div>
				</Section>

				{/* Process Section */}
				<Section className='py-16 bg-muted/50'>
					<div className='container mx-auto px-4'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl md:text-4xl font-bold mb-4'>
								Náš <span className='text-primary'>přístup</span> k projektům
							</h2>
							<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
								Jak zajišťujeme úspěch každého projektu
							</p>
						</div>

						<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
							{[
								{
									step: '1',
									title: 'Analýza potřeb',
									description:
										'Detailní zmapování procesů a identifikace příležitostí pro automatizaci',
								},
								{
									step: '2',
									title: 'Návrh řešení',
									description:
										'Vytvoření optimálního řešení s jasným ROI a implementačním plánem',
								},
								{
									step: '3',
									title: 'Implementace',
									description:
										'Postupné nasazení s minimálním dopadem na běžný provoz',
								},
								{
									step: '4',
									title: 'Optimalizace',
									description:
										'Kontinuální vylepšování a škálování řešení podle potřeb',
								},
							].map((phase, index) => (
								<div key={index} className='text-center'>
									<div className='w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4'>
										{phase.step}
									</div>
									<h3 className='text-xl font-semibold text-foreground mb-3'>
										{phase.title}
									</h3>
									<p className='text-muted-foreground'>{phase.description}</p>
								</div>
							))}
						</div>
					</div>
				</Section>

				{/* CTA Section */}
				<Section className='py-16'>
					<div className='container mx-auto px-4'>
						<div className='text-center'>
							<h2 className='text-3xl md:text-4xl font-bold text-foreground mb-6'>
								Připraveni na váš{' '}
								<span className='text-primary'>úspěšný projekt</span>?
							</h2>
							<p className='text-xl text-muted-foreground mb-8 max-w-2xl mx-auto'>
								Kontaktujte nás a promluvme si o tom, jak můžeme transformovat
								vaše podnikání
							</p>
							<div className='flex flex-col sm:flex-row gap-4 justify-center'>
								<button className='bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors'>
									Bezplatná konzultace
								</button>
								<button className='border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors'>
									Stáhnout portfolio
								</button>
							</div>
						</div>
					</div>
				</Section>
			</main>

			<Footer />
		</div>
	);
}
