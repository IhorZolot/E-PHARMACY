import MedLogo from '../../../../src/assets/icons/MedLogo.svg'
import styles from './LogoType.module.scss'

const LogoType = () => {
  return (
    <div className={styles.logoSection}>
      <img src={MedLogo} alt='MedLogo'/>
      <span>E-Pharmacy</span>
    </div>
  )
}

export default LogoType