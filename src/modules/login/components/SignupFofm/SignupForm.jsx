import { Link } from 'react-router-dom'
import styles from './SignupForm.module.scss'
function SignupForm() {
	return (
		<form className={styles.formBox}>
			<input placeholder='User Name' name='username' type='text' />
			<input placeholder='Email address' name='email' type='email' />
			<input placeholder='Phone number' name='phone' type='tel' />
			<input placeholder='Password' name='password' type='password' />
			<button>Register</button>
			<Link to='/login'>Already have an account?</Link>
		</form>
	)
}

export default SignupForm
