import type { LegalCopy } from '../../i18n/translations/legal'
import { Section } from '../ui/Section'
import { Badge } from '../ui/Badge'

interface LegalPageLayoutProps {
	copy: LegalCopy
}

export function LegalPageLayout({ copy }: LegalPageLayoutProps) {
	return (
		<Section halftone borderY className="bg-paper-cream dark:bg-off-black py-20">
			<div className="max-w-3xl mx-auto">
				<Badge className="bg-vintage-green text-white mb-6 inline-block">{copy.badge}</Badge>
				<h1 className="text-display-lg font-display uppercase text-off-black dark:text-paper-cream mb-4">
					{copy.title}
				</h1>
				<p className="text-label-mono font-mono opacity-60 mb-10">
					{copy.updatedLabel}: {copy.updatedDate}
				</p>
				<p className="text-body-lg font-body opacity-80 mb-16">{copy.intro}</p>
				<div className="space-y-12">
					{copy.sections.map((section) => (
						<div key={section.heading} className="space-y-4">
							<h2 className="text-headline-md font-display uppercase text-off-black dark:text-paper-cream">
								{section.heading}
							</h2>
							{section.body.map((paragraph, index) => (
								<p key={index} className="text-body-md font-body opacity-80">
									{paragraph}
								</p>
							))}
						</div>
					))}
				</div>
			</div>
		</Section>
	)
}
