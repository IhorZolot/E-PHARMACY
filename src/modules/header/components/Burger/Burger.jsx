import { SpriteSVG } from '../../../../assets/icons/spriteSVG'
import styles from './Burger.module.scss'

const Burger = () => {
  return (
    <button className={styles.burger}>
      <SpriteSVG name='burger'  />
    </button>
  )
}

export default Burger