import styles from './LogoutButton.module.scss'
const LogoutButton = ({ onClose }) => {
	return (
		<button className={styles.logoutButton} onClick={onClose}>
			Log out
		</button>
	)
}

export default LogoutButton
