export default function WebEarnings() {
	return (
		<section className='py-16 bg-black text-white'>
			<div className='container'>
				<div className='max-w-3xl mx-auto text-center mb-12'>
					<h2 className='text-3xl font-bold mb-6'>
						Získejte více zákazníků díky webům, které vydělávají
					</h2>
					<p className='text-gray-300'>
						Weby, které vytváříme, nezůstávají jen ve formě prezentace. Díky
						nápaditému UX designu, technologicky špičkově provedené, uživatelsky
						přívětivé a optimalizované verzi, dokážou naše weby opravdu
						vydělávat.
					</p>
				</div>

				<div className='grid md:grid-cols-2 gap-8'>
					<div className='bg-gray-900 p-8 rounded-lg'>
						<h3 className='text-2xl font-bold mb-6'>
							Web na míru, který posune váš byznys
						</h3>
						<p className='text-gray-300 mb-6'>
							Každý projekt je pro nás výzva. Ihned od začátku společně
							analyzujeme váš byznys. Zjišťujeme na co se zaměřit, abychom vám
							dokázali vytvořit web, který bude fungovat a bude přinášet
							zákazníky. Chápete, proč je to tak důležité?
						</p>
						<a href='/konzultace' className='btn-primary inline-block'>
							Zažádejte o konzultaci zdarma
						</a>
					</div>

					<div className='bg-gray-900 p-8 rounded-lg'>
						<h3 className='text-2xl font-bold mb-6'>
							Co můžete čekat od spolupráce?
						</h3>
						<p className='text-gray-300 mb-6'>
							Ochráníme, aby váš web nebyl výkladní skříň, která nic neprodává.
							Každý web od nás má jasnou cestu k získání zakázky nebo vede
							uživatele k interakci s vašim obsahem, který dobře konvertuje.
						</p>
						<a href='/kontakt' className='btn-primary inline-block'>
							Jak vypadá spolupráce s námi?
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
