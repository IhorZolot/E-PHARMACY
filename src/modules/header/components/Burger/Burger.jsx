import styles from './Burger.module.scss'
import { SpriteSVG } from '../../../../assets/icons/SpriteSVG'

const Burger = () => {
  return (
    <button className={styles.burger}>
      <SpriteSVG name='burger'  />
    </button>
  )
}

export default Burger