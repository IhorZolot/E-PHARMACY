import {LogoType} from '../../shared/components/LogoType'
import {Burger} from './components/Burger'
import { LogoutButton } from './components/LogoutButton'
import { NavBarHeader } from './components/NavBarHeader'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.header} >
      <LogoType/>
      {/* <NavBarHeader/> */}
      {/* <LogoutButton/> */}
      <Burger/>
    </div>
  )
}

export default Header