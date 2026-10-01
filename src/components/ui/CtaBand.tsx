import type { ReactNode } from 'react'
import { Section } from './Section'
import { Reveal } from '../motion/Reveal'

interface CtaBandProps {
	title: string
	subtitle: string
	children: ReactNode
}

export function CtaBand({ title, subtitle, children }: CtaBandProps) {
	return (
		<Section className="py-24 md:py-32 bg-vintage-green text-paper-cream">
			<Reveal className="max-w-3xl space-y-6">
				<h2 className="text-headline-lg font-display">{title}</h2>
				<p className="text-body-lg font-body text-paper-cream/90">{subtitle}</p>
				<div className="pt-4">{children}</div>
			</Reveal>
		</Section>
	)
}
