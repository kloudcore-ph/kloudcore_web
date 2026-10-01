import type { ReactNode } from 'react'
import { Section } from './Section'
import { Reveal } from '../motion/Reveal'

interface PageHeroProps {
	title: string
	subtitle: string
	children?: ReactNode
}

export function PageHero({ title, subtitle, children }: PageHeroProps) {
	return (
		<Section className="pt-16 pb-12 md:pt-24 md:pb-16">
			<Reveal className="max-w-3xl space-y-6">
				<h1 className="text-display-lg font-display text-off-black dark:text-paper-cream">{title}</h1>
				<p className="text-body-lg font-body max-w-[55ch] text-off-black/80 dark:text-inverse-on-surface/80">
					{subtitle}
				</p>
				{children}
			</Reveal>
		</Section>
	)
}
