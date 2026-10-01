import { HeroSection } from '../components/home/HeroSection'
import { PrinciplesSection } from '../components/home/PrinciplesSection'
import { TayoSpotlight } from '../components/home/TayoSpotlight'
import { StepsSection } from '../components/home/StepsSection'
import { AboutSection } from '../components/home/AboutSection'
import { ClosingCta } from '../components/home/ClosingCta'

export function HomePage() {
	return (
		<>
			<HeroSection />
			<PrinciplesSection />
			<TayoSpotlight />
			<StepsSection />
			<AboutSection />
			<ClosingCta />
		</>
	)
}
