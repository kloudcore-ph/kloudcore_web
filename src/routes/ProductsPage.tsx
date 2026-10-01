import { Link } from 'react-router-dom'
import { QrCodeIcon, CalendarDaysIcon, MapPinIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '../i18n/useLanguage'
import { productsCopy } from '../i18n/translations/products'
import { tayoProduct } from '../data/products'
import { Section } from '../components/ui/Section'
import { PageHero } from '../components/ui/PageHero'
import { FeatureTile } from '../components/ui/FeatureTile'
import { CtaBand } from '../components/ui/CtaBand'
import { ProductLogoPanel } from '../components/ui/ProductLogoPanel'
import { Reveal } from '../components/motion/Reveal'
import { buttonClasses } from '../components/ui/buttonClasses'

const featureIcons = [QrCodeIcon, CalendarDaysIcon, MapPinIcon]
const featureLayouts = [
	{ tone: 'green', span: 'md:col-span-5' },
	{ tone: 'yellow', span: 'md:col-span-7' },
	{ tone: 'paper', span: 'md:col-span-12' }
] as const

export function ProductsPage() {
	const { locale } = useLanguage()
	const t = productsCopy[locale]
	const tayo = tayoProduct[locale]

	return (
		<>
			<PageHero title={t.hero.title} subtitle={t.hero.subtitle} />

			<Section className="pb-24">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
					<Reveal className="lg:col-span-5">
						<ProductLogoPanel
							logoSrc={tayo.fullLogo}
							productName={tayo.name}
							className="aspect-[4/3]"
						/>
					</Reveal>
					<Reveal delay={0.1} className="lg:col-span-7 flex flex-col gap-6">
						<h2 className="text-headline-lg font-display">{t.flagship.title}</h2>
						<p className="text-body-lg font-body max-w-[55ch] text-off-black/80 dark:text-inverse-on-surface/80">
							{t.flagship.description}
						</p>
						<div className="flex flex-wrap items-center gap-4">
							<a href={tayo.url} target="_blank" rel="noreferrer" className={buttonClasses('yellow')}>
								{t.flagship.cta}
							</a>
							<span className="inline-flex items-center gap-2 rounded-full border border-off-black dark:border-paper-cream/70 px-4 py-2 font-body font-medium">
								<span className="h-2.5 w-2.5 rounded-full bg-vintage-green" aria-hidden />
								{t.flagship.liveNow}
							</span>
						</div>
					</Reveal>
				</div>
				<div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-gutter">
					{t.flagship.features.map((feature, index) => (
						<FeatureTile
							key={feature.title}
							tone={featureLayouts[index].tone}
							icon={featureIcons[index]}
							title={feature.title}
							description={feature.description}
							delay={index * 0.1}
							className={featureLayouts[index].span}
						/>
					))}
				</div>
			</Section>

			<CtaBand title={t.cta.heading} subtitle={t.cta.subtitle}>
				<Link to="/join" className={buttonClasses('yellow')}>
					{t.cta.button}
				</Link>
			</CtaBand>
		</>
	)
}
