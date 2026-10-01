import { useState } from 'react'
import type { ContactErrorCode, ContactSubmission } from '../../data/contact'

const CONTACT_ENDPOINT = '/api/contact'

export type ContactFormStatus = 'idle' | 'submitting' | 'success' | 'captcha-error' | 'error'

async function readErrorCode(response: Response): Promise<ContactErrorCode | null> {
	const body = await response.json().catch(() => null)
	return body?.error ?? null
}

export function useContactForm() {
	const [status, setStatus] = useState<ContactFormStatus>('idle')

	async function submit(submission: ContactSubmission) {
		setStatus('submitting')
		try {
			const response = await fetch(CONTACT_ENDPOINT, {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(submission)
			})
			if (response.ok) return setStatus('success')

			const errorCode = await readErrorCode(response)
			setStatus(errorCode === 'captcha' ? 'captcha-error' : 'error')
		} catch {
			setStatus('error')
		}
	}

	return { status, submit }
}
