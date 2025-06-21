'use client'

import { useCallback, useState, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

import { cn } from '@/utils'

interface MenuFilterProps {
	categories: Array<{ key: string; title: string }>
	onFilterChange: (categoryKey: string | null) => void
}

function MenuFilter({ categories, onFilterChange }: MenuFilterProps) {
	const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
	const containerRef = useRef<HTMLDivElement>(null)

	useGSAP(
		() => {
			gsap.from('.filter button', {
				opacity: 0,
				y: 10,
				stagger: 0.1,
				duration: 0.4,
				ease: 'power2.out',
			})
		},
		{ scope: containerRef, dependencies: [selectedCategory] }
	)

	const handleReset = useCallback(() => {
		setSelectedCategory(null)
		onFilterChange(null)
	}, [onFilterChange])

	const handleCategoryChange = useCallback(
		(categoryKey: string) => {
			setSelectedCategory(categoryKey)
			onFilterChange(categoryKey)
		},
		[onFilterChange]
	)

	return (
		<div
			ref={containerRef}
			className="bg-base-200 z-10 mb-14 flex flex-wrap justify-center gap-2 rounded-md p-4 filter"
		>
			{selectedCategory && (
				<button
					aria-label="Clear filter"
					className="btn btn-square btn-primary"
					type="button"
					onClick={handleReset}
				>
					×
				</button>
			)}

			{categories.map(({ key, title }) => (
				<button
					key={key}
					aria-label={title}
					className={cn(
						`btn btn-primary`,
						selectedCategory && selectedCategory === key && 'btn-active',
						selectedCategory && selectedCategory !== key && 'hidden'
					)}
					type="button"
					onClick={() => handleCategoryChange(key)}
				>
					{title}
				</button>
			))}
		</div>
	)
}

export default MenuFilter
