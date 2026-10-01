import type { Translations } from '../types'

interface CommunitiesCopy {
	hero: {
		title: string
		subtitle: string
		searchPlaceholder: string
		searchComingSoon: string
	}
	eventTypesHeading: string
	eventTypes: { title: string; description: string }[]
	closing: {
		heading: string
		subtitle: string
		cta: string
		ideaPrompt: string
		ideaCta: string
	}
}

export const communitiesCopy: Translations<CommunitiesCopy> = {
	en: {
		hero: {
			title: 'Find your moment',
			subtitle: 'Tayo works for any gathering worth remembering. Pick your kind of moment below.',
			searchPlaceholder: 'Search event types...',
			searchComingSoon: 'Community search is coming soon'
		},
		eventTypesHeading: 'Built for moments like',
		eventTypes: [
			{
				title: 'Trips',
				description:
					'Road trips, backpacking, family vacations. Every photo from everyone, in one place.'
			},
			{
				title: 'Weddings',
				description:
					'From getting-ready shots to the last dance, every guest adds their angle to the story.'
			},
			{
				title: 'Family Reunions',
				description:
					"Multiple generations, one shared album that doesn't get lost in a group chat."
			},
			{
				title: 'Friend Hangouts',
				description:
					"Birthdays, game nights, spontaneous meetups. Capture it before it's just a memory."
			}
		],
		closing: {
			heading: 'Planning something worth remembering?',
			subtitle: 'Start a Tayo album and invite everyone with a single QR code.',
			cta: 'Start a Tayo Album',
			ideaPrompt: 'Got an idea for a new kind of event?',
			ideaCta: 'Tell Us'
		}
	},
	ja: {
		hero: {
			title: 'あなたの瞬間を見つけよう',
			subtitle: 'Tayoは思い出に残るどんな集まりにも使えます。下から自分に合ったものを選んでください。',
			searchPlaceholder: 'イベントの種類を検索...',
			searchComingSoon: 'コミュニティ検索は近日公開'
		},
		eventTypesHeading: 'こんな瞬間のために',
		eventTypes: [
			{
				title: '旅行',
				description: 'ロードトリップ、バックパック旅行、家族旅行。みんなの写真が一箇所に。'
			},
			{
				title: '結婚式',
				description: '支度の様子から最後のダンスまで、ゲスト全員が物語に自分の視点を加えます。'
			},
			{
				title: '家族の集まり',
				description: '複数の世代がひとつの共有アルバムに。グループチャットで埋もれることはありません。'
			},
			{
				title: '友達との集まり',
				description: '誕生日、ゲームナイト、思いつきの集まり。ただの記憶になる前に残そう。'
			}
		],
		closing: {
			heading: '思い出に残る計画がありますか？',
			subtitle: 'Tayoアルバムを作成し、QRコードひとつでみんなを招待しましょう。',
			cta: 'Tayoアルバムを始める',
			ideaPrompt: '新しいイベントのアイデアがありますか？',
			ideaCta: '教えてください'
		}
	}
}
