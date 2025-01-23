import useMedia from '../../hooks/useMedia'
import useModal from '../../hooks/useModal'
import { LogoType } from '../../shared/components/LogoType'
import Modal from '../../shared/components/Modal/Modal'
import MobileMenu from '../mobileMenu/MobileMenu'
import { Burger } from './components/Burger'
import { LogoutButton } from './components/LogoutButton'
import NavBarHeader from './components/NavBarHeader/NavBarHeader'

import styles from './Header.module.scss'

const Header = () => {
	const [isOpen, toggleModal] = useModal()
	const {isDesktop} = useMedia()

	return (
		<div className={styles.header}>
			<LogoType />
			{!isDesktop ? (<Burger openModal={toggleModal} />) : (<><NavBarHeader/>  <LogoutButton /></>)}
			{isOpen && (
				<Modal onClose={toggleModal}>
					<MobileMenu onClose={toggleModal} />
				</Modal>
			)}
		</div>
	)
}

export default Header
