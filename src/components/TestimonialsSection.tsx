import Image from 'next/image';
import Link from 'next/link';

export default function TestimonialsSection() {
	return (
		<section className='py-16'>
			<div className='container'>
				<h2 className='text-3xl font-bold text-center mb-12'>
					Naše výsledky mluví za nás
				</h2>

				<div className='max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md relative'>
					<div className='absolute -left-4 -top-4 text-6xl text-gray-200'>
						&ldquo;
					</div>

					<div className='relative z-10'>
						<p className='text-lg mb-6 text-gray-700'>
							Po optimalizaci od Webforte se náš web dostal na{' '}
							<strong>první stránku Google</strong> a návštěvnost vzrostla
							dvojnásobně.
						</p>

						<div className='flex items-center'>
							<Image
								src='/avatar.jpg'
								alt='Petra Dvořáková'
								width={50}
								height={50}
								className='rounded-full mr-4'
							/>
							<div>
								<p className='font-bold'>Petra Dvořáková</p>
								<p className='text-sm text-gray-500'>majitelka e-shopu</p>
							</div>
						</div>
					</div>

					<div className='flex justify-center mt-8'>
						<button className='w-3 h-3 rounded-full bg-primary mx-1'></button>
						<button className='w-3 h-3 rounded-full bg-gray-300 mx-1'></button>
						<button className='w-3 h-3 rounded-full bg-gray-300 mx-1'></button>
					</div>
				</div>

				<div className='text-center mt-10'>
					<Link href='/konzultace' className='btn-primary'>
						Chcete také výsledky?
					</Link>
				</div>
			</div>
		</section>
	);
}
