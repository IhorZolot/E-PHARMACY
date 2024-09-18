import linksData from '../../../../shared/Data/side-link-data'
import styles from './SideBarHeader.module.scss'
// import UnionMenu from '../../../../assets/icons/UnionMenu.svg'

const SideBar = () => {
  return (
    <div className={styles.sideBarHeader}>
      {/* <img src={UnionMenu} alt='UnionMenu'/> */}
      {linksData.map((item, index) =>(<div key={index} className={styles.divLink}>
        <span className={styles.span} >{item.name}</span>
      </div>) )}
    </div>
  )
}

export default SideBar