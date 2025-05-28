import { FC, ReactNode } from 'react'

import { Footer, Header, ScrollToTop } from '@/components'

type IProps = {
	children: ReactNode
	currentLang: string
}
const SkeletonLayout: FC<IProps> = ({ children, currentLang }) => {
	return (
		<>
			<Header currentLang={currentLang} />
			<main className="container mx-auto flex-grow p-4">{children}</main>
			<Footer />
			<ScrollToTop />
		</>
	)
}

export default SkeletonLayout
