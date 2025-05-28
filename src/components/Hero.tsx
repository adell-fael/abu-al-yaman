import { getTranslations } from 'next-intl/server'
import React from 'react'

const Hero = async () => {
	const tHome = await getTranslations('home')

	return (
		<section className="text-primary py-16">
			<div className="mx-auto max-w-screen-xl px-4">
				<div className="text-center">
					<h1 className="mb-4 text-4xl font-bold md:text-6xl">
						{tHome('hero.title')}
					</h1>
					<p className="text-base-content text-xl opacity-90 md:text-2xl">
						{tHome('hero.subtitle')}
					</p>
				</div>
			</div>
		</section>
	)
}

export default Hero
