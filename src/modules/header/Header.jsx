import {LogoType} from '../../shared/components/LogoType'
import {Burger} from './components/Burger'
import { LogoutButton } from './components/LogoutButton'
import { SideBarHeader } from './components/SideBarHeader'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.header} >
      <LogoType/>
      <SideBarHeader/>
      <LogoutButton/>
      <Burger/>
    </div>
  )
}

export default Header