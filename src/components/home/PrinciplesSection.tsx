import { useLanguage } from '../../i18n/useLanguage'
import { homeCopy } from '../../i18n/translations/home'
import { Section } from '../ui/Section'
import { Reveal } from '../motion/Reveal'
import { NumberedList } from '../ui/NumberedList'

export function PrinciplesSection() {
	const { locale } = useLanguage()
	const t = homeCopy[locale].principles

	return (
		<Section className="py-24">
			<Reveal>
				<h2 className="text-headline-lg font-display">{t.heading}</h2>
			</Reveal>
			<div className="mt-12">
				<NumberedList items={t.items} />
			</div>
		</Section>
	)
}
