import type { ReactNode } from 'react'

interface SectionProps {
	className?: string
	innerClassName?: string
	children: ReactNode
}

export function Section({ className = '', innerClassName = '', children }: SectionProps) {
	return (
		<section className={`relative overflow-hidden ${className}`}>
			<div className={`max-w-[1280px] mx-auto px-margin-sm md:px-margin-lg ${innerClassName}`}>
				{children}
			</div>
		</section>
	)
}
