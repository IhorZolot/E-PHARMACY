import linksData from '../../data/side-link-data'
import styles from './NavBar.module.scss'

const NavBar = () => {
  return (
    <ul className={styles.navBar}>
      {linksData.map((item, index) =>(
        <li key={index}>{item.name}</li>
      ))}
    </ul>
  )
}

export default NavBar