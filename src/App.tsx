import { Route, Routes } from 'react-router-dom'
import { MainLayout } from './components/layout/MainLayout'
import { MinimalLayout } from './components/layout/MinimalLayout'
import { UtilityBar } from './components/layout/UtilityBar'
import { HomePage } from './routes/HomePage'
import { CommunitiesPage } from './routes/CommunitiesPage'
import { HowItWorksPage } from './routes/HowItWorksPage'
import { JoinPage } from './routes/JoinPage'
import { ProductsPage } from './routes/ProductsPage'
import { PrivacyPage } from './routes/PrivacyPage'
import { TermsPage } from './routes/TermsPage'
import { NotFoundPage } from './routes/NotFoundPage'

function App() {
	return (
		<>
			<Routes>
				<Route element={<MainLayout />}>
					<Route path="/" element={<HomePage />} />
					<Route path="/communities" element={<CommunitiesPage />} />
					<Route path="/how-it-works" element={<HowItWorksPage />} />
					<Route path="/products" element={<ProductsPage />} />
					<Route path="/privacy" element={<PrivacyPage />} />
					<Route path="/terms" element={<TermsPage />} />
				</Route>
				<Route element={<MinimalLayout />}>
					<Route path="/join" element={<JoinPage />} />
				</Route>
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
			<UtilityBar />
		</>
	)
}

export default App
