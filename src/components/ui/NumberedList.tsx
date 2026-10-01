import { Reveal } from '../motion/Reveal'

interface NumberedListItem {
	title: string
	description: string
}

interface NumberedListProps {
	items: NumberedListItem[]
}

function formatIndex(index: number) {
	return String(index + 1).padStart(2, '0')
}

export function NumberedList({ items }: NumberedListProps) {
	return (
		<ol className="divide-y divide-hairline">
			{items.map((item, index) => (
				<li key={item.title}>
					<Reveal className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-gutter py-8 items-baseline">
						<span className="md:col-span-2 text-headline-lg font-display text-primary">
							{formatIndex(index)}
						</span>
						<h3 className="md:col-span-4 text-headline-md font-display">{item.title}</h3>
						<p className="md:col-span-6 text-body-lg font-body text-off-black/80 dark:text-inverse-on-surface/80">
							{item.description}
						</p>
					</Reveal>
				</li>
			))}
		</ol>
	)
}
