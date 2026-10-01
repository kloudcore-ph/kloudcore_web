import { motion, useReducedMotion } from 'motion/react'
import { useLanguage } from '../../i18n/useLanguage'
import { homeCopy } from '../../i18n/translations/home'
import { Section } from '../ui/Section'
import { Reveal } from '../motion/Reveal'

const STEP_STAGGER_SECONDS = 0.12

function StepConnector() {
	const prefersReducedMotion = useReducedMotion()

	return (
		<motion.div
			aria-hidden
			className="hidden md:block absolute left-0 right-0 top-5 h-0.5 origin-left bg-off-black dark:bg-paper-cream/70"
			initial={prefersReducedMotion ? false : { scaleX: 0 }}
			whileInView={{ scaleX: 1 }}
			viewport={{ once: true, amount: 0.5 }}
			transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
		/>
	)
}

export function StepsSection() {
	const { locale } = useLanguage()
	const t = homeCopy[locale].steps

	return (
		<Section className="py-24">
			<Reveal>
				<h2 className="text-headline-lg font-display">{t.heading}</h2>
			</Reveal>
			<ol className="relative mt-14 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-gutter">
				<StepConnector />
				{t.items.map((step, index) => (
					<li key={step.number} className="relative">
						<Reveal delay={index * STEP_STAGGER_SECONDS} className="space-y-4">
							<span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-off-black bg-retro-yellow font-mono text-label-mono text-off-black">
								{step.number}
							</span>
							<h3 className="text-headline-md font-display">{step.title}</h3>
							<p className="text-body-md font-body text-off-black/80 dark:text-inverse-on-surface/80 max-w-[40ch]">
								{step.description}
							</p>
						</Reveal>
					</li>
				))}
			</ol>
		</Section>
	)
}
