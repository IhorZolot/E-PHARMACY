import { CreateShopForm } from './components/CreateShopForm'
import { ImageShop } from './components/ImageShop'
import { TitleShop } from './components/TitleShop'
import styles from './Shop.module.scss'
const CreateShop = () => {
  return (
    <div className={styles.shopSection}>
			<div className={styles.titleFormSection}>
			<TitleShop />
			<CreateShopForm />
			</div>
			<ImageShop/>
		</div>
  )
}

export default CreateShop