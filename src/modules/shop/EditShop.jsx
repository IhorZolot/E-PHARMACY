import { useNavigate } from 'react-router-dom'

import { EditShopForm } from './components/EditShopForm'
import { ImageShop } from './components/ImageShop'
import { TitleShop } from './components/TitleShop'
import styles from './Shop.module.scss'
import CloseButton from '../../shared/components/CloseButton/CloseButton'

const EditShop = () => {
	const navigate = useNavigate()

	return (
		<section className={styles.shopSection}>
			<div className={styles.titleFormSection}>
			<CloseButton onClose={() => navigate(-1)} />
				<TitleShop />
				<EditShopForm />
			</div>
			<ImageShop />
		</section>
	)
}

export default EditShop
