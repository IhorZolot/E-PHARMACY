import linksData from '../../../../shared/Data/side-link-data'
import styles from './SideBarHeader.module.scss'

const SideBar = () => {
  return (
    <div className={styles.sideBarHeader}>
      {linksData.map((item, index) =>(<div key={index}>
        <span>{item.name}</span>
      </div>) )}
    </div>
  )
}

export default SideBar