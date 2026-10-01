import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'

const EASE_OUT_EXPO = [0.16, 1, 0.3, 1] as const
const REVEAL_DISTANCE_PX = 24

interface RevealProps {
	children: ReactNode
	delay?: number
	className?: string
}

export function Reveal({ children, delay = 0, className }: RevealProps) {
	const prefersReducedMotion = useReducedMotion()

	return (
		<motion.div
			className={className}
			initial={prefersReducedMotion ? false : { opacity: 0, y: REVEAL_DISTANCE_PX }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.6, delay, ease: EASE_OUT_EXPO }}
		>
			{children}
		</motion.div>
	)
}
