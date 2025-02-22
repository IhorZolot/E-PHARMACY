import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import { selectIsLoggedIn } from '../redux/User/selectors'
import { ROUTES } from '../config/routes'

const PublicRoute = ({ children }) => {
	const isLoggedIn = useSelector(selectIsLoggedIn)
	return !isLoggedIn ? children : <Navigate to={ROUTES.CREATE} />
}

export default PublicRoute
