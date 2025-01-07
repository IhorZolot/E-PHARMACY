import clsx from 'clsx'
import { useLocation } from 'react-router-dom'

import { OverlayLoginPage } from './components/OverlayLoginPage'
import WhitePill from '../../assets/icons/WhitePill.svg'
import styles from './Login.module.scss'
import { LogoType } from '../../shared/components/LogoType'
import { SignupForm } from './components/SignupForm'
import { SigninForm } from './components/SigninForm'

const Login = () => {
	const location = useLocation()
	const isLoginPage = location.pathname === '/login'

	return (
		<div className={clsx(styles.loginSection, styles.container)}>
			<LogoType />
			<div>
				<div className={styles.titleSection}>
					<img src={WhitePill} alt='LogoPill' />
					<h1>
						Your medication, delivered Say goodbye to all <span>your healthcare</span> worries with us
					</h1>
				</div>
			</div>
			{isLoginPage ? <SigninForm /> : <SignupForm />}
			<OverlayLoginPage />
		</div>
	)
}

export default Login
