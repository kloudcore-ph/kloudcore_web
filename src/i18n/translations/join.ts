import type { Translations } from '../types'

interface JoinCopy {
	title: string
	subtitle: string
	form: {
		name: string
		email: string
		message: string
		submit: string
		submitting: string
		successTitle: string
		successBody: string
		errorCaptcha: string
		errorGeneric: string
	}
	tayoNote: string
	tayoLinkLabel: string
}

export const joinCopy: Translations<JoinCopy> = {
	en: {
		title: 'Send us a message',
		subtitle: 'Questions, ideas or feedback? Write to us and we will reply by email.',
		form: {
			name: 'Your name',
			email: 'Your email',
			message: 'Your message',
			submit: 'Send message',
			submitting: 'Sending...',
			successTitle: 'Message sent',
			successBody: 'Thanks for writing. We will reply to your email soon.',
			errorCaptcha: 'Verification failed. Please try again.',
			errorGeneric: 'Something went wrong. Please try again in a moment.'
		},
		tayoNote: 'Already using Tayo?',
		tayoLinkLabel: 'Go to tayo.kloudcore.com'
	},
	ja: {
		title: 'メッセージを送る',
		subtitle: 'ご質問、アイデア、ご意見をお寄せください。メールでお返事します。',
		form: {
			name: 'お名前',
			email: 'メールアドレス',
			message: 'メッセージ',
			submit: 'メッセージを送信',
			submitting: '送信中...',
			successTitle: '送信しました',
			successBody: 'メッセージをありがとうございます。メールで近日中にお返事します。',
			errorCaptcha: '確認に失敗しました。もう一度お試しください。',
			errorGeneric: 'エラーが発生しました。しばらくしてからもう一度お試しください。'
		},
		tayoNote: 'すでにTayoをお使いですか？',
		tayoLinkLabel: 'tayo.kloudcore.com へ'
	}
}
