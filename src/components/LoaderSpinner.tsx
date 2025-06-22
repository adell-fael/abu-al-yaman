import React, { FC } from 'react'

import { cn } from '@/utils'

export const LoaderSpinner: FC<{ className?: string; full?: boolean }> = ({
	className,
	full,
}) => {
	return (
		<div className={cn('flex items-center justify-center', full && 'h-dvh')}>
			<span
				className={cn('loading loading-spinner loading-lg', className)}
			></span>
		</div>
	)
}

export default LoaderSpinner
