import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { refreshThunk } from './redux/User/operations'
import { Loader } from './shared/components/Loader'
import { ROUTES } from './config/routes'
import { selectIsRefreshing } from './redux/User/selectors'
import './App.scss'
import ShopPage from './pages/ShopPage'
import StatisticsPage from './pages/StatisticsPage'
import NotFoundPage from './pages/NotFoundPage'
import SharedLayout from './shared/components/SharedLayout/SharedLayout'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import CreateShopPage from './pages/CreateShopPage/CreateShopPage'
import EditShopPage from './pages/EditShopPage/EditShopPage'
import AllDrugsPage from './pages/AllDrugsPage/AllDrugsPage'
import CardMyShop from './modules/shop/components/CardMyShop/CardMyShop'
import MedicinePage from './pages/MedicinePage/MedicinePage'
import Description from './modules/medicine/DetailsCard/Description'
import Reviews from './modules/medicine/DetailsCard/Reviews'
import LoginPage from './pages/LoginPage/LoginPage'
import { PrivateRoute, PublicRoute } from './HOC'

function App() {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const isRefresh = useSelector(selectIsRefreshing)
	const { pathname } = useLocation()

	useEffect(() => {
		dispatch(refreshThunk())
	}, [dispatch])

	useEffect(() => {
		window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
	}, [pathname])

	useEffect(() => {
		if (pathname === '/' && window.history.length <= 1) {
			navigate('/shop/create', { replace: true })
		}
	}, [pathname, navigate])

	return isRefresh ? (
		<Loader />
	) : (
		<Suspense fallback={<Loader />}>
			<Routes>
				<Route
					path={ROUTES.LOGIN}
					element={
						<PublicRoute>
							<LoginPage />
						</PublicRoute>
					}
				/>
				<Route
					path={ROUTES.REGISTER}
					element={
						<PublicRoute>
							<RegisterPage />
						</PublicRoute>
					}
				/>

				<Route
					path='/'
					element={
						<PrivateRoute>
							<SharedLayout />
						</PrivateRoute>
					}
				>
					<Route path='shop/create' element={<CreateShopPage />} />
					<Route path='shop/:shopId/update' element={<EditShopPage />} />
					<Route path='shop/:shopId' element={<ShopPage />}>
						<Route index element={<AllDrugsPage />} />
						<Route path='product' element={<CardMyShop />} />
					</Route>
					<Route path='/medicine/:medicineId' element={<MedicinePage />}>
						<Route index element={<Description />} />
						<Route path='description' element={<Description />} />
						<Route path='reviews' element={<Reviews />} />
					</Route>
					<Route path='/statistic' element={<StatisticsPage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Route>
			</Routes>
		</Suspense>
	)
}

export default App
