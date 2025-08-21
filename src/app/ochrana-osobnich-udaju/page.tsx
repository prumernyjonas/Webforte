import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackgroundBlobs from '@/components/BackgroundBlobs';

export const metadata: Metadata = {
	title: 'Ochrana osobních údajů | WebForte',
	description: 'Zásady ochrany osobních údajů společnosti WebForte podle GDPR.',
};

export default function OchranaOsobnichUdaju() {
	return (
		<div className='min-h-screen bg-background relative'>
			<BackgroundBlobs />
			<Header />
			<main className='min-h-screen bg-white'>
				<div className='container mx-auto px-4 py-16 pt-32'>
					<div className='max-w-4xl mx-auto'>
						<h1 className='text-4xl font-bold text-gray-900 mb-8'>
							Ochrana osobních údajů
						</h1>

						<div className='prose prose-lg max-w-none'>
							<section className='mb-8'>
								<h2 className='text-2xl font-bold text-gray-900 mb-4'>
									1. Základní ustanovení
								</h2>
								<p className='text-gray-700 mb-4'>
									Správcem osobních údajů podle čl. 4 bod 7 nařízení Evropského
									parlamentu a Rady (EU) 2016/679 o ochraně fyzických osob v
									souvislosti se zpracováním osobních údajů a o volném pohybu
									těchto údajů (dále jen: &ldquo;<strong>GDPR</strong>&rdquo;)
									je{' '}
									<strong>
										Miroslav Douda IČ 21416494, Rabasova 3186/25, Ústí nad Labem
										40011
									</strong>{' '}
									zapsán v obchodním rejstříku vedeném u Městského soudu v Ústí
									nad Labem (dále jen: &ldquo;<strong>správce</strong>&rdquo;).
								</p>

								<h3 className='text-xl font-semibold text-gray-900 mb-3'>
									Kontaktní údaje správce jsou:
								</h3>
								<ul className='list-none space-y-2 text-gray-700 mb-4'>
									<li>
										<strong>Jméno:</strong> Miroslav Douda
									</li>
									<li>
										<strong>Adresa:</strong> Rabasova 3186/25, Ústí nad Labem
										40011
									</li>
									<li>
										<strong>IČO:</strong> 21416494
									</li>
									<li>
										<strong>E-mail:</strong>{' '}
										<a
											href='mailto:info@webforte.cz'
											className='text-blue-600 hover:text-blue-800'
										>
											info@webforte.cz
										</a>
									</li>
									<li>
										<strong>Telefon:</strong>{' '}
										<a
											href='tel:+420728118967'
											className='text-blue-600 hover:text-blue-800'
										>
											+420 728 118 967
										</a>
									</li>
								</ul>

								<p className='text-gray-700 mb-4'>
									Osobními údaji se rozumí veškeré informace o identifikované
									nebo identifikovatelné fyzické osobě; identifikovatelnou
									fyzickou osobou je fyzická osoba, kterou lze přímo či nepřímo
									identifikovat, zejména odkazem na určitý identifikátor,
									například jméno, identifikační číslo, lokační údaje, síťový
									identifikátor nebo na jeden či více zvláštních prvků fyzické,
									fyziologické, genetické, psychické, ekonomické, kulturní nebo
									společenské identity této fyzické osoby.
								</p>

								<p className='text-gray-700'>
									Správce nejmenoval pověřence pro ochranu osobních údajů.
								</p>
							</section>

							<section className='mb-8'>
								<h2 className='text-2xl font-bold text-gray-900 mb-4'>
									2. Zdroje a kategorie zpracovávaných osobních údajů
								</h2>
								<p className='text-gray-700 mb-4'>
									Správce zpracovává osobní údaje, které jste mu poskytl/a nebo
									osobní údaje, které správce získal na základě plnění Vaší
									objednávky:
								</p>
								<ul className='list-disc list-inside space-y-1 text-gray-700 mb-4'>
									<li>jméno a příjmení</li>
									<li>e-mailová adresa</li>
									<li>telefon</li>
									<li>historie akcí na webu</li>
									<li>IP Adresa</li>
								</ul>
								<p className='text-gray-700'>
									Správce zpracovává Vaše identifikační a kontaktní údaje a
									údaje nezbytné pro plnění smlouvy.
								</p>
							</section>

							<section className='mb-8'>
								<h2 className='text-2xl font-bold text-gray-900 mb-4'>
									3. Zákonný důvod a účel zpracování osobních údajů
								</h2>
								<h3 className='text-xl font-semibold text-gray-900 mb-3'>
									Zákonným důvodem zpracování osobních údajů je
								</h3>
								<ul className='list-disc list-inside space-y-2 text-gray-700 mb-4'>
									<li>
										plnění smlouvy mezi Vámi a správcem podle čl. 6 odst. 1
										písm. b) GDPR,
									</li>
									<li>
										splnění právní povinnosti správce podle čl. 6 odst. 1 písm.
										c) GDPR,
									</li>
									<li>
										oprávněný zájem správce na poskytování přímého marketingu
										(zejména pro zasílání obchodních sdělení a newsletterů)
										podle čl. 6 odst. 1 písm. f) GDPR,
									</li>
									<li>
										Váš souhlas se zpracováním pro účely poskytování přímého
										marketingu (zejména pro zasílání obchodních sdělení a
										newsletterů) podle čl. 6 odst. 1 písm. a) GDPR ve spojení s
										§ 7 odst. 2 zákona č. 480/2004 Sb., o některých službách
										informační společnosti v případě, že nedošlo k objednávce
										zboží nebo služby.
									</li>
								</ul>

								<h3 className='text-xl font-semibold text-gray-900 mb-3'>
									Účelem zpracování osobních údajů je
								</h3>
								<ul className='list-disc list-inside space-y-2 text-gray-700'>
									<li>
										vyřízení Vaší objednávky a výkon práv a povinností
										vyplývajících ze smluvního vztahu mezi Vámi a správcem; při
										objednávce jsou vyžadovány osobní údaje, které jsou nutné
										pro úspěšné vyřízení objednávky (jméno a adresa, kontakt),
										poskytnutí osobních údajů je nutným požadavkem pro uzavření
										a plnění smlouvy, bez poskytnutí osobních údajů není možné
										smlouvu uzavřít či jí ze strany správce plnit,
									</li>
									<li>plnění právních povinností vůči státu,</li>
									<li>
										zasílání obchodních sdělení a činění dalších marketingových
										aktivit.
									</li>
								</ul>
							</section>

							<section className='mb-8'>
								<h2 className='text-2xl font-bold text-gray-900 mb-4'>
									4. Doba uchovávání údajů
								</h2>
								<p className='text-gray-700 mb-4'>
									Správce uchovává osobní údaje
								</p>
								<ul className='list-disc list-inside space-y-2 text-gray-700 mb-4'>
									<li>
										po dobu nezbytnou k výkonu práv a povinností vyplývajících
										ze smluvního vztahu mezi Vámi a správcem a uplatňování
										nároků z těchto smluvních vztahů (po dobu 15 let od ukončení
										smluvního vztahu).
									</li>
									<li>
										po dobu, než je odvolán souhlas se zpracováním osobních
										údajů pro účely marketingu, nejdéle 10 let, jsou-li osobní
										údaje zpracovávány na základě souhlasu.
									</li>
								</ul>
								<p className='text-gray-700'>
									Po uplynutí doby uchovávání osobních údajů správce osobní
									údaje vymaže.
								</p>
							</section>

							<section className='mb-8'>
								<h2 className='text-2xl font-bold text-gray-900 mb-4'>
									5. Příjemci osobních údajů (subdodavatelé správce)
								</h2>
								<p className='text-gray-700 mb-4'>
									Příjemci osobních údajů jsou osoby
								</p>
								<ul className='list-disc list-inside space-y-1 text-gray-700 mb-4'>
									<li>
										podílející se na dodání zboží/služeb/realizaci plateb na
										základě smlouvy,
									</li>
									<li>
										zajišťující služby provozování e-shopu (Shopify) a další
										služby v souvislosti s provozováním e-shopu,
									</li>
									<li>zajišťující marketingové služby.</li>
								</ul>
								<p className='text-gray-700'>
									Správce má v úmyslu předat osobní údaje do třetí země (do země
									mimo EU) nebo mezinárodní organizaci. Příjemci osobních údajů
									ve třetích zemích jsou poskytovatelé mailingových služeb /
									cloudových služeb.
								</p>
							</section>

							<section className='mb-8'>
								<h2 className='text-2xl font-bold text-gray-900 mb-4'>
									6. Zpracovatelé osobních údajů
								</h2>
								<p className='text-gray-700 mb-4'>
									Zpracování osobních údajů je prováděno správcem, osobní údaje
									však pro něj mohou zpracovávat i tito zpracovatelé především
									za účelem zajištění plnění objednávky a online reklamy:
								</p>

								<div className='overflow-x-auto mb-4'>
									<table className='min-w-full border-collapse border border-gray-300'>
										<thead>
											<tr className='bg-gray-50'>
												<th className='border border-gray-300 px-4 py-2 text-left font-semibold'>
													Společnost
												</th>
												<th className='border border-gray-300 px-4 py-2 text-left font-semibold'>
													Země
												</th>
												<th className='border border-gray-300 px-4 py-2 text-left font-semibold'>
													Účel
												</th>
											</tr>
										</thead>
										<tbody>
											<tr>
												<td className='border border-gray-300 px-4 py-2'>
													Facebook
												</td>
												<td className='border border-gray-300 px-4 py-2'>
													USA
												</td>
												<td className='border border-gray-300 px-4 py-2'>
													Online marketing, sdílení obsahu
												</td>
											</tr>
											<tr className='bg-gray-50'>
												<td className='border border-gray-300 px-4 py-2'>
													Google
												</td>
												<td className='border border-gray-300 px-4 py-2'>
													USA
												</td>
												<td className='border border-gray-300 px-4 py-2'>
													Analytické účely, online marketing
												</td>
											</tr>
											<tr>
												<td className='border border-gray-300 px-4 py-2'>
													Seznam
												</td>
												<td className='border border-gray-300 px-4 py-2'>ČR</td>
												<td className='border border-gray-300 px-4 py-2'>
													Online reklama
												</td>
											</tr>
											<tr className='bg-gray-50'>
												<td className='border border-gray-300 px-4 py-2'>
													Instagram
												</td>
												<td className='border border-gray-300 px-4 py-2'>
													USA
												</td>
												<td className='border border-gray-300 px-4 py-2'>
													Online reklama, sdílení obsahu
												</td>
											</tr>
										</tbody>
									</table>
								</div>

								<p className='text-gray-700'>
									případně další poskytovatel zpracovatelských softwarům služeb
									a aplikací, které však v současné době správce nevyužívá.
								</p>
							</section>

							<section className='mb-8'>
								<h2 className='text-2xl font-bold text-gray-900 mb-4'>
									7. Vaše práva
								</h2>
								<p className='text-gray-700 mb-4'>
									Za podmínek stanovených v GDPR máte
								</p>
								<ul className='list-disc list-inside space-y-2 text-gray-700 mb-4'>
									<li>
										právo na přístup ke svým osobním údajům dle čl. 15 GDPR,
									</li>
									<li>
										právo opravu osobních údajů dle čl. 16 GDPR, popřípadě
										omezení zpracování dle čl. 18 GDPR,
									</li>
									<li>právo na vymazání osobních údajů dle čl. 17 GDPR,</li>
									<li>
										právo vznést námitku proti zpracování dle čl. 21 GDPR,
									</li>
									<li>právo na přenositelnost údajů dle čl. 20 GDPR a</li>
									<li>
										právo odvolat souhlas se zpracováním písemně nebo
										elektronicky na adresu nebo e-mail správce uvedený v čl. III
										těchto podmínek.
									</li>
								</ul>
								<p className='text-gray-700'>
									Dále máte právo podat stížnost u Úřadu pro ochranu osobních
									údajů v případě, že se domníváte, že bylo porušeno Vaše právo
									na ochranu osobních údajů, případně se obrátit na soud.
								</p>
							</section>

							<section className='mb-8'>
								<h2 className='text-2xl font-bold text-gray-900 mb-4'>
									8. Podmínky zabezpečení osobních údajů
								</h2>
								<ul className='list-disc list-inside space-y-2 text-gray-700'>
									<li>
										Správce prohlašuje, že přijal veškerá vhodná technická a
										organizační opatření k zabezpečení osobních údajů.
									</li>
									<li>
										Správce přijal technická opatření k zabezpečení datových
										úložišť a úložišť osobních údajů, zejména zabezpečení
										uložišť antivirovými programy, odpovídajícími hesly a
										dvoufázovým ověřením.
									</li>
									<li>
										Správce prohlašuje, že k osobním údajům mají přístup pouze
										jím pověřené osoby.
									</li>
								</ul>
							</section>

							<section className='mb-8'>
								<h2 className='text-2xl font-bold text-gray-900 mb-4'>
									9. Závěrečná ustanovení
								</h2>
								<ul className='list-disc list-inside space-y-2 text-gray-700 mb-4'>
									<li>
										Odesláním objednávky z internetového objednávkového
										formuláře potvrzujete, že jste seznámen/a s podmínkami
										ochrany osobních údajů a že je v celém rozsahu přijímáte.
									</li>
									<li>
										S těmito podmínkami souhlasíte zaškrtnutím souhlasu
										prostřednictvím internetového formuláře. Zaškrtnutím
										souhlasu potvrzujete, že jste seznámen/a s podmínkami
										ochrany osobních údajů a že je v celém rozsahu přijímáte.
									</li>
									<li>
										Správce je oprávněn tyto podmínky změnit. Novou verzi
										podmínek ochrany osobních údajů zveřejní na svých
										internetových stránkách a zároveň Vám zašle novou verzi
										těchto podmínek Vaši e-mailovou adresu, kterou jste správci
										poskytl/a.
									</li>
								</ul>

								<p className='text-gray-700 font-semibold'>
									Tyto podmínky nabývají účinnosti dne 16.8.2024.
								</p>
							</section>
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
