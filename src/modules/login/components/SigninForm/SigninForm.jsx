import { Link } from 'react-router-dom'
import styles from './SigninForm.module.scss'
const SigninForm = () => {
	return (
		<form className={styles.formBox}>
			<input placeholder='Email address' name='email' type='email' />
			<input placeholder='Password' name='password' type='password' />
			<button>Sign in</button>
			<Link to='/register'>Don`t have an account?</Link>
		</form>
	)
}

export default SigninForm
