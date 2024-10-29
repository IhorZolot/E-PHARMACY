import useModal from '../../hooks/useModal'
import { LogoType } from '../../shared/components/LogoType'
import Modal from '../../shared/components/Modal/Modal'
import MobileMenu from '../mobileMenu/MobileMenu'
import { Burger } from './components/Burger'

import styles from './Header.module.scss'

const Header = () => {
	const [isOpen, toggleModal] = useModal()
	return (
		<div className={styles.header}>
			<LogoType />
			{/* <NavBarHeader/> */}
			<Burger openModal={toggleModal} />
			{isOpen && (
				<Modal onClose={toggleModal}>
					<MobileMenu onClose={toggleModal} />
				</Modal>
			)}
		</div>
	)
}

export default Header
