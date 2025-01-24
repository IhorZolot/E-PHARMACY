import { IoCloseSharp } from 'react-icons/io5'
import { EditShopForm } from './components/EditShopForm'
import { ImageShop } from './components/ImageShop'
import { TitleShop } from './components/TitleShop'
import styles from './Shop.module.scss'
import { useNavigate } from 'react-router-dom'

const EditShop = () => {
	const navigate = useNavigate()
	return (
		<section className={styles.shopSection}>
			<div className={styles.titleFormSection}>
			<button className={styles.closeButton} type='button' onClick={() => navigate(-1)}>
				<IoCloseSharp />
			</button>
				<TitleShop />
				<EditShopForm />
			</div>
			<ImageShop />
		</section>
	)
}

export default EditShop
