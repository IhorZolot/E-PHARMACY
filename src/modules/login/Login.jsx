import clsx from 'clsx'

import LogoType from './components/LogoType'
import { OverlayLoginPage } from './components/OverlayLoginPage'
import WhitePill from '../../assets/icons/WhitePill.svg'
import styles from './Login.module.scss'
import { AccountLink } from './components/AccountLink'

const Login = () => {
  return (
    <div className={clsx(styles.loginSection, styles.container )}>
      <LogoType/>
      <div >
        <div className={styles.titleSection}>
        <img src={WhitePill} alt='LogoPill'/>
        <h1>Your medication, delivered Say goodbye to all <span>your healthcare</span> worries with us</h1>
        </div>
        </div>
      <div>Form Register</div>
      <AccountLink/>
      <OverlayLoginPage/>

    </div>
  )
}

export default Login