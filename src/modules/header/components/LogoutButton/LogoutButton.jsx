import { useDispatch } from 'react-redux'
import styles from './LogoutButton.module.scss'
import { logoutThunk } from '@redux/User/operations'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
const LogoutButton = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleExit = () => {
		dispatch(logoutThunk()).unwrap().then(
			() => {
				navigate('/login')
				toast.success('You are logged out')
			}
		)
	
	}
	return (
		<button className={styles.logoutButton} onClick={handleExit}>
			Log out
		</button>
	)
}

export default LogoutButton
