import { useLanguage } from '../i18n/useLanguage'
import { termsCopy } from '../i18n/translations/legal'
import { LegalPageLayout } from '../components/legal/LegalPageLayout'

export function TermsPage() {
	const { locale } = useLanguage()

	return <LegalPageLayout copy={termsCopy[locale]} />
}
