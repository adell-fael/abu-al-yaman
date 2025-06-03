import { getMessages } from 'next-intl/server'

import { CTA, Hero } from '@/components'

// Random food images from Unsplash
const getFoodImage = (category: string) => {
	const images = {
		muhashi:
			'https://amwhatieat.com/wp-content/uploads/2019/09/mahshi-e1568518288665.jpg',
		kubeh: 'https://www.simplyleb.com/wp-content/uploads/Kibbi-26.jpg',
		mansaf:
			'https://www.seriouseats.com/thmb/EgBZ3JxNFUZAd4rMLcZWzGZqaaE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20221208-Mansaf-Mai-Kakish-hero-ec9c515c00d24b5c9ef567854036f044.JPG',
		coldMezze:
			'https://media-cdn.tripadvisor.com/media/photo-s/1b/59/c0/e5/cold-mezze.jpg',
		bakedGoods:
			'https://images.unsplash.com/photo-1595526417596-c0fdbf75287b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		savoryPastries:
			'https://plus.unsplash.com/premium_photo-1663133722519-65842119f62f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		pasta:
			'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		grill:
			'https://images.unsplash.com/photo-1589854880846-842b8fe2ba4b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		signaturePlates:
			'https://images.unsplash.com/photo-1611793413292-9a3f7917380f?q=80&w=1968&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
	}

	return images[category as keyof typeof images]
}

// Simulate a delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export default async function Home() {
	const messages = await getMessages()

	// Get menu sections from messages
	const menuSections = messages.menu

	// Add a 3 second delay to simulate loading
	await delay(2000)

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<Hero />

			{/* Menu Categories */}
			<section className="py-16">
				<div className="mx-auto max-w-screen-xl px-4">
					<div className="grid gap-16">
						{Object.entries(menuSections).map(([categoryKey, categoryData]) => {
							const { title, ...dishes } = categoryData as {
								title: string
								[key: string]: { title: string; description: string } | string
							}

							return (
								<div key={categoryKey} className="space-y-8">
									{/* Category Header */}
									<div className="text-center">
										<img
											alt={categoryKey}
											className="mb-6 h-64 w-full rounded-lg object-cover shadow-lg"
											src={getFoodImage(categoryKey)}
										/>
										<h2 className="text-secondary mb-4 text-3xl font-bold capitalize md:text-4xl">
											{title}
										</h2>
									</div>

									{/* Menu Items Grid */}
									<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
										{Object.entries(
											dishes as Record<
												string,
												{ title: string; description: string }
											>
										).map(([itemKey, item]) => (
											<div
												key={itemKey}
												className="bg-base-200 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg"
											>
												<div className="collapse-arrow collapse" tabIndex={0}>
													<h3 className="collapse-title text-base-content text-lg font-semibold">
														{item.title}
													</h3>
													<p className="collapse-content text-base-content/70 text-sm leading-relaxed">
														{item.description}
													</p>
												</div>
											</div>
										))}
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</section>

			{/* Call to Action */}
			<CTA />
		</div>
	)
}
