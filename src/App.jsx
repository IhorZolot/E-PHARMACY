import './App.scss'
import { MedicinePage } from './pages/MedicinePage'
import { LoginPage } from './pages/LoginPage'
import { ShopPage } from './pages/ShopPage'
import { Route, Routes } from 'react-router-dom'
import { StatisticsPage } from './pages/StatisticsPage'
import NotFoundPage from './pages/NotFoundPage'
import SharedLayout from './shared/components/SharedLayout/SharedLayout'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import CreateShopPage from './pages/CreateShopPage/CreateShopPage'
import EditShopPage from './pages/EditShopPage/EditShopPage'

function App() {
	return (
		<>
			{/* <nav style={{ display: 'flex', gap: '20px' }}>
				<Link to='/login'>Login</Link>
				<Link to='/register'>Register</Link>
				<Link to='/'>CreateShop</Link>
				<Link to='/shop/edit'>EditShop</Link>
				<Link to='/shop/:id'>Shop</Link>
				<Link to='/medicine'>Medicine</Link>
				<Link to='/statistic'>Statistic</Link>
			</nav> */}

			<Routes>
				<Route path='/login' element={<LoginPage />} />
				<Route path='/register' element={<RegisterPage />} />

				<Route path='/' element={<SharedLayout />}>
					<Route index element={<CreateShopPage />} />
					<Route path='/shop/create' element={<CreateShopPage />} />
					<Route path='/shop/edit' element={<EditShopPage />} />
					<Route path='/shop/:shopId' element={<ShopPage />} />
					<Route path='/shop/:shopId/update' element={<EditShopPage />} />
					<Route path='/medicine' element={<MedicinePage />} />
					<Route path='/statistic' element={<StatisticsPage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
