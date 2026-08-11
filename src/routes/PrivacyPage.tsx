import { useLanguage } from '../i18n/useLanguage'
import { privacyCopy } from '../i18n/translations/legal'
import { LegalPageLayout } from '../components/legal/LegalPageLayout'

export function PrivacyPage() {
	const { locale } = useLanguage()

	return <LegalPageLayout copy={privacyCopy[locale]} />
}
