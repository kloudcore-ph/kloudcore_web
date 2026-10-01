import type { CalendarDaysIcon } from '@heroicons/react/24/outline'
import { Tile, type TileTone } from './Tile'

type HeroIcon = typeof CalendarDaysIcon

interface FeatureTileProps {
	tone: TileTone
	icon: HeroIcon
	title: string
	description: string
	delay?: number
	className?: string
}

export function FeatureTile({ tone, icon: Icon, title, description, delay, className }: FeatureTileProps) {
	return (
		<Tile tone={tone} delay={delay} className={className}>
			<Icon className="h-8 w-8" aria-hidden />
			<h3 className="text-headline-md font-display">{title}</h3>
			<p className="text-body-lg font-body">{description}</p>
		</Tile>
	)
}
