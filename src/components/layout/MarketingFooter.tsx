import { Link } from 'react-router-dom'
import { commonCopy } from '../../i18n/translations/common'
import { useLanguage } from '../../i18n/useLanguage'

const legalLinkClasses =
	'font-mono text-label-mono opacity-70 hover:opacity-100 hover:text-primary transition-colors'

export function MarketingFooter() {
	const { locale } = useLanguage()
	const copy = commonCopy[locale]
	const year = new Date().getFullYear()

	return (
		<footer className="bg-background dark:bg-inverse-surface border-t border-hairline py-16">
			<div className="max-w-[1280px] mx-auto px-margin-sm md:px-margin-lg flex flex-col md:flex-row justify-between items-start gap-12">
				<div className="space-y-4 max-w-xs">
					<span className="text-headline-md font-display text-off-black dark:text-paper-cream block">
						KLOUDCORE
					</span>
					<p className="text-body-md font-body text-off-black/70 dark:text-inverse-on-surface/70">
						{copy.footer.tagline}
					</p>
				</div>
				<div className="grid grid-cols-2 sm:grid-cols-3 gap-12 w-full md:w-auto">
					<div className="flex flex-col gap-3">
						<span className="font-display text-button text-primary">
							{copy.footer.columns.company}
						</span>
						<Link className={legalLinkClasses} to="/privacy">
							{copy.footer.legal.privacy}
						</Link>
						<Link className={legalLinkClasses} to="/terms">
							{copy.footer.legal.terms}
						</Link>
						<a className={legalLinkClasses} href="#">
							{copy.footer.legal.helpCenter}
						</a>
					</div>
					<div className="flex flex-col gap-3">
						<span className="font-display text-button text-primary">
							{copy.footer.columns.platform}
						</span>
						<Link className={legalLinkClasses} to="/how-it-works">
							{copy.nav.features}
						</Link>
						<Link className={legalLinkClasses} to="/communities">
							{copy.nav.communities}
						</Link>
						<Link className={legalLinkClasses} to="/products">
							{copy.nav.products}
						</Link>
					</div>
					<div className="flex flex-col gap-3">
						<span className="font-display text-button text-primary">
							{copy.footer.columns.contact}
						</span>
						<a className={legalLinkClasses} href={`mailto:${copy.footer.contactEmail}`}>
							{copy.footer.contactEmail}
						</a>
					</div>
				</div>
			</div>
			<div className="max-w-[1280px] mx-auto px-margin-sm md:px-margin-lg mt-16 pt-8 border-t border-hairline">
				<p className="font-mono text-label-mono text-off-black dark:text-paper-cream opacity-60 text-center md:text-left uppercase">
					© {year} {copy.footer.copyrightSuffix}
				</p>
			</div>
		</footer>
	)
}
