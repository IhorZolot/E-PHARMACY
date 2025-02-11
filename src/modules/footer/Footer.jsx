import NavBar from '../../shared/components/NavBar/NavBar'
import LogoFooter from './components/LogoFooter/LogoFooter'
import SocialNetwork from './components/SocialNetwork/SocialNetwork'
import styles from './Footer.module.scss'
import useMedia from '../../hooks/useMedia'
const Footer = () => {
	const { isTablet } = useMedia()
	return (
		<footer className={styles.fullFooter}>
			<div className={styles.footerBox}>
				<div>
					<LogoFooter />
					<p>Created a drug franchise that embodies effective formulas and changes the approach to treatment.</p>
				</div>
          <div className={styles.navBarBox}>
            <NavBar  />
						{isTablet &&<SocialNetwork />}
          </div>
			</div>
			<div className={styles.policyBox}>
				<span>© E-Pharmacy 2023. All Rights Reserved</span>
				<span>Privacy Policy</span>
				<span>Terms & Conditions</span>
			</div>
		</footer>
	)
}

export default Footer
