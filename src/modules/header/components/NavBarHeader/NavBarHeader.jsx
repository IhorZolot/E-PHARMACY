import linksData from '../../../../shared/Data/side-link-data'
import styles from './NavBarHeader.module.scss'
// import UnionMenu from '../../../../assets/icons/UnionMenu.svg'

const NavBarHeader = () => {
  return (
    <div className={styles.sideBarHeader}>
        {/* <img src={UnionMenu} alt='UnionMenu'/> */}
        {linksData.map((item, index) =>(<button key={index} className={styles.divLink}>
        <span className={styles.span} >{item.name}</span>
      </button>) )}
    </div>
  )
}

export default NavBarHeader