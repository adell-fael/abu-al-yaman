import { getMessages } from 'next-intl/server'

import { Hero } from '@/components'
import { MenuView } from '@/views'

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

// interface HomeProps {
// 	searchParams: { category?: string }
// }

export default async function Home() {
	const messages = await getMessages()
	const menuSections = messages.menu

	// Prepare categories for the client component
	const categories = Object.entries(menuSections).map(([key, data]) => ({
		key,
		title: data.title,
	}))

	// Prepare menu data for client component
	const menuData = Object.entries(menuSections).map(
		([categoryKey, categoryData]) => {
			const { title, ...dishes } = categoryData as {
				title: string
				[key: string]: { title: string; description: string } | string
			}

			return {
				categoryKey,
				title,
				image: getFoodImage(categoryKey),
				dishes: Object.entries(
					dishes as Record<string, { title: string; description: string }>
				),
			}
		}
	)

	await delay(2000) // You can remove this line if you want

	return (
		<div className="min-h-screen">
			{/* Hero Section */}
			<Hero />

			{/* Menu Section - Now client-side */}
			<MenuView categories={categories} menuData={menuData} />

			{/* Call to Action */}
			{/* <CTA /> */}
		</div>
	)
}
