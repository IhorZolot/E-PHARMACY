import { NavLink } from 'react-router-dom'
import linksData from 'shared/data/side-link-data'
import styles from './NavBarHeader.module.scss'
// import UnionMenu from '../../../../assets/icons/UnionMenu.svg'

const NavBarHeader = () => {
	return (
		<div className={styles.sideBarHeader}>
			{/* <img src={UnionMenu} alt='UnionMenu'/> */}
			{linksData.map((link, index) => (
				<NavLink key={index} to={link.path} className={styles.divLink}>
					<span className={styles.span}>{link.name}</span>
				</NavLink>
			))}
		</div>
	)
}

export default NavBarHeader
