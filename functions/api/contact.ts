import {
	CONTACT_LIMITS,
	type ContactErrorCode,
	type ContactSubmission
} from '../../src/data/contact'

interface Env {
	TURNSTILE_SECRET_KEY: string
	RESEND_API_KEY: string
	CONTACT_FROM_EMAIL: string
	CONTACT_TO_EMAIL: string
}

const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'
const RESEND_SEND_URL = 'https://api.resend.com/emails'
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
	const submission = await readSubmission(request)
	if (!submission) return errorResponse('invalid', 400)

	const clientIp = request.headers.get('CF-Connecting-IP')
	const isHuman = await verifyTurnstile(submission.turnstileToken, clientIp, env)
	if (!isHuman) return errorResponse('captcha', 400)

	const isDelivered = await sendEmail(submission, env)
	if (!isDelivered) return errorResponse('delivery', 502)

	return Response.json({ ok: true })
}

function errorResponse(error: ContactErrorCode, status: number) {
	return Response.json({ error }, { status })
}

async function readSubmission(request: Request): Promise<ContactSubmission | null> {
	const body = await request.json().catch(() => null)
	if (typeof body !== 'object' || body === null) return null

	const { name, email, message, turnstileToken } = body as Record<string, unknown>
	if (![name, email, message, turnstileToken].every((field) => typeof field === 'string')) {
		return null
	}

	const submission: ContactSubmission = {
		name: (name as string).replace(/\s+/g, ' ').trim(),
		email: (email as string).trim(),
		message: (message as string).trim(),
		turnstileToken: turnstileToken as string
	}
	return isValid(submission) ? submission : null
}

function isValid({ name, email, message, turnstileToken }: ContactSubmission) {
	return (
		name.length > 0 &&
		name.length <= CONTACT_LIMITS.name &&
		email.length <= CONTACT_LIMITS.email &&
		EMAIL_PATTERN.test(email) &&
		message.length > 0 &&
		message.length <= CONTACT_LIMITS.message &&
		turnstileToken.length > 0
	)
}

async function verifyTurnstile(token: string, clientIp: string | null, env: Env) {
	const form = new FormData()
	form.append('secret', env.TURNSTILE_SECRET_KEY)
	form.append('response', token)
	if (clientIp) form.append('remoteip', clientIp)

	try {
		const response = await fetch(TURNSTILE_VERIFY_URL, { method: 'POST', body: form })
		const result = (await response.json()) as { success: boolean }
		return result.success
	} catch {
		return false
	}
}

async function sendEmail({ name, email, message }: ContactSubmission, env: Env) {
	try {
		const response = await fetch(RESEND_SEND_URL, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${env.RESEND_API_KEY}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				from: env.CONTACT_FROM_EMAIL,
				to: env.CONTACT_TO_EMAIL,
				reply_to: email,
				subject: `Kloudcore website message from ${name}`,
				text: `From: ${name} <${email}>\n\n${message}`
			})
		})
		return response.ok
	} catch {
		return false
	}
}
