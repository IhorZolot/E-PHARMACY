import { IoCloseSharp } from 'react-icons/io5'
import { CreateShopForm } from './components/CreateShopForm'
import { ImageShop } from './components/ImageShop'
import { TitleShop } from './components/TitleShop'
import styles from './Shop.module.scss'
import { useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import '../../styles/_container.scss'
const CreateShop = () => {
	const navigate = useNavigate()
	return (
		<div className={clsx(styles.shopSection,'container')}>
			<button className={styles.closeButton} type='button' onClick={() => navigate(-1)}>
				<IoCloseSharp />
			</button>
			<div className={styles.titleFormSection}>
				<TitleShop />
				<CreateShopForm />
			</div>
			<ImageShop />
		</div>
	)
}

export default CreateShop
