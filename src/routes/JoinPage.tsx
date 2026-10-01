import { useLanguage } from '../i18n/useLanguage'
import { joinCopy } from '../i18n/translations/join'
import { featuredProduct, tayoProduct } from '../data/products'
import { ContactForm } from '../components/join/ContactForm'
import { ProductLogoPanel } from '../components/ui/ProductLogoPanel'

export function JoinPage() {
	const { locale } = useLanguage()
	const t = joinCopy[locale]
	const tayoUrl = tayoProduct[locale].url
	const featured = featuredProduct[locale]

	return (
		<div className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100dvh-4rem)]">
			<div className="flex items-center justify-center px-margin-sm md:px-margin-lg py-16">
				<div className="w-full max-w-md space-y-6">
					<h1 className="text-headline-lg font-display text-off-black dark:text-paper-cream">
						{t.title}
					</h1>
					<p className="text-body-lg font-body text-off-black/80 dark:text-inverse-on-surface/80">
						{t.subtitle}
					</p>
					<ContactForm />
					<p className="text-sm font-body text-off-black/70 dark:text-inverse-on-surface/70">
						{t.tayoNote}{' '}
						<a
							href={tayoUrl}
							target="_blank"
							rel="noreferrer"
							className="font-semibold text-primary underline underline-offset-4"
						>
							{t.tayoLinkLabel}
						</a>
					</p>
				</div>
			</div>
			<div className="hidden lg:flex items-center justify-center bg-surface-container dark:bg-inverse-surface p-margin-lg">
				<div className="w-full max-w-lg space-y-6">
					<h2 className="text-headline-md font-display">{t.featuredHeading}</h2>
					<ProductLogoPanel
						logoSrc={featured.fullLogo}
						productName={featured.name}
						className="aspect-[4/3]"
					/>
				</div>
			</div>
		</div>
	)
}
