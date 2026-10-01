import type { Translations } from '../types'

interface ProductsCopy {
	hero: {
		title: string
		subtitle: string
	}
	flagship: {
		title: string
		description: string
		liveNow: string
		cta: string
		features: { title: string; description: string }[]
	}
	cta: {
		heading: string
		subtitle: string
		button: string
	}
}

export const productsCopy: Translations<ProductsCopy> = {
	en: {
		hero: {
			title: 'Our lineup',
			subtitle: 'We build focused apps for real communities, starting with Tayo.'
		},
		flagship: {
			title: 'Tayo: Shared Memories, Simplified',
			description:
				"Tayo turns any trip, wedding, or gathering into one shared photo album. Scan a QR code, sign in with Google, and everyone's photos land together: organized by day, pinned on a map, and easy to relive.",
			liveNow: 'Live Now',
			cta: 'Explore Tayo',
			features: [
				{
					title: 'Instant QR Invites',
					description:
						"No app to install. Scan the ticket, sign in with Google, and you're sharing photos in seconds."
				},
				{
					title: 'Day-by-Day Memory Timeline',
					description: 'Every photo sorts itself into the day it was taken. No albums to manage.'
				},
				{
					title: 'Photos Mapped by Moment',
					description: 'Switch to map view and see exactly where every memory happened.'
				}
			]
		},
		cta: {
			heading: 'Have an idea worth building?',
			subtitle:
				"We prioritize new apps based on real community needs. Tell us what you're missing.",
			button: 'Pitch Your Idea'
		}
	},
	ja: {
		hero: {
			title: 'ラインナップ',
			subtitle: '私たちは実在するコミュニティのために特化したアプリを作ります。第一弾はTayoです。'
		},
		flagship: {
			title: 'Tayo：思い出の共有を、シンプルに',
			description:
				'Tayoは旅行、結婚式、集まりをひとつの共有フォトアルバムに変えます。QRコードをスキャンしてGoogleでサインインするだけで、みんなの写真が一箇所に集まります。日ごとに整理され、地図にピンされ、簡単に振り返れます。',
			liveNow: '提供中',
			cta: 'Tayoを見る',
			features: [
				{
					title: '瞬時のQR招待',
					description: 'アプリのインストールは不要。チケットをスキャンしてGoogleでサインインすれば、数秒で写真を共有できます。'
				},
				{
					title: '日ごとの思い出タイムライン',
					description: 'すべての写真が撮影された日に自動で整理されます。アルバム管理は不要です。'
				},
				{
					title: '場所で見る写真',
					description: 'マップビューに切り替えれば、思い出が起きた場所が正確にわかります。'
				}
			]
		},
		cta: {
			heading: '作る価値のあるアイデアはありますか？',
			subtitle: '実際のコミュニティのニーズに基づいて、新しいアプリの優先順位を決めています。足りないものを教えてください。',
			button: 'アイデアを提案する'
		}
	}
}
