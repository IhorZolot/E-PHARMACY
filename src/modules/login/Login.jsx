import LogoType from './components/LogoType'
import { OverlayLoginPage } from './components/OverlayLoginPage'
import WhitePill from '../../assets/icons/WhitePill.svg'
import styles from './Login.module.scss'
import clsx from 'clsx'

const Login = () => {
  return (
    <div className={clsx(styles.loginSection, styles.container    )}>
      <LogoType/>
      <div className={styles.titleSection}>
        <img src={WhitePill} alt='LogoPill'/>
        <p>Your medication, delivered Say goodbye to all <span>your healthcare</span> worries with us</p>
        </div>
      
      <div>Form Register</div>
      <OverlayLoginPage/>

    </div>
  )
}

export default Login