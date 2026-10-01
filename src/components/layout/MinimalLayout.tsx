import { Link, Outlet } from 'react-router-dom'

export function MinimalLayout() {
	return (
		<div className="min-h-screen flex flex-col bg-background dark:bg-off-black text-on-background dark:text-inverse-on-surface font-body selection:bg-retro-yellow selection:text-off-black">
			<header className="border-b border-hairline h-16 flex items-center px-margin-sm md:px-margin-lg">
				<Link to="/" className="flex items-center gap-3">
					<img src="/kloudcore_new_logo.png" alt="Kloudcore" className="h-9 w-9" />
					<span className="text-headline-md font-display font-extrabold tracking-tight">
						KLOUDCORE
					</span>
				</Link>
			</header>
			<main className="flex-1">
				<Outlet />
			</main>
		</div>
	)
}
