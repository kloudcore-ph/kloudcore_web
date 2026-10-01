import { useRef, useState, type FormEvent } from 'react'
import { Turnstile, type TurnstileInstance } from '@marsidev/react-turnstile'
import { useLanguage } from '../../i18n/useLanguage'
import { joinCopy } from '../../i18n/translations/join'
import { useTheme } from '../../theme/useTheme'
import { CONTACT_LIMITS } from '../../data/contact'
import { LabeledInput, LabeledTextarea } from '../ui/Input'
import { buttonClasses } from '../ui/buttonClasses'
import { useContactForm, type ContactFormStatus } from './useContactForm'

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY

function readSubmissionFields(form: HTMLFormElement) {
	const fields = new FormData(form)
	return {
		name: String(fields.get('name')),
		email: String(fields.get('email')),
		message: String(fields.get('message'))
	}
}

export function ContactForm() {
	const { locale } = useLanguage()
	const { darkMode } = useTheme()
	const t = joinCopy[locale].form
	const { status, submit } = useContactForm()
	const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
	const turnstileRef = useRef<TurnstileInstance>(null)

	const isSubmitting = status === 'submitting'
	const canSubmit = turnstileToken !== null && !isSubmitting

	async function handleSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
		if (!turnstileToken) return

		await submit({ ...readSubmissionFields(event.currentTarget), turnstileToken })
		// Turnstile tokens are single use, so every attempt needs a fresh challenge.
		turnstileRef.current?.reset()
		setTurnstileToken(null)
	}

	if (status === 'success') {
		return (
			<div role="status" className="space-y-2 rounded-card bg-surface-container dark:bg-inverse-surface p-8">
				<h2 className="text-headline-md font-display">{t.successTitle}</h2>
				<p className="text-body-lg font-body">{t.successBody}</p>
			</div>
		)
	}

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<LabeledInput
				id="contact-name"
				name="name"
				label={t.name}
				autoComplete="name"
				maxLength={CONTACT_LIMITS.name}
				required
			/>
			<LabeledInput
				id="contact-email"
				name="email"
				type="email"
				label={t.email}
				autoComplete="email"
				maxLength={CONTACT_LIMITS.email}
				required
			/>
			<LabeledTextarea
				id="contact-message"
				name="message"
				label={t.message}
				maxLength={CONTACT_LIMITS.message}
				required
			/>
			<Turnstile
				ref={turnstileRef}
				siteKey={TURNSTILE_SITE_KEY}
				onSuccess={setTurnstileToken}
				onExpire={() => setTurnstileToken(null)}
				onError={() => setTurnstileToken(null)}
				options={{ theme: darkMode ? 'dark' : 'light' }}
			/>
			<FormError status={status} />
			<button
				type="submit"
				disabled={!canSubmit}
				className={buttonClasses('accent', 'w-full disabled:opacity-50 disabled:pointer-events-none')}
			>
				{isSubmitting ? t.submitting : t.submit}
			</button>
		</form>
	)
}

function FormError({ status }: { status: ContactFormStatus }) {
	const { locale } = useLanguage()
	const t = joinCopy[locale].form

	if (status !== 'error' && status !== 'captcha-error') return null

	return (
		<p role="alert" className="font-medium text-primary dark:text-primary-fixed-dim">
			{status === 'captcha-error' ? t.errorCaptcha : t.errorGeneric}
		</p>
	)
}
