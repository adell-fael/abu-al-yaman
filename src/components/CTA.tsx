import { getTranslations } from 'next-intl/server'
import React from 'react'

const CTA = async () => {
	const tHome = await getTranslations('home')

	return (
		<section className="bg-accent text-accent-content rounded-lg py-16">
			<div className="mx-auto max-w-screen-xl px-4 text-center">
				<h2 className="mb-6 text-3xl font-bold md:text-4xl">
					{tHome('cta.title')}
				</h2>
				<p className="mb-8 text-xl opacity-90">{tHome('cta.subtitle')}</p>
				<div className="flex flex-col justify-center gap-4 sm:flex-row">
					<button className="btn btn-lg btn-primary btn-soft">
						{tHome('cta.orderNow')}
					</button>
					<button className="btn btn-lg btn-secondary btn-soft">
						{tHome('cta.viewLocation')}
					</button>
				</div>
			</div>
		</section>
	)
}

export default CTA
