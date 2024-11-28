import { Route, Routes } from 'react-router-dom'

import './App.scss'
import { MedicinePage } from './pages/AllDrugsPage'
import { LoginPage } from './pages/LoginPage'
import { ShopPage } from './pages/ShopPage'
import { StatisticsPage } from './pages/StatisticsPage'
import NotFoundPage from './pages/NotFoundPage'
import SharedLayout from './shared/components/SharedLayout/SharedLayout'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import CreateShopPage from './pages/CreateShopPage/CreateShopPage'
import EditShopPage from './pages/EditShopPage/EditShopPage'
import AllDrugsPage from './pages/AllDrugsPage/AllDrugsPage'
import CardMyShop from './modules/shop/components/CardMyShop/CardMyShop'

function App() {
	return (
		<>
			<Routes>
				<Route path='/login' element={<LoginPage />} />
				<Route path='/register' element={<RegisterPage />} />

				<Route path='/' element={<SharedLayout />}>
					<Route index element={<CreateShopPage />} />
					<Route path='/shop/create' element={<CreateShopPage />} />
					<Route path='/shop/:shopId/update' element={<EditShopPage />} />
					<Route path='/shop/:shopId' element={<ShopPage />}>
						<Route path='product' element={<CardMyShop />} />
						<Route path='medicine' element={<AllDrugsPage />} />
					</Route>
					<Route path='/medicine' element={<MedicinePage />} />
					<Route path='/statistic' element={<StatisticsPage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
