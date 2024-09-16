import { CreateShopForm } from './components/CreateShopForm'
import { EditShopForm } from './components/EditShopForm'
import { ImageShop } from './components/ImageShop'
import {TitleShop} from './components/TitleShop'

import styles from './Shop.module.scss'

const Shop = () => {
	return (
		<div className={styles.shopSection}>
			<div className={styles.titleFormSection}>
			<TitleShop />
			<CreateShopForm />
      <EditShopForm/>
			</div>
			<ImageShop/>
		</div>
	)
}

export default Shop
