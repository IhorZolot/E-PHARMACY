import './App.scss'
import { MedicinePage } from './pages/MedicinePage'
import { LoginPage } from './pages/LoginPage'
import { ShopPage } from './pages/ShopPage'
import { Link, Route, Routes } from 'react-router-dom'
import { StatisticsPage } from './pages/StatisticsPage'
import NotFoundPage from './pages/NotFoundPage'
import SharedLayout from './shared/components/SharedLayout/SharedLayout'
import RegisterPage from './pages/RegisterPage/RegisterPage'

function App() {
	return (
		<>
			<nav style={{ display: 'flex', gap: '20px' }}>
				<Link to='/'>Home</Link>
				<Link to='/login'>Login</Link>
				<Link to='/register'>Register</Link>
				<Link to='/medicine'>Medicine</Link>
				<Link to='/statistic'>Statistic</Link>
			</nav>

			<Routes>
				<Route path='/login' element={<LoginPage />} />
				<Route path='/register' element={<RegisterPage />} />

				<Route exact path='/' element={<SharedLayout />}>
					<Route index element={<ShopPage />} />
					<Route path='/medicine' element={<MedicinePage />} />
					<Route path='/statistic' element={<StatisticsPage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Route>
			</Routes>
		</>
	)
}

export default App
