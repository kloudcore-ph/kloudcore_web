import type { ReactNode } from 'react'
import { Reveal } from '../motion/Reveal'

export type TileTone = 'green' | 'yellow' | 'orange' | 'paper' | 'black'

const toneClasses: Record<TileTone, string> = {
	green: 'bg-vintage-green text-white',
	yellow: 'bg-retro-yellow text-off-black',
	orange: 'bg-electric-orange text-off-black',
	paper: 'bg-surface-container dark:bg-inverse-surface border border-hairline',
	black: 'bg-off-black text-white',
}

interface TileProps {
	tone: TileTone
	delay?: number
	className?: string
	children: ReactNode
}

export function Tile({ tone, delay, className = '', children }: TileProps) {
	return (
		<Reveal delay={delay} className={`flex flex-col gap-4 rounded-card p-8 ${toneClasses[tone]} ${className}`}>
			{children}
		</Reveal>
	)
}
