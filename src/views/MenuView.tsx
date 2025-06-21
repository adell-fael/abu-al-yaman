'use client'
import React, { useState } from 'react'

import { MenuFilter } from '@/components'

interface MenuViewProps {
	categories: Array<{ key: string; title: string }>
	menuData: Array<{
		categoryKey: string
		title: string
		image: string
		dishes: Array<[string, { title: string; description: string }]>
	}>
}

function MenuView({ categories, menuData }: MenuViewProps) {
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

	// Filter menu data based on selected category
	const filteredMenuData = selectedCategory
		? menuData.filter((item) => item.categoryKey === selectedCategory)
		: menuData

	const handleFilterChange = (categoryKey: string | null) => {
		setSelectedCategory(categoryKey)
	}

	return (
		<section className="py-16">
			<div className="mx-auto max-w-screen-xl px-4">
				{/* Client-side Filter Component */}
				<MenuFilter
					categories={categories}
					onFilterChange={handleFilterChange}
				/>

				{/* Filtered Menu Items */}
				<div className="grid gap-16">
					{filteredMenuData.map(({ categoryKey, title, image, dishes }) => (
						<div key={categoryKey} className="space-y-8">
							{/* Category Header */}
							<div className="text-center">
								<img
									alt={categoryKey}
									className="mb-6 h-64 w-full rounded-lg object-cover shadow-lg"
									src={image}
								/>
								<h2 className="text-primary mb-4 text-3xl font-bold capitalize md:text-4xl">
									{title}
								</h2>
							</div>

							{/* Menu Items Grid */}
							<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
								{dishes.map(([itemKey, item]) => (
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
					))}
				</div>
			</div>
		</section>
	)
}

export default MenuView
