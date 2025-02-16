import clsx from 'clsx'

import { CreateShopForm } from './components/CreateShopForm'
import { ImageShop } from './components/ImageShop'
import { TitleShop } from './components/TitleShop'
import styles from './Shop.module.scss'
import '../../styles/_container.scss'

const CreateShop = () => {

	return (
		<section className={clsx(styles.shopSection,'container')}>
			<div className={styles.titleFormSection}>
				<TitleShop />
				<CreateShopForm />
			</div>
			<ImageShop />
		</section>
	)
}

export default CreateShop
