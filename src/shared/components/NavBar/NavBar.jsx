import { Link } from 'react-router-dom'
import linksData from '../../data/side-link-data'
import styles from './NavBar.module.scss'

const NavBar = () => {
	return (
		<nav className={styles.navBar}>
			{linksData.map((link, index) => (
				<Link key={index} to={link.path} className={styles.navBarLink}>
					{link.name}
				</Link>
			))}
		</nav>
	)
}

export default NavBar
