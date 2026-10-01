import type { Translations } from '../i18n/types'

export interface Product {
	id: string
	name: string
	logo: string
	fullLogo: string
	description: string
	url: string
}

export const tayoProduct: Translations<Product> = {
	en: {
		id: 'tayo',
		name: 'Tayo',
		logo: '/tayo-logo-icon.svg',
		fullLogo: '/tayo-logo-full.svg',
		description:
			"A shared photo album for any event. Scan a QR code, sign in with Google, and everyone's photos land in one place.",
		url: 'https://tayo.kloudcore.com'
	},
	ja: {
		id: 'tayo',
		name: 'Tayo',
		logo: '/tayo-logo-icon.svg',
		fullLogo: '/tayo-logo-full.svg',
		description:
			'あらゆるイベントのための共有フォトアルバム。QRコードをスキャンしてGoogleでサインインするだけで、みんなの写真が一箇所に集まります。',
		url: 'https://tayo.kloudcore.com'
	}
}

export const products: Translations<Product>[] = [tayoProduct]

// Point this at the newest app to change what the Join page features.
export const featuredProduct: Translations<Product> = tayoProduct
