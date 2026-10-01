import type { LegalCopy } from '../../i18n/translations/legal'
import { Section } from '../ui/Section'
import { Reveal } from '../motion/Reveal'

interface LegalPageLayoutProps {
	copy: LegalCopy
}

export function LegalPageLayout({ copy }: LegalPageLayoutProps) {
	return (
		<Section className="pt-16 pb-24 md:pt-24">
			<div className="max-w-3xl">
				<Reveal className="space-y-6">
					<h1 className="text-display-lg font-display text-off-black dark:text-paper-cream">
						{copy.title}
					</h1>
					<p className="text-sm font-body text-off-black/70 dark:text-inverse-on-surface/70">
						{copy.updatedLabel}: {copy.updatedDate}
					</p>
					<p className="text-body-lg font-body text-off-black/80 dark:text-inverse-on-surface/80">
						{copy.intro}
					</p>
				</Reveal>
				<div className="mt-16 space-y-12">
					{copy.sections.map((section) => (
						<div key={section.heading} className="space-y-4">
							<h2 className="text-headline-md font-display text-off-black dark:text-paper-cream">
								{section.heading}
							</h2>
							{section.body.map((paragraph, index) => (
								<p
									key={index}
									className="text-body-md font-body text-off-black/80 dark:text-inverse-on-surface/80"
								>
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
