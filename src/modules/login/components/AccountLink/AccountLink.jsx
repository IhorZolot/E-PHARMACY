import { Link } from 'react-router-dom'

import styles from './AccountLink.module.scss'
const AccountLink = () => {

  return (
    <div className={styles.accountLink}>
      <span>Already have an account?</span> 
      <span>Don't have an account?</span> 

    </div>
  )
}

export default AccountLink