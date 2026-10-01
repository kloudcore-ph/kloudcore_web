import { CalendarDaysIcon, QrCodeIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '../../i18n/useLanguage'
import { homeCopy } from '../../i18n/translations/home'
import { Section } from '../ui/Section'
import { Reveal } from '../motion/Reveal'
import { Tile } from '../ui/Tile'
import { FeatureTile } from '../ui/FeatureTile'

export function TayoSpotlight() {
	const { locale } = useLanguage()
	const t = homeCopy[locale].spotlight

	return (
		<Section className="py-24 bg-surface-container dark:bg-inverse-surface">
			<Reveal className="flex flex-col gap-4 max-w-[45ch]">
				<h2 className="text-headline-lg font-display">{t.heading}</h2>
				<p className="text-body-lg font-body text-off-black/80 dark:text-inverse-on-surface/80">
					{t.description}
				</p>
			</Reveal>
			<div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-gutter">
				<Tile
					tone="black"
					className="md:col-span-5 md:row-span-2 min-h-[320px] items-center justify-center"
				>
					<img src="/tayo-logo-icon.svg" alt="Tayo" className="h-40 w-40" />
				</Tile>
				<FeatureTile
					tone="green"
					icon={CalendarDaysIcon}
					title={t.timeline.title}
					description={t.timeline.description}
					delay={0.1}
					className="md:col-span-7"
				/>
				<FeatureTile
					tone="yellow"
					icon={QrCodeIcon}
					title={t.signIn.title}
					description={t.signIn.description}
					delay={0.2}
					className="md:col-span-7"
				/>
			</div>
		</Section>
	)
}
