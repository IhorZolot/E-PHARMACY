import NavBar from '../../shared/components/NavBar/NavBar'
import LogoFooter from './components/LogoFooter/LogoFooter'
import SocialNetwork from './components/SocialNetwork/SocialNetwork'
import styles from './Footer.module.scss'
import useMedia from '../../hooks/useMedia'
const Footer = () => {
	const { isDesktop, isTablet } = useMedia()
	return (
		<div className={styles.fullFooter}>
			<div className={styles.footerBox}>
				<div>
					<LogoFooter />
					<p>Get the medicine to help you feel better, get back to your active life, and enjoy every moment.</p>
				</div>
				<div>
					<NavBar />
					{(isDesktop  || isTablet) && <SocialNetwork /> }
				</div>
			</div>
			<div className={styles.policyBox}>
				<span>© E-Pharmacy 2023. All Rights Reserved</span>
				<span>Privacy Policy</span>
				<span>Terms & Conditions</span>
			</div>
		</div>
	)
}

export default Footer
