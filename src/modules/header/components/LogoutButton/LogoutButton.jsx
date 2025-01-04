import { useDispatch } from 'react-redux'
import styles from './LogoutButton.module.scss'
import { logoutThunk } from '@redux/User/operations'
import { useNavigate } from 'react-router-dom'
const LogoutButton = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const onClose = () => {
		dispatch(logoutThunk())
		navigate('/login')
	}
	return (
		<button className={styles.logoutButton} onClick={onClose}>
			Log out
		</button>
	)
}

export default LogoutButton
