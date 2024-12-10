import { NavLink } from 'react-router-dom'
import linksData from 'shared/data/side-link-data'
import styles from './NavBarHeader.module.scss'

const NavBarHeader = () => {
	return (
		<div className={styles.sideBarHeader}>
			{linksData.map((link, index) => (
				<NavLink key={index} to={link.path} className={styles.divLink}>
					<span className={styles.span}>{link.name}</span>
				</NavLink>
			))}
		</div>
	)
}

export default NavBarHeader
