import { getMessages } from 'next-intl/server'

import { CTA, Hero } from '@/components'

// Random food images from Unsplash
const getRandomFoodImage = (category: string) => {
	const images = {
		muhashi:
			'https://images.unsplash.com/photo-1574484284002-952d92456975?w=500&h=300&fit=crop',
		kubeh:
			'https://images.unsplash.com/photo-1574484284002-952d92456975?w=500&h=300&fit=crop',
		mansaf:
			'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&h=300&fit=crop',
		coldMezze:
			'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&h=300&fit=crop',
		bakedGoods:
			'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=500&h=300&fit=crop',
		savoryPastries:
			'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&h=300&fit=crop',
		pasta:
			'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=500&h=300&fit=crop',
		grill:
			'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&h=300&fit=crop',
		mixedPlatter:
			'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&h=300&fit=crop',
	}

	return (
		images[category as keyof typeof images] ||
		'https://images.unsplash.com/photo-1544025162-d76694265947?w=500&h=300&fit=crop'
	)
}

// Simulate a delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

export default async function Home() {
	const messages = await getMessages()

	// Get menu sections from messages
	const menuSections = messages.menu

	// Add a 3 second delay to simulate loading
	await delay(3000)

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
											src={getRandomFoodImage(categoryKey)}
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
												className="bg-base-200 rounded-lg p-6 shadow-md transition-shadow duration-300 hover:shadow-lg"
											>
												<div className="space-y-3">
													<h3 className="text-base-content text-lg font-semibold">
														{item.title}
													</h3>
													<p className="text-base-content/70 text-sm leading-relaxed">
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
