interface ProductLogoPanelProps {
	logoSrc: string
	productName: string
	className?: string
}

export function ProductLogoPanel({ logoSrc, productName, className = '' }: ProductLogoPanelProps) {
	return (
		<div
			className={`flex items-center justify-center rounded-card border-2 border-off-black dark:border-paper-cream/70 bg-vintage-green p-8 brutalist-shadow-lg ${className}`}
		>
			<div className="w-full max-w-sm rounded-card bg-white p-8">
				<img src={logoSrc} alt={productName} className="w-full" />
			</div>
		</div>
	)
}
