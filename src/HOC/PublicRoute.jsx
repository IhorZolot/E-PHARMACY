import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { selectIsLoggedIn } from '../redux/User/selectors'
import { ROUTES } from '../config/routes'

const PublicRoute = ({ children }) => {
	const isLoggedIn = useSelector(selectIsLoggedIn)
	if (isLoggedIn === undefined) return null
	return !isLoggedIn ? children : <Navigate to={ROUTES.HOME} />
}

export default PublicRoute
