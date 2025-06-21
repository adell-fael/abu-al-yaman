import type { Metadata } from 'next'

import { getLangDir } from 'rtl-detect'
import './globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale } from 'next-intl/server'
import { Rubik } from 'next/font/google'

import { getUserLocale } from '@/services/locale'
import { SkeletonLayout } from '@/_layouts'
import { cn } from '@/utils'
import { SiteData } from '@/config'

const rubik = Rubik({
	weight: ['300', '400', '500', '600', '700'],
	subsets: ['arabic'],
})

export const metadata: Metadata = {
	title: SiteData.title,
	description: SiteData.description,
	icons: {
		icon: ['favicon-16x16.png', 'favicon-32x32.png'],
		apple: 'apple-touch-icon.png',
	},
	openGraph: {
		title: SiteData.title,
		description: SiteData.description,
		images: ['android-chrome-192x192.png', 'android-chrome-512x512.png'],
	},
	// twitter: {
	// 	card: 'summary_large_image',
	// 	title: siteConfig.title,
	// 	description: siteConfig.description,
	// 	images: [siteConfig.LOGO_URL],
	// },
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const locale = await getLocale()
	const direction = getLangDir(locale)
	const currentLang = await getUserLocale()

	return (
		<html dir={direction} lang={locale}>
			<body className={cn(rubik.className, 'relative flex h-screen flex-col')}>
				<NextIntlClientProvider>
					<SkeletonLayout currentLang={currentLang}>{children}</SkeletonLayout>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
