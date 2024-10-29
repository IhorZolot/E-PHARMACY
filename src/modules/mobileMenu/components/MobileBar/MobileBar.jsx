import { NavLink } from 'react-router-dom'
import mobileLinksData from '../../../../shared/data/mobile-link-data'
import styles from './MobileBar.module.scss'

const MobileBar = ({ onClose }) => {
	return (
		<div className={styles.mobileBar}>
			{mobileLinksData.map((link, index) => (
				<NavLink key={index} to={link.path} className={styles.mobileBarLink} onClick={onClose}>
					<span className={styles.span}>{link.name}</span>
				</NavLink>
			))}
		</div>
	)
}
export default MobileBar
