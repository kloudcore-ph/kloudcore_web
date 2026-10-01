import { CakeIcon, HeartIcon, PaperAirplaneIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/useLanguage'
import { communitiesCopy } from '../i18n/translations/communities'
import { Section } from '../components/ui/Section'
import { PageHero } from '../components/ui/PageHero'
import { FeatureTile } from '../components/ui/FeatureTile'
import { CtaBand } from '../components/ui/CtaBand'
import { Reveal } from '../components/motion/Reveal'
import { Input } from '../components/ui/Input'
import { buttonClasses } from '../components/ui/buttonClasses'

const eventTypeIcons = [PaperAirplaneIcon, HeartIcon, UserGroupIcon, CakeIcon]
const eventTypeLayouts = [
	{ tone: 'green', span: 'md:col-span-7' },
	{ tone: 'yellow', span: 'md:col-span-5' },
	{ tone: 'orange', span: 'md:col-span-5' },
	{ tone: 'paper', span: 'md:col-span-7' }
] as const

export function CommunitiesPage() {
	const { locale } = useLanguage()
	const t = communitiesCopy[locale]

	return (
		<>
			<PageHero title={t.hero.title} subtitle={t.hero.subtitle}>
				<div className="max-w-md space-y-2">
					<Input
						placeholder={t.hero.searchPlaceholder}
						aria-label={t.hero.searchPlaceholder}
						disabled
						className="opacity-60"
					/>
					<p className="text-sm font-body text-off-black/70 dark:text-inverse-on-surface/70">
						{t.hero.searchComingSoon}
					</p>
				</div>
			</PageHero>

			<Section className="pb-24">
				<Reveal>
					<h2 className="text-headline-lg font-display">{t.eventTypesHeading}</h2>
				</Reveal>
				<div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-gutter">
					{t.eventTypes.map((event, index) => (
						<FeatureTile
							key={event.title}
							tone={eventTypeLayouts[index].tone}
							icon={eventTypeIcons[index]}
							title={event.title}
							description={event.description}
							delay={(index % 2) * 0.1}
							className={eventTypeLayouts[index].span}
						/>
					))}
				</div>
			</Section>

			<CtaBand title={t.closing.heading} subtitle={t.closing.subtitle}>
				<div className="flex flex-col gap-6 items-start">
					<a
						href="https://tayo.kloudcore.com"
						target="_blank"
						rel="noreferrer"
						className={buttonClasses('yellow')}
					>
						{t.closing.cta}
					</a>
					<p className="font-body">
						{t.closing.ideaPrompt}{' '}
						<Link to="/join" className="font-semibold underline underline-offset-4">
							{t.closing.ideaCta}
						</Link>
					</p>
				</div>
			</CtaBand>
		</>
	)
}
