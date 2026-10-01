import type { ContactSubmission } from '../../src/data/contact'

const SITE_URL = 'https://kloudcore.com'
const LOGO_URL = `${SITE_URL}/kloudcore_new_logo.png`
const FONT_STACK =
	"'Geist','Geist Sans',-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif"
const FONT_STYLESHEET_URL =
	'https://fonts.googleapis.com/css2?family=Geist:wght@400;600;700;800&display=swap'
const PREHEADER_LENGTH = 90

// Brand palette, mirrored from src/index.css.
const COLOR = {
	offBlack: '#1a1a1c',
	green: '#2e5d4b',
	yellow: '#ffee52',
	red: '#ab3325',
	white: '#ffffff',
	page: '#f5f5f4',
	muted: '#58585c'
} as const

export interface ContactEmail {
	subject: string
	html: string
	text: string
}

export function renderContactEmail(submission: ContactSubmission): ContactEmail {
	return {
		subject: `Kloudcore website message from ${submission.name}`,
		html: renderHtml(submission),
		text: renderText(submission)
	}
}

function renderText({ name, email, message }: ContactSubmission) {
	return `New message from ${name} <${email}>\n\n${message}\n\n--\nSent from the contact form at ${SITE_URL}/join`
}

function renderHtml({ name, email, message }: ContactSubmission) {
	const safeName = escapeHtml(name)
	const safeEmail = escapeHtml(email)
	const safeMessage = escapeHtml(message).replace(/\r?\n/g, '<br>')
	const preheader = escapeHtml(message.slice(0, PREHEADER_LENGTH))

	return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
<title>New message from ${safeName}</title>
<style>@import url('${FONT_STYLESHEET_URL}');</style>
</head>
<body style="margin:0;padding:0;background:${COLOR.page};font-family:${FONT_STACK};color:${COLOR.offBlack};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${preheader}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${COLOR.page};">
<tr><td align="center" style="padding:32px 16px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:${COLOR.white};border:2px solid ${COLOR.offBlack};border-radius:16px;overflow:hidden;">
<tr><td style="background:${COLOR.green};padding:20px 32px;">
<table role="presentation" cellpadding="0" cellspacing="0"><tr>
<td style="padding-right:12px;"><img src="${LOGO_URL}" width="36" height="36" alt="" style="display:block;border:0;"></td>
<td style="font-family:${FONT_STACK};font-size:22px;font-weight:800;letter-spacing:-0.02em;color:${COLOR.white};">KLOUDCORE</td>
</tr></table>
</td></tr>
<tr><td style="padding:32px;">
<h1 style="margin:0 0 8px;font-family:${FONT_STACK};font-size:26px;line-height:1.2;font-weight:700;letter-spacing:-0.02em;color:${COLOR.offBlack};">New message from ${safeName}</h1>
<p style="margin:0 0 24px;font-size:16px;line-height:1.5;color:${COLOR.muted};">
<a href="mailto:${safeEmail}" style="color:${COLOR.red};font-weight:600;text-decoration:underline;">${safeEmail}</a>
</p>
<div style="background:${COLOR.page};border-radius:12px;padding:20px;font-size:16px;line-height:1.6;color:${COLOR.offBlack};">${safeMessage}</div>
<table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:28px;"><tr>
<td style="background:${COLOR.yellow};border:2px solid ${COLOR.offBlack};border-radius:999px;box-shadow:4px 4px 0 ${COLOR.offBlack};">
<a href="mailto:${safeEmail}" style="display:inline-block;padding:12px 24px;font-family:${FONT_STACK};font-size:16px;font-weight:700;color:${COLOR.offBlack};text-decoration:none;">Reply to ${safeName}</a>
</td>
</tr></table>
</td></tr>
<tr><td style="padding:16px 32px;border-top:1px solid #e4e4e1;font-size:13px;line-height:1.5;color:${COLOR.muted};">
Sent from the contact form at <a href="${SITE_URL}/join" style="color:${COLOR.muted};">kloudcore.com/join</a>
</td></tr>
</table>
</td></tr>
</table>
</body>
</html>`
}

function escapeHtml(value: string) {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;')
}
