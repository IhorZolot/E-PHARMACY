import { SpriteSVG } from '../../../../assets/icons/SpriteSVG'
import styles from './Burger.module.scss'

const Burger = ({ openModal }) => {
	return (
		<button className={styles.burger} onClick={openModal}>
			<SpriteSVG name='burger' />
		</button>
	)
}

export default Burger
