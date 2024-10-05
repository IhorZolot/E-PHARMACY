import NavBar from '../../shared/components/NavBar/NavBar'
import LogoFooter from './components/LogoFooter/LogoFooter'
import styles from './Footer.module.scss'
const Footer = () => {
  return (
    <div className={styles.fullFooter}>
      <LogoFooter  />
      <p>Get the medicine to help you feel better, get back to your active life, and enjoy every moment.</p>
      <NavBar/>
      <div className={styles.policyBox}>
        <span>© E-Pharmacy 2023. All Rights Reserved</span>
        <span>Privacy Policy</span>
        <span>Terms & Conditions</span>
      </div>
    </div>
  )
}

export default Footer