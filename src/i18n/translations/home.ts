import type { Translations } from '../types'

interface HomeCopy {
	hero: {
		titleLine1: string
		titleLine2: string
		subtitle: string
		ctaPrimary: string
		ctaSecondary: string
	}
	principles: {
		heading: string
		items: { title: string; description: string }[]
	}
	spotlight: {
		heading: string
		description: string
		timeline: { title: string; description: string }
		signIn: { title: string; description: string }
	}
	steps: {
		heading: string
		items: { number: string; title: string; description: string }[]
	}
	about: {
		statement: string
		closing: string
		values: string[]
	}
	cta: {
		heading: string
		subtitle: string
		emailLabel: string
		emailPlaceholder: string
		button: string
	}
}

export const homeCopy: Translations<HomeCopy> = {
	en: {
		hero: {
			titleLine1: 'Build apps.',
			titleLine2: 'Share memories.',
			subtitle:
				'Kloudcore is an app studio. Our first app, Tayo, turns any event into one shared photo album.',
			ctaPrimary: 'Explore Tayo',
			ctaSecondary: 'See how it works'
		},
		principles: {
			heading: 'What we build',
			items: [
				{
					title: 'Purpose-built apps',
					description:
						"Each app is designed around one real community's needs, not a one-size-fits-all platform."
				},
				{
					title: 'Smart automation',
					description: 'We handle the workflows, backend and integrations so the product just works.'
				},
				{
					title: 'AI, demystified',
					description: 'We use AI where it quietly helps, like organizing and sorting. Never as a gimmick.'
				}
			]
		},
		spotlight: {
			heading: 'Meet Tayo',
			description:
				'Turn any trip, wedding or get-together into a shared photo album, organized by day and mapped by location.',
			timeline: {
				title: 'Day-by-day timeline',
				description: 'Photos group themselves by day. No albums to manage.'
			},
			signIn: {
				title: 'Simple Google sign-in',
				description: "No new password. Scan the QR, sign in with Google and you're in."
			}
		},
		steps: {
			heading: 'Three steps to a shared album',
			items: [
				{
					number: '01',
					title: 'Scan & join',
					description:
						'Every event gets a QR ticket. Scan it and sign in with Google. No app store, no new password.'
				},
				{
					number: '02',
					title: 'Capture & upload',
					description: 'Take photos in the app, with optional GPS, or upload from your camera roll.'
				},
				{
					number: '03',
					title: 'Relive together',
					description: "Everyone's photos land in one day-by-day timeline, with a map and emoji reactions."
				}
			]
		},
		about: {
			statement:
				'Kloudcore is an app studio rebuilding human connection. We design custom apps that help communities gather, organize and support one another.',
			closing: 'No bloated features. No platform noise. Just apps that help your community thrive.',
			values: ['Connected communities', 'Human-centered tech', 'Made to gather']
		},
		cta: {
			heading: 'Ready to start sharing memories?',
			subtitle: 'Get updates when we launch new Kloudcore apps.',
			emailLabel: 'Email address',
			emailPlaceholder: 'you@email.com',
			button: 'Get updates'
		}
	},
	ja: {
		hero: {
			titleLine1: 'アプリを作り、',
			titleLine2: '思い出を共有する。',
			subtitle:
				'Kloudcoreはアプリスタジオです。第一弾のTayoは、あらゆるイベントを1つの共有フォトアルバムにします。',
			ctaPrimary: 'Tayoを見る',
			ctaSecondary: '仕組みを見る'
		},
		principles: {
			heading: '私たちがつくるもの',
			items: [
				{
					title: '目的特化型アプリ',
					description:
						'それぞれのアプリは、ひとつの実在するコミュニティのニーズのために設計されています。万能プラットフォームではありません。'
				},
				{
					title: 'スマートな自動化',
					description: 'ワークフローやバックエンド、連携といった面倒な部分を整え、プロダクトがちゃんと動くようにします。'
				},
				{
					title: 'AIを、わかりやすく',
					description: '整理や分類など、AIが静かに役立つ場面でだけ使います。ギミックとしては使いません。'
				}
			]
		},
		spotlight: {
			heading: 'Tayoを紹介します',
			description:
				'旅行、結婚式、集まりを、日ごとに整理され場所で見られる共有フォトアルバムに変えます。',
			timeline: {
				title: '日ごとのタイムライン',
				description: '写真は自動的に日ごとに整理されます。アルバムを管理する必要はありません。'
			},
			signIn: {
				title: 'かんたんGoogleサインイン',
				description: '新しいパスワードは不要。QRをスキャンしてGoogleでサインインするだけ。'
			}
		},
		steps: {
			heading: '共有アルバムまで3ステップ',
			items: [
				{
					number: '01',
					title: 'スキャンして参加',
					description:
						'イベントごとにQRチケットが自動で作られます。スキャンしてGoogleでサインインするだけ。アプリストアも新しいパスワードも不要です。'
				},
				{
					number: '02',
					title: '撮影してアップロード',
					description: 'アプリ内カメラで撮影（位置情報は任意）するか、カメラロールからアップロードします。'
				},
				{
					number: '03',
					title: 'みんなで振り返る',
					description: 'みんなの写真が日ごとのタイムラインに集まり、地図や絵文字リアクションも使えます。'
				}
			]
		},
		about: {
			statement:
				'Kloudcoreは、人と人とのつながりを再構築するアプリスタジオです。コミュニティが集まり、運営し、支え合えるアプリをデザインしています。',
			closing: '無駄な機能も、プラットフォームの騒音もありません。コミュニティが活気づくためのアプリだけをお届けします。',
			values: ['つながるコミュニティ', '人を中心にしたテクノロジー', '集まるための設計']
		},
		cta: {
			heading: '思い出の共有を始めませんか？',
			subtitle: '新しいKloudcoreアプリが公開されたらお知らせします。',
			emailLabel: 'メールアドレス',
			emailPlaceholder: 'you@email.com',
			button: '更新を受け取る'
		}
	}
}
