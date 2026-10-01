import { useLanguage } from '../../i18n/useLanguage'
import { homeCopy } from '../../i18n/translations/home'
import { CtaBand } from '../ui/CtaBand'
import { Input } from '../ui/Input'
import { buttonClasses } from '../ui/buttonClasses'

const EMAIL_FIELD_ID = 'updates-email'

export function ClosingCta() {
	const { locale } = useLanguage()
	const t = homeCopy[locale].cta

	return (
		<CtaBand title={t.heading} subtitle={t.subtitle}>
			<form className="flex flex-col sm:flex-row gap-4 max-w-xl">
				<label htmlFor={EMAIL_FIELD_ID} className="sr-only">
					{t.emailLabel}
				</label>
				<Input id={EMAIL_FIELD_ID} type="email" required placeholder={t.emailPlaceholder} />
				<button type="submit" className={buttonClasses('yellow')}>
					{t.button}
				</button>
			</form>
		</CtaBand>
	)
}
