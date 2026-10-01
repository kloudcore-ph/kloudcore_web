import {
	MapPinIcon,
	CalendarDaysIcon,
	FaceSmileIcon,
	DevicePhoneMobileIcon
} from '@heroicons/react/24/outline'
import { useLanguage } from '../i18n/useLanguage'
import { howItWorksCopy } from '../i18n/translations/howItWorks'
import { Section } from '../components/ui/Section'
import { PageHero } from '../components/ui/PageHero'
import { NumberedList } from '../components/ui/NumberedList'
import { FeatureTile } from '../components/ui/FeatureTile'
import { CtaBand } from '../components/ui/CtaBand'
import { Reveal } from '../components/motion/Reveal'
import { buttonClasses } from '../components/ui/buttonClasses'

const capabilityIcons = [MapPinIcon, CalendarDaysIcon, FaceSmileIcon, DevicePhoneMobileIcon]
const capabilityLayouts = [
	{ tone: 'yellow', span: 'md:col-span-5' },
	{ tone: 'green', span: 'md:col-span-7' },
	{ tone: 'paper', span: 'md:col-span-7' },
	{ tone: 'orange', span: 'md:col-span-5' }
] as const

export function HowItWorksPage() {
	const { locale } = useLanguage()
	const t = howItWorksCopy[locale]

	return (
		<>
			<PageHero title={t.hero.title} subtitle={t.hero.subtitle} />

			<Section className="pb-24">
				<NumberedList items={t.steps} />
			</Section>

			<Section className="py-24 bg-surface-container dark:bg-inverse-surface">
				<Reveal>
					<h2 className="text-headline-lg font-display">{t.capabilitiesHeading}</h2>
				</Reveal>
				<div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-gutter">
					{t.capabilities.map((capability, index) => (
						<FeatureTile
							key={capability.title}
							tone={capabilityLayouts[index].tone}
							icon={capabilityIcons[index]}
							title={capability.title}
							description={capability.description}
							delay={(index % 2) * 0.1}
							className={capabilityLayouts[index].span}
						/>
					))}
				</div>
			</Section>

			<CtaBand title={t.cta.heading} subtitle={t.cta.subtitle}>
				<a
					href="https://tayo.kloudcore.com"
					target="_blank"
					rel="noreferrer"
					className={buttonClasses('yellow')}
				>
					{t.cta.button}
				</a>
			</CtaBand>
		</>
	)
}
