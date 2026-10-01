import type { Translations } from '../types'

export interface LegalSection {
	heading: string
	body: string[]
}

export interface LegalCopy {
	title: string
	updatedLabel: string
	updatedDate: string
	intro: string
	sections: LegalSection[]
}

export const privacyCopy: Translations<LegalCopy> = {
	en: {
		title: 'Privacy Policy',
		updatedLabel: 'Last updated',
		updatedDate: 'August 12, 2026',
		intro:
			'Kloudcore ("Kloudcore", "we", "us", or "our") builds Tayo and other apps designed to help you share real moments with the people who matter. This policy explains what information we collect, how we use it, and the choices you have.',
		sections: [
			{
				heading: '1. Information We Collect',
				body: [
					'Account information: when you register for Tayo, Kloudcore Web, or any related product, we collect your name, email address, and any profile details you choose to add.',
					'Content you share: photos, posts, comments, and messages you create within our apps, along with metadata such as timestamps and the community or event they belong to.',
					'Usage data: how you interact with our apps and site, including pages viewed, features used, and device or browser information.',
					'Communications: messages you send us for support, feedback, or when you join our mailing list.'
				]
			},
			{
				heading: '2. How We Use Your Information',
				body: [
					'To operate, maintain, and improve Tayo, Kloudcore Web, and our other products.',
					'To personalize your experience and show you content relevant to your communities and events.',
					'To communicate with you about updates, security notices, and, where you have opted in, product news.',
					'To detect, investigate, and prevent fraud, abuse, and violations of our Terms of Service.'
				]
			},
			{
				heading: '3. Sharing & Disclosure',
				body: [
					'We do not sell your personal information.',
					'We share information with service providers who help us run our infrastructure (such as hosting and analytics), under contracts that limit their use of your data to providing services to us.',
					'We may disclose information if required by law, or to protect the rights, safety, and property of Kloudcore, our users, or the public.',
					'If Kloudcore is involved in a merger, acquisition, or asset sale, your information may be transferred as part of that transaction, subject to this policy.'
				]
			},
			{
				heading: '4. Data Retention',
				body: [
					'We retain your information for as long as your account is active or as needed to provide our services. You may request deletion of your account and associated data at any time, subject to legal or operational requirements to retain certain records.'
				]
			},
			{
				heading: '5. Your Rights & Choices',
				body: [
					'You can access, update, or delete your profile information from within the app at any time.',
					'You can opt out of marketing communications by using the unsubscribe link in any email or by contacting us directly.',
					'Depending on where you live, you may have additional rights over your personal data, such as the right to request a copy of your data or object to certain processing. Contact us to exercise these rights.'
				]
			},
			{
				heading: '6. Cookies & Similar Technologies',
				body: [
					'Kloudcore Web uses cookies and similar technologies to keep you signed in, remember your preferences (such as language and theme), and understand how our site is used. You can control cookies through your browser settings.'
				]
			},
			{
				heading: '7. Data Security',
				body: [
					'We use industry-standard technical and organizational measures to protect your information. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.'
				]
			},
			{
				heading: "8. Children's Privacy",
				body: [
					'Our products are not directed to children under 13, and we do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us so we can remove it.'
				]
			},
			{
				heading: '9. Changes to This Policy',
				body: [
					'We may update this policy from time to time. If we make material changes, we will notify you through the app or by email before the changes take effect.'
				]
			},
			{
				heading: '10. Contact Us',
				body: [
					'If you have questions about this policy or how we handle your data, contact us at hello@kloudcore.com.'
				]
			}
		]
	},
	ja: {
		title: 'プライバシーポリシー',
		updatedLabel: '最終更新日',
		updatedDate: '2026年8月12日',
		intro:
			'Kloudcore（以下「Kloudcore」「当社」といいます）は、大切な人と本当の瞬間を共有できるTayoをはじめとするアプリを開発しています。本ポリシーでは、当社が収集する情報の内容、その利用方法、および利用者が持つ選択肢について説明します。',
		sections: [
			{
				heading: '1. 収集する情報',
				body: [
					'アカウント情報：Tayo、Kloudcore Web、または関連製品にご登録いただく際に、お名前、メールアドレス、任意で追加されたプロフィール情報を収集します。',
					'共有されるコンテンツ：アプリ内で作成される写真、投稿、コメント、メッセージ、およびタイムスタンプや関連するコミュニティ・イベントなどのメタデータ。',
					'利用状況データ：閲覧したページ、利用した機能、デバイスやブラウザ情報など、アプリやサイトとの関わり方に関するデータ。',
					'お問い合わせ内容：サポート、フィードバック、またはメーリングリスト登録時に送信いただくメッセージ。'
				]
			},
			{
				heading: '2. 情報の利用目的',
				body: [
					'Tayo、Kloudcore Web、その他の製品の運営、維持、改善のため。',
					'利用者の体験をパーソナライズし、関連するコミュニティやイベントのコンテンツを表示するため。',
					'アップデートやセキュリティに関する通知、また同意いただいた場合は製品ニュースをお伝えするため。',
					'不正行為や規約違反を検知、調査、防止するため。'
				]
			},
			{
				heading: '3. 情報の共有・開示',
				body: [
					'当社は個人情報を販売することはありません。',
					'インフラ運用（ホスティングや分析など）を支援するサービス提供者と情報を共有することがありますが、契約により当社への提供業務以外での利用を制限しています。',
					'法令に基づき必要な場合、または当社、利用者、公共の権利・安全・財産を保護するために必要な場合、情報を開示することがあります。',
					'Kloudcoreが合併、買収、事業譲渡に関わる場合、本ポリシーに従い、情報が譲渡先に引き継がれることがあります。'
				]
			},
			{
				heading: '4. データの保存期間',
				body: [
					'アカウントが有効である間、またはサービス提供に必要な期間、情報を保存します。法令または運用上の理由で一部の記録の保持が必要な場合を除き、いつでもアカウントおよび関連データの削除を依頼できます。'
				]
			},
			{
				heading: '5. 利用者の権利と選択肢',
				body: [
					'アプリ内からいつでもプロフィール情報の閲覧、変更、削除が可能です。',
					'メール内の配信停止リンク、または当社への直接連絡により、マーケティング目的の連絡を停止できます。',
					'お住まいの地域によっては、データのコピーの請求や特定の処理への異議申し立てなど、追加の権利が認められる場合があります。これらの権利を行使する場合は当社までご連絡ください。'
				]
			},
			{
				heading: '6. Cookie等の技術について',
				body: [
					'Kloudcore Webでは、ログイン状態の維持、言語やテーマなどの設定の記憶、サイト利用状況の把握のためにCookie等の技術を使用しています。ブラウザの設定によりCookieを管理できます。'
				]
			},
			{
				heading: '7. データセキュリティ',
				body: [
					'当社は業界標準の技術的・組織的対策により情報を保護していますが、通信または保存方法において完全な安全性を保証することはできません。'
				]
			},
			{
				heading: '8. お子様のプライバシー',
				body: [
					'当社製品は13歳未満のお子様を対象としておらず、13歳未満のお子様から意図的に個人情報を収集することはありません。お子様が個人情報を提供したと思われる場合は、削除のため当社までご連絡ください。'
				]
			},
			{
				heading: '9. 本ポリシーの変更',
				body: [
					'本ポリシーは随時更新される場合があります。重要な変更を行う際は、変更が適用される前にアプリ内またはメールにて通知します。'
				]
			},
			{
				heading: '10. お問い合わせ',
				body: [
					'本ポリシーまたは当社のデータの取り扱いについてご質問がある場合は、hello@kloudcore.com までご連絡ください。'
				]
			}
		]
	}
}

export const termsCopy: Translations<LegalCopy> = {
	en: {
		title: 'Terms of Service',
		updatedLabel: 'Last updated',
		updatedDate: 'August 12, 2026',
		intro:
			'These Terms of Service ("Terms") govern your access to and use of Tayo, Kloudcore Web, and any other products or services operated by Kloudcore ("Kloudcore", "we", "us", or "our"). By using our services, you agree to these Terms.',
		sections: [
			{
				heading: '1. Acceptance of Terms',
				body: [
					'By creating an account or using any Kloudcore product, you confirm that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree, please do not use our services.'
				]
			},
			{
				heading: '2. Description of Service',
				body: [
					'Kloudcore builds Tayo and related apps that let you build communities, organize events, and share real photos and moments with the people who matter to you. We may add, change, or remove features at any time.'
				]
			},
			{
				heading: '3. Accounts & Eligibility',
				body: [
					'You must provide accurate information when creating an account and keep it up to date.',
					'You are responsible for maintaining the confidentiality of your login credentials and for all activity that occurs under your account.',
					'You must be at least 13 years old to use our services, or the minimum age required in your country to consent to use of online services.'
				]
			},
			{
				heading: '4. User Conduct',
				body: [
					'You agree not to use our services to post unlawful, harassing, or infringing content, impersonate others, disrupt or interfere with the security of our services, or attempt to access accounts or data that are not yours.',
					'We reserve the right to remove content or suspend accounts that violate these Terms.'
				]
			},
			{
				heading: '5. User Content & License',
				body: [
					'You retain ownership of the photos, posts, and other content you share ("User Content").',
					'By posting User Content, you grant Kloudcore a worldwide, non-exclusive, royalty-free license to host, store, reproduce, and display that content solely for the purpose of operating and improving our services.',
					'You are solely responsible for the User Content you share and confirm that you have the necessary rights to share it.'
				]
			},
			{
				heading: '6. Intellectual Property',
				body: [
					'The Kloudcore name, logo, Tayo brand, and all associated software and design are the property of Kloudcore and may not be used without our prior written permission.'
				]
			},
			{
				heading: '7. Termination',
				body: [
					'You may stop using our services and delete your account at any time. We may suspend or terminate your access if you violate these Terms or if we discontinue a product, with notice where reasonably practicable.'
				]
			},
			{
				heading: '8. Disclaimers & Limitation of Liability',
				body: [
					'Our services are provided "as is" without warranties of any kind, whether express or implied.',
					'To the maximum extent permitted by law, Kloudcore is not liable for any indirect, incidental, or consequential damages arising from your use of our services.'
				]
			},
			{
				heading: '9. Changes to These Terms',
				body: [
					'We may update these Terms from time to time. If we make material changes, we will notify you through the app or by email before the changes take effect. Continued use of our services after changes take effect constitutes acceptance of the updated Terms.'
				]
			},
			{
				heading: '10. Governing Law',
				body: [
					'These Terms are governed by applicable law in the jurisdiction where Kloudcore is established, without regard to conflict-of-law principles.'
				]
			},
			{
				heading: '11. Contact Us',
				body: ['If you have questions about these Terms, contact us at hello@kloudcore.com.']
			}
		]
	},
	ja: {
		title: '利用規約',
		updatedLabel: '最終更新日',
		updatedDate: '2026年8月12日',
		intro:
			'本利用規約（以下「本規約」）は、Kloudcore（以下「当社」）が運営するTayo、Kloudcore Web、その他の製品・サービスの利用に適用されます。当社のサービスをご利用いただくことで、本規約に同意したものとみなされます。',
		sections: [
			{
				heading: '1. 規約への同意',
				body: [
					'アカウントを作成する、またはKloudcoreの製品を利用することにより、本規約およびプライバシーポリシーを読み、理解し、これに拘束されることに同意したものとみなされます。同意いただけない場合は、当社サービスをご利用いただけません。'
				]
			},
			{
				heading: '2. サービスの内容',
				body: [
					'Kloudcoreは、コミュニティの構築、イベントの企画、大切な人との写真や瞬間の共有を可能にするTayoおよび関連アプリを提供しています。機能は予告なく追加、変更、削除されることがあります。'
				]
			},
			{
				heading: '3. アカウントと利用資格',
				body: [
					'アカウント作成時には正確な情報を提供し、常に最新の状態に保つ必要があります。',
					'ログイン情報の機密保持、およびアカウント上で行われるすべての活動について、利用者ご自身が責任を負います。',
					'当社サービスの利用には13歳以上であること、または居住国におけるオンラインサービス利用への同意に必要な最低年齢を満たしていることが必要です。'
				]
			},
			{
				heading: '4. 禁止事項',
				body: [
					'違法・嫌がらせ・権利侵害となるコンテンツの投稿、他者へのなりすまし、サービスのセキュリティを妨げる行為、他人のアカウントやデータへの不正アクセスを行わないことに同意していただきます。',
					'本規約に違反するコンテンツの削除、またはアカウントの停止を行う権利を当社は留保します。'
				]
			},
			{
				heading: '5. ユーザーコンテンツとライセンス',
				body: [
					'共有した写真、投稿、その他のコンテンツ（以下「ユーザーコンテンツ」）の権利は利用者に帰属します。',
					'ユーザーコンテンツを投稿することにより、サービスの運営・改善のためにのみ、当該コンテンツをホスティング、保存、複製、表示する世界的、非独占的、ロイヤリティフリーのライセンスをKloudcoreに付与するものとします。',
					'利用者は、共有するユーザーコンテンツについて単独で責任を負い、共有に必要な権利を有していることを保証するものとします。'
				]
			},
			{
				heading: '6. 知的財産権',
				body: [
					'Kloudcoreの名称、ロゴ、Tayoブランド、および関連するソフトウェア・デザインはKloudcoreに帰属し、当社の事前の書面による許可なく使用することはできません。'
				]
			},
			{
				heading: '7. 利用終了',
				body: [
					'利用者はいつでもサービスの利用を停止し、アカウントを削除することができます。当社は、本規約違反があった場合、または製品の提供を終了する場合、合理的に可能な範囲で事前に通知の上、アクセスを停止または終了することがあります。'
				]
			},
			{
				heading: '8. 免責事項および責任の制限',
				body: [
					'当社サービスは「現状有姿」で提供され、明示または黙示を問わずいかなる保証も行いません。',
					'法令で認められる最大限の範囲において、当社サービスの利用に起因する間接的、付随的、結果的損害について当社は責任を負いません。'
				]
			},
			{
				heading: '9. 本規約の変更',
				body: [
					'本規約は随時更新される場合があります。重要な変更を行う際は、変更が適用される前にアプリ内またはメールにて通知します。変更適用後もサービスの利用を継続した場合、変更後の規約に同意したものとみなされます。'
				]
			},
			{
				heading: '10. 準拠法',
				body: [
					'本規約は、抵触法の原則にかかわらず、Kloudcoreの所在地における適用法に準拠します。'
				]
			},
			{
				heading: '11. お問い合わせ',
				body: ['本規約についてご質問がある場合は、hello@kloudcore.com までご連絡ください。']
			}
		]
	}
}
