import styles from './SigninForm.module.scss'
const SigninForm = () => {
  return (
    <form className={styles.formBox}>
      <input placeholder='Email address' name='email' type='email'/>
      <input placeholder='Password' name='password' type='password' />
      <button >Sign in</button>
      <a>Don`t have an account?</a>
    </form>
  )
}

export default SigninForm