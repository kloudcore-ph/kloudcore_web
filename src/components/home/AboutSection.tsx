import { useLanguage } from '../../i18n/useLanguage'
import { homeCopy } from '../../i18n/translations/home'
import { Section } from '../ui/Section'
import { Reveal } from '../motion/Reveal'

export function AboutSection() {
	const { locale } = useLanguage()
	const t = homeCopy[locale].about

	return (
		<Section className="py-24 md:py-32 bg-surface-container dark:bg-inverse-surface">
			<Reveal>
				<p className="text-headline-lg font-display max-w-4xl">{t.statement}</p>
			</Reveal>
			<Reveal delay={0.1} className="mt-10 space-y-8">
				<p className="text-body-lg font-body max-w-[55ch] text-off-black/80 dark:text-inverse-on-surface/80">
					{t.closing}
				</p>
				<ul className="flex flex-wrap gap-3">
					{t.values.map((value) => (
						<li
							key={value}
							className="rounded-full border border-off-black dark:border-paper-cream/70 px-5 py-2 font-body font-medium"
						>
							{value}
						</li>
					))}
				</ul>
			</Reveal>
		</Section>
	)
}
