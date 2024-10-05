import Logo from '../../../../assets/icons/Logo.svg'
import styles from './LogoFooter.module.scss'

const LogoFooter = () => {
  return (
    <div className={styles.logoSection}>
      <img src={Logo} alt='LogoFooter' className={styles.imgLogo} />
      <span>E-Pharmacy</span>
    </div>
  )
}

export default LogoFooter