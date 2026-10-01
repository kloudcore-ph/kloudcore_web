import type { Translations } from '../types'

interface HowItWorksCopy {
	hero: {
		title: string
		subtitle: string
	}
	steps: { number: string; title: string; description: string }[]
	capabilitiesHeading: string
	capabilities: { title: string; description: string }[]
	cta: {
		heading: string
		subtitle: string
		button: string
	}
}

export const howItWorksCopy: Translations<HowItWorksCopy> = {
	en: {
		hero: {
			title: 'Where the magic happens',
			subtitle:
				"Three steps between 'let's remember this' and a shared album everyone can revisit."
		},
		steps: [
			{
				number: '01',
				title: 'Scan & Join',
				description:
					'Every event gets an auto-generated QR ticket. Scan it, sign in with Google, and you\'re in. No app store, no new password.'
			},
			{
				number: '02',
				title: 'Capture & Upload',
				description:
					'Take photos with the in-app camera (with optional GPS) or upload straight from your camera roll.'
			},
			{
				number: '03',
				title: 'Relive Together',
				description:
					"Everyone's photos land in one day-by-day timeline, with a map view pinned by location and emoji reactions."
			}
		],
		capabilitiesHeading: 'Advanced capabilities',
		capabilities: [
			{
				title: 'Map View',
				description: 'See every photo pinned exactly where it was taken.'
			},
			{
				title: 'Day-by-Day Timeline',
				description: 'Photos group themselves by day automatically: Day 1, Day 2, Day 3...'
			},
			{
				title: 'Reactions & Attribution',
				description: 'Know who took what, and react with a tap.'
			},
			{
				title: 'Installable PWA',
				description: 'Add it to your home screen. No app store, no update prompts.'
			}
		],
		cta: {
			heading: 'Ready to start your first album?',
			subtitle: 'Tayo is live now. Create an event and share the QR code with your group.',
			button: 'Explore Tayo'
		}
	},
	ja: {
		hero: {
			title: 'マジックが起こる場所',
			subtitle: '「これは残しておきたい」から、みんなで見返せる共有アルバムまで、たった3ステップ。'
		},
		steps: [
			{
				number: '01',
				title: 'スキャン&参加',
				description:
					'各イベントには自動生成されたQRチケットがあります。スキャンしてGoogleでサインインするだけ。アプリストアも新しいパスワードも不要です。'
			},
			{
				number: '02',
				title: '撮影&アップロード',
				description: 'アプリ内カメラ（GPSはオプション）で撮影するか、カメラロールから直接アップロード。'
			},
			{
				number: '03',
				title: 'ともに振り返る',
				description:
					'みんなの写真がひとつの日ごとのタイムラインに集まり、地図表示や絵文字リアクションも使えます。'
			}
		],
		capabilitiesHeading: '高度な機能',
		capabilities: [
			{
				title: 'マップビュー',
				description: '撮影された場所に写真がぴったりピンされます。'
			},
			{
				title: '日ごとのタイムライン',
				description: '写真は自動的に日ごとにグループ化されます。Day 1、Day 2、Day 3...'
			},
			{
				title: 'リアクション&投稿者表示',
				description: '誰が撮ったかがわかり、タップひとつでリアクションできます。'
			},
			{
				title: 'インストール可能なPWA',
				description: 'ホーム画面に追加できます。アプリストアも更新の催促もありません。'
			}
		],
		cta: {
			heading: '最初のアルバムを始めませんか？',
			subtitle: 'Tayoは今すぐ使えます。イベントを作成してQRコードをグループに共有しましょう。',
			button: 'Tayoを見る'
		}
	}
}
