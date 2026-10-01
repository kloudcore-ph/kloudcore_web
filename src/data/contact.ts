export const CONTACT_LIMITS = {
	name: 100,
	email: 254,
	message: 5000
} as const

export interface ContactSubmission {
	name: string
	email: string
	message: string
	turnstileToken: string
}

export type ContactErrorCode = 'invalid' | 'captcha' | 'delivery'
