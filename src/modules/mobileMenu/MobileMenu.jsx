import { SpriteSVG } from 'assets/icons/SpriteSVG'
import { LogoutButton } from '../header/components/LogoutButton'
import { MobileBar } from './components/MobileBar'
import styles from './MobileMenu.module.scss'

const MobileMenu = ({ onClose }) => {
	return (
		<div className={styles.mobileMenu}>
			<button className={styles.closeModal} onClick={onClose}>
				<SpriteSVG name='closeModal' />
			</button>
			<MobileBar onClose={onClose} />
			<LogoutButton onClose={onClose} />
		</div>
	)
}

export default MobileMenu
