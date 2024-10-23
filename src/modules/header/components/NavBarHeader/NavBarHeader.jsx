import { NavLink } from 'react-router-dom'
import linksData from '../../../../shared/Data/side-link-data'
import styles from './NavBarHeader.module.scss'
// import UnionMenu from '../../../../assets/icons/UnionMenu.svg'

const NavBarHeader = () => {
	return (
		<div className={styles.sideBarHeader}>
			{/* <img src={UnionMenu} alt='UnionMenu'/> */}
			{linksData.map((item, index) => (
				<NavLink key={index} to={item.path} className={styles.divLink}>
					<span className={styles.span}>{item.name}</span>
				</NavLink>
			))}
		</div>
	)
}

export default NavBarHeader
