import { Link } from 'react-router-dom'
import { useLanguage } from '../../i18n/useLanguage'
import { homeCopy } from '../../i18n/translations/home'
import { Section } from '../ui/Section'
import { Reveal } from '../motion/Reveal'
import { TayoLogoPanel } from '../ui/TayoLogoPanel'
import { buttonClasses } from '../ui/buttonClasses'

const TAYO_URL = 'https://tayo.kloudcore.com'

export function HeroSection() {
	const { locale } = useLanguage()
	const t = homeCopy[locale].hero

	return (
		<Section className="pt-12 pb-16 md:pt-16">
			<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
				<div className="lg:col-span-7 space-y-8">
					<Reveal>
						<h1 className="text-display-lg font-display text-off-black dark:text-paper-cream">
							{t.titleLine1}
							<br />
							<span className="text-primary">{t.titleLine2}</span>
						</h1>
					</Reveal>
					<Reveal delay={0.1}>
						<p className="text-body-lg font-body max-w-[45ch] text-off-black/80 dark:text-inverse-on-surface/80">
							{t.subtitle}
						</p>
					</Reveal>
					<Reveal delay={0.2} className="flex flex-col sm:flex-row gap-4">
						<a href={TAYO_URL} target="_blank" rel="noreferrer" className={buttonClasses('yellow')}>
							{t.ctaPrimary}
						</a>
						<Link to="/how-it-works" className={buttonClasses('outline')}>
							{t.ctaSecondary}
						</Link>
					</Reveal>
				</div>
				<Reveal delay={0.15} className="lg:col-span-5">
					<TayoLogoPanel className="aspect-[4/3]" />
				</Reveal>
			</div>
		</Section>
	)
}
