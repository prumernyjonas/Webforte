'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackgroundBlobs from '@/components/BackgroundBlobs';
import Section from '@/components/Section';

// This would normally be exported from the page, but since we're using 'use client',
// we'll handle metadata differently or move this to a layout
// export const metadata: Metadata = {
// 	title: 'Bezplatná konzultace | WebForte AI',
// 	description: 'Získejte 1 hodinu bezplatné konzultace s našimi AI experty. Promluvme si o vašich potřebách a možnostech automatizace.',
// };

interface FormData {
	// Step 1: Basic Info
	firstName: string;
	lastName: string;
	email: string;
	phone: string;
	company: string;
	position: string;

	// Step 2: Business Info
	industry: string;
	companySize: string;
	currentChallenges: string[];
	budget: string;

	// Step 3: Project Details
	projectType: string[];
	timeline: string;
	goals: string;
	additionalInfo: string;

	// Step 4: Scheduling
	preferredDate: string;
	preferredTime: string;
	timezone: string;
}

const initialFormData: FormData = {
	firstName: '',
	lastName: '',
	email: '',
	phone: '',
	company: '',
	position: '',
	industry: '',
	companySize: '',
	currentChallenges: [],
	budget: '',
	projectType: [],
	timeline: '',
	goals: '',
	additionalInfo: '',
	preferredDate: '',
	preferredTime: '',
	timezone: 'Europe/Prague',
};

export default function Konzultace() {
	const [currentStep, setCurrentStep] = useState(1);
	const [formData, setFormData] = useState<FormData>(initialFormData);
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const totalSteps = 4;

	const updateFormData = (field: keyof FormData, value: string | string[]) => {
		setFormData((prev) => ({ ...prev, [field]: value }));
	};

	const handleArrayToggle = (field: keyof FormData, value: string) => {
		const currentArray = formData[field] as string[];
		const newArray = currentArray.includes(value)
			? currentArray.filter((item) => item !== value)
			: [...currentArray, value];
		updateFormData(field, newArray);
	};

	const nextStep = () => {
		if (currentStep < totalSteps) {
			setCurrentStep(currentStep + 1);
		}
	};

	const prevStep = () => {
		if (currentStep > 1) {
			setCurrentStep(currentStep - 1);
		}
	};

	const handleSubmit = async () => {
		setIsSubmitting(true);

		// Simulate API call - replace with actual submission logic
		try {
			await new Promise((resolve) => setTimeout(resolve, 2000));
			console.log('Form submitted:', formData);
			setIsSubmitted(true);
		} catch (error) {
			console.error('Submission error:', error);
		} finally {
			setIsSubmitting(false);
		}
	};

	const isStepValid = () => {
		switch (currentStep) {
			case 1:
				return (
					formData.firstName &&
					formData.lastName &&
					formData.email &&
					formData.company
				);
			case 2:
				return (
					formData.industry &&
					formData.companySize &&
					formData.currentChallenges.length > 0
				);
			case 3:
				return (
					formData.projectType.length > 0 && formData.timeline && formData.goals
				);
			case 4:
				return formData.preferredDate && formData.preferredTime;
			default:
				return false;
		}
	};

	if (isSubmitted) {
		return (
			<div className='min-h-screen bg-background relative'>
				<BackgroundBlobs />
				<Header />
				<main>
					<Section className='pt-32 pb-16'>
						<div className='container mx-auto px-4'>
							<div className='max-w-2xl mx-auto text-center'>
								<div className='w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6'>
									<svg
										className='w-10 h-10 text-white'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M5 13l4 4L19 7'
										/>
									</svg>
								</div>
								<h1 className='text-4xl font-bold text-foreground mb-6'>
									Děkujeme za váš zájem!
								</h1>
								<p className='text-xl text-muted-foreground mb-8'>
									Vaše žádost o bezplatnou konzultaci byla úspěšně odeslána. Náš
									tým vás bude kontaktovat do 24 hodin pro potvrzení termínu.
								</p>
								<div className='bg-card p-6 rounded-lg border border-border mb-8'>
									<h3 className='text-lg font-semibold mb-4'>
										Co bude následovat:
									</h3>
									<div className='space-y-3 text-left'>
										<div className='flex items-center'>
											<div className='w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3'>
												<span className='text-white text-sm'>1</span>
											</div>
											<span>Potvrzení termínu e-mailem do 24 hodin</span>
										</div>
										<div className='flex items-center'>
											<div className='w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3'>
												<span className='text-white text-sm'>2</span>
											</div>
											<span>Příprava personalizované prezentace</span>
										</div>
										<div className='flex items-center'>
											<div className='w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3'>
												<span className='text-white text-sm'>3</span>
											</div>
											<span>60minutová konzultace s našimi experty</span>
										</div>
									</div>
								</div>
								<button
									onClick={() => (window.location.href = '/')}
									className='bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors'
								>
									Zpět na hlavní stránku
								</button>
							</div>
						</div>
					</Section>
				</main>
				<Footer />
			</div>
		);
	}

	return (
		<div className='min-h-screen bg-background relative'>
			<BackgroundBlobs />
			<Header />

			<main>
				{/* Hero Section */}
				<Section className='pt-32 pb-8'>
					<div className='container mx-auto px-4'>
						<div className='text-center max-w-4xl mx-auto mb-12'>
							<div className='rotate-badge inline-block px-4 py-2 bg-accent text-primary rounded-full mb-4 font-medium'>
								Bezplatná konzultace
							</div>
							<h1 className='text-4xl md:text-6xl font-bold text-foreground mb-6'>
								Získejte <span className='text-primary'>1 hodinu</span> zdarma
							</h1>
							<p className='text-xl text-muted-foreground mb-8'>
								Promluvme si o vašich potřebách a ukažme vám, jak AI může
								transformovat vaše podnikání
							</p>
						</div>

						{/* Progress Bar */}
						<div className='max-w-2xl mx-auto mb-8'>
							<div className='flex items-end justify-between'>
								{[
									{ number: 1, label: 'Základní údaje' },
									{ number: 2, label: 'O firmě' },
									{ number: 3, label: 'Projekt' },
									{ number: 4, label: 'Termín' },
								].map((step, index) => (
									<div key={step.number} className='flex items-center'>
										<div className='flex flex-col items-center'>
											<div
												className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 mb-2 ${
													step.number <= currentStep
														? 'bg-primary text-white shadow-lg shadow-primary/25'
														: 'bg-muted text-muted-foreground border-2 border-muted'
												} ${
													step.number === currentStep
														? 'ring-4 ring-primary/20 scale-110'
														: ''
												}`}
											>
												{step.number}
											</div>
											<span
												className={`text-sm text-center ${
													currentStep === step.number
														? 'text-primary font-medium'
														: 'text-muted-foreground'
												}`}
											>
												{step.label}
											</span>
										</div>
										{index < 3 && (
											<div
												className={`w-16 h-1 mx-2 mb-6 transition-all duration-300 ${
													step.number < currentStep ? 'bg-primary' : 'bg-muted'
												}`}
											/>
										)}
									</div>
								))}
							</div>
						</div>
					</div>
				</Section>

				{/* Form Section */}
				<Section className='pb-16'>
					<div className='container mx-auto px-4'>
						<div className='max-w-2xl mx-auto'>
							<div className='bg-card p-8 rounded-lg border border-border'>
								{/* Step 1: Basic Information */}
								{currentStep === 1 && (
									<div>
										<h2 className='text-2xl font-bold mb-6'>
											Základní informace
										</h2>
										<div className='space-y-4'>
											<div className='grid grid-cols-2 gap-4'>
												<div>
													<label className='block text-sm font-medium mb-2'>
														Jméno *
													</label>
													<input
														type='text'
														value={formData.firstName}
														onChange={(e) =>
															updateFormData('firstName', e.target.value)
														}
														className='w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
														placeholder='Vaše jméno'
													/>
												</div>
												<div>
													<label className='block text-sm font-medium mb-2'>
														Příjmení *
													</label>
													<input
														type='text'
														value={formData.lastName}
														onChange={(e) =>
															updateFormData('lastName', e.target.value)
														}
														className='w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
														placeholder='Vaše příjmení'
													/>
												</div>
											</div>
											<div>
												<label className='block text-sm font-medium mb-2'>
													E-mail *
												</label>
												<input
													type='email'
													value={formData.email}
													onChange={(e) =>
														updateFormData('email', e.target.value)
													}
													className='w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
													placeholder='vas@email.cz'
												/>
											</div>
											<div>
												<label className='block text-sm font-medium mb-2'>
													Telefon
												</label>
												<input
													type='tel'
													value={formData.phone}
													onChange={(e) =>
														updateFormData('phone', e.target.value)
													}
													className='w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
													placeholder='+420 123 456 789'
												/>
											</div>
											<div>
												<label className='block text-sm font-medium mb-2'>
													Společnost *
												</label>
												<input
													type='text'
													value={formData.company}
													onChange={(e) =>
														updateFormData('company', e.target.value)
													}
													className='w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
													placeholder='Název vaší společnosti'
												/>
											</div>
											<div>
												<label className='block text-sm font-medium mb-2'>
													Pozice
												</label>
												<input
													type='text'
													value={formData.position}
													onChange={(e) =>
														updateFormData('position', e.target.value)
													}
													className='w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
													placeholder='Vaše pozice ve firmě'
												/>
											</div>
										</div>
									</div>
								)}

								{/* Step 2: Business Information */}
								{currentStep === 2 && (
									<div>
										<h2 className='text-2xl font-bold mb-6'>
											Informace o firmě
										</h2>
										<div className='space-y-4'>
											<div>
												<label className='block text-sm font-medium mb-2'>
													Odvětví *
												</label>
												<select
													value={formData.industry}
													onChange={(e) =>
														updateFormData('industry', e.target.value)
													}
													className='w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
												>
													<option value=''>Vyberte odvětví</option>
													<option value='ecommerce'>E-commerce</option>
													<option value='manufacturing'>Výroba</option>
													<option value='finance'>Finance</option>
													<option value='healthcare'>Zdravotnictví</option>
													<option value='logistics'>Logistika</option>
													<option value='education'>Vzdělávání</option>
													<option value='technology'>Technologie</option>
													<option value='other'>Jiné</option>
												</select>
											</div>
											<div>
												<label className='block text-sm font-medium mb-2'>
													Velikost společnosti *
												</label>
												<select
													value={formData.companySize}
													onChange={(e) =>
														updateFormData('companySize', e.target.value)
													}
													className='w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
												>
													<option value=''>Vyberte velikost</option>
													<option value='1-10'>1-10 zaměstnanců</option>
													<option value='11-50'>11-50 zaměstnanců</option>
													<option value='51-200'>51-200 zaměstnanců</option>
													<option value='201-1000'>201-1000 zaměstnanců</option>
													<option value='1000+'>1000+ zaměstnanců</option>
												</select>
											</div>
											<div>
												<label className='block text-sm font-medium mb-2'>
													Aktuální výzvy *
												</label>
												<div className='grid grid-cols-2 gap-3'>
													{[
														'Manuální procesy',
														'Vysoké náklady',
														'Chyby v datech',
														'Pomalé zpracování',
														'Nedostatek času',
														'Špatná komunikace',
														'Neefektivní workflow',
														'Jiné',
													].map((challenge) => (
														<label
															key={challenge}
															className='flex items-center'
														>
															<input
																type='checkbox'
																checked={formData.currentChallenges.includes(
																	challenge
																)}
																onChange={() =>
																	handleArrayToggle(
																		'currentChallenges',
																		challenge
																	)
																}
																className='mr-2'
															/>
															<span className='text-sm'>{challenge}</span>
														</label>
													))}
												</div>
											</div>
											<div>
												<label className='block text-sm font-medium mb-2'>
													Rozpočet pro projekt
												</label>
												<select
													value={formData.budget}
													onChange={(e) =>
														updateFormData('budget', e.target.value)
													}
													className='w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
												>
													<option value=''>Vyberte rozpočet</option>
													<option value='under-50k'>Pod 50 000 Kč</option>
													<option value='50k-200k'>50 000 - 200 000 Kč</option>
													<option value='200k-500k'>
														200 000 - 500 000 Kč
													</option>
													<option value='500k-1m'>
														500 000 - 1 000 000 Kč
													</option>
													<option value='over-1m'>Nad 1 000 000 Kč</option>
													<option value='not-sure'>Nejsem si jistý</option>
												</select>
											</div>
										</div>
									</div>
								)}

								{/* Step 3: Project Details */}
								{currentStep === 3 && (
									<div>
										<h2 className='text-2xl font-bold mb-6'>
											Detaily projektu
										</h2>
										<div className='space-y-4'>
											<div>
												<label className='block text-sm font-medium mb-2'>
													Typ projektu *
												</label>
												<div className='grid grid-cols-2 gap-3'>
													{[
														'AI Chatbot',
														'Automatizace procesů',
														'Analýza dat',
														'Prediktivní modely',
														'OCR/Dokumenty',
														'Integrace systémů',
														'Workflow automatizace',
														'Jiné',
													].map((type) => (
														<label key={type} className='flex items-center'>
															<input
																type='checkbox'
																checked={formData.projectType.includes(type)}
																onChange={() =>
																	handleArrayToggle('projectType', type)
																}
																className='mr-2'
															/>
															<span className='text-sm'>{type}</span>
														</label>
													))}
												</div>
											</div>
											<div>
												<label className='block text-sm font-medium mb-2'>
													Časový rámec *
												</label>
												<select
													value={formData.timeline}
													onChange={(e) =>
														updateFormData('timeline', e.target.value)
													}
													className='w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
												>
													<option value=''>Vyberte časový rámec</option>
													<option value='asap'>Co nejdříve</option>
													<option value='1-3months'>1-3 měsíce</option>
													<option value='3-6months'>3-6 měsíců</option>
													<option value='6-12months'>6-12 měsíců</option>
													<option value='over-year'>Nad rok</option>
													<option value='exploring'>
														Zatím jen zkoumám možnosti
													</option>
												</select>
											</div>
											<div>
												<label className='block text-sm font-medium mb-2'>
													Hlavní cíle projektu *
												</label>
												<textarea
													value={formData.goals}
													onChange={(e) =>
														updateFormData('goals', e.target.value)
													}
													rows={4}
													className='w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
													placeholder='Popište, čeho chcete dosáhnout...'
												/>
											</div>
											<div>
												<label className='block text-sm font-medium mb-2'>
													Dodatečné informace
												</label>
												<textarea
													value={formData.additionalInfo}
													onChange={(e) =>
														updateFormData('additionalInfo', e.target.value)
													}
													rows={3}
													className='w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
													placeholder='Cokoliv dalšího, co bychom měli vědět...'
												/>
											</div>
										</div>
									</div>
								)}

								{/* Step 4: Scheduling */}
								{currentStep === 4 && (
									<div>
										<h2 className='text-2xl font-bold mb-6'>
											Naplánování konzultace
										</h2>
										<div className='space-y-4'>
											<div>
												<label className='block text-sm font-medium mb-2'>
													Preferovaný datum *
												</label>
												<input
													type='date'
													value={formData.preferredDate}
													onChange={(e) =>
														updateFormData('preferredDate', e.target.value)
													}
													min={new Date().toISOString().split('T')[0]}
													className='w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
												/>
											</div>
											<div>
												<label className='block text-sm font-medium mb-2'>
													Preferovaný čas *
												</label>
												<select
													value={formData.preferredTime}
													onChange={(e) =>
														updateFormData('preferredTime', e.target.value)
													}
													className='w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
												>
													<option value=''>Vyberte čas</option>
													<option value='09:00'>09:00</option>
													<option value='10:00'>10:00</option>
													<option value='11:00'>11:00</option>
													<option value='13:00'>13:00</option>
													<option value='14:00'>14:00</option>
													<option value='15:00'>15:00</option>
													<option value='16:00'>16:00</option>
												</select>
											</div>
											<div>
												<label className='block text-sm font-medium mb-2'>
													Časové pásmo
												</label>
												<select
													value={formData.timezone}
													onChange={(e) =>
														updateFormData('timezone', e.target.value)
													}
													className='w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent'
												>
													<option value='Europe/Prague'>
														Praha (CET/CEST)
													</option>
													<option value='Europe/London'>
														Londýn (GMT/BST)
													</option>
													<option value='Europe/Berlin'>
														Berlín (CET/CEST)
													</option>
													<option value='America/New_York'>
														New York (EST/EDT)
													</option>
												</select>
											</div>
											<div className='bg-muted/50 p-4 rounded-lg'>
												<h3 className='font-semibold mb-2'>
													Co můžete očekávat:
												</h3>
												<ul className='text-sm space-y-1 text-muted-foreground'>
													<li>• 60minutová konzultace s našimi AI experty</li>
													<li>• Analýza vašich současných procesů</li>
													<li>• Návrh možných řešení a jejich přínosů</li>
													<li>• Odhad nákladů a časového rámce</li>
													<li>• Odpovědi na všechny vaše otázky</li>
												</ul>
											</div>
										</div>
									</div>
								)}

								{/* Navigation Buttons */}
								<div className='flex justify-between mt-8'>
									<button
										onClick={prevStep}
										disabled={currentStep === 1}
										className='px-6 py-3 border border-border rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-muted transition-colors'
									>
										Zpět
									</button>

									{currentStep < totalSteps ? (
										<button
											onClick={nextStep}
											disabled={!isStepValid()}
											className='px-6 py-3 bg-primary text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors'
										>
											Pokračovat
										</button>
									) : (
										<button
											onClick={handleSubmit}
											disabled={!isStepValid() || isSubmitting}
											className='px-6 py-3 bg-primary text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-primary/90 transition-colors'
										>
											{isSubmitting ? 'Odesílám...' : 'Odeslat žádost'}
										</button>
									)}
								</div>
							</div>
						</div>
					</div>
				</Section>

				{/* Benefits Section */}
				<Section className='py-16 bg-muted/50'>
					<div className='container mx-auto px-4'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl md:text-4xl font-bold mb-4'>
								Proč si <span className='text-primary'>rezervovat</span>{' '}
								konzultaci?
							</h2>
						</div>

						<div className='grid md:grid-cols-3 gap-8'>
							{[
								{
									icon: '🎯',
									title: 'Personalizovaný přístup',
									description:
										'Každá konzultace je přizpůsobena vašim specifickým potřebám a cílům',
								},
								{
									icon: '💡',
									title: 'Expertní znalosti',
									description:
										'Naši specialisté mají roky zkušeností s AI implementacemi',
								},
								{
									icon: '📊',
									title: 'Konkrétní výsledky',
									description:
										'Ukážeme vám reálné příklady a možné ROI pro vaše podnikání',
								},
							].map((benefit, index) => (
								<div
									key={index}
									className='bg-card p-6 rounded-lg border border-border text-center'
								>
									<div className='text-4xl mb-4'>{benefit.icon}</div>
									<h3 className='text-xl font-semibold mb-3'>
										{benefit.title}
									</h3>
									<p className='text-muted-foreground'>{benefit.description}</p>
								</div>
							))}
						</div>
					</div>
				</Section>
			</main>

			<Footer />
		</div>
	);
}
