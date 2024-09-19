import { EditShopForm } from './components/EditShopForm'
import { ImageShop } from './components/ImageShop'
import { TitleShop } from './components/TitleShop'
import styles from './Shop.module.scss'


const EditShop = () => {
  return (
   <div className={styles.shopSection}>
			<div className={styles.titleFormSection}>
			<TitleShop />
      <EditShopForm/>
			</div>
			<ImageShop/>
		</div>
  )
}

export default EditShop