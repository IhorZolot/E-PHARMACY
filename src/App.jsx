import { Route, Routes } from 'react-router-dom'
import { Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './App.scss'
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
import MedicinePage from './pages/MedicinePage/MedicinePage'
import { Description } from './modules/medicine/DetailsCard/Description'
import Reviews from './modules/medicine/DetailsCard/Reviews'
import { ROUTES } from './config/routes'
import { PublicRoute } from './HOC'
import { PrivateRoute } from './HOC'
import { refreshThunk } from './redux/User/operations'
import { Loader } from './shared/components/Loader'
import { selectIsRefreshing } from './redux/User/selectors'

function App() {
	const dispatch = useDispatch()
	const isRefresh = useSelector(selectIsRefreshing)
useEffect (() => {
	dispatch(refreshThunk())
}, [dispatch])

	return isRefresh ? <Loader/> : (
		<Suspense fallback={<Loader/>}>
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
					path={ROUTES.HOME}
					element={
						<PrivateRoute>
							<SharedLayout />
						</PrivateRoute>
					}
				>
					<Route index element={<CreateShopPage />} />
					<Route path={ROUTES.CREATE} element={<CreateShopPage />} />
					<Route path={ROUTES.UPDATE} element={<EditShopPage />} />
					<Route path={ROUTES.SHOP} element={<ShopPage />}>
						<Route path={ROUTES.PRODUCT} element={<CardMyShop />} />
						<Route path={ROUTES.MEDICINE} element={<AllDrugsPage />} />
					</Route>
					<Route path={ROUTES.ONE_MEDICINE} element={<MedicinePage />}>
						<Route path={ROUTES.DESCRIPTION} element={<Description />} />
						<Route path={ROUTES.REVIEWS} element={<Reviews />} />
					</Route>
					<Route path={ROUTES.STATISTICS} element={<StatisticsPage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Route>
			</Routes>
		</Suspense>
	)
}

export default App
