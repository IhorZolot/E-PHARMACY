import styles from './CardOneProduct.module.scss'
import altImage from '@assets/images/altImage.png'
import ButtonCard from '../../shop/components/ButtonCard/ButtonCard'

const CardOneProduct = () => {
	return (
		<div className={styles.cardShop}>
			<img src={altImage} alt='Product' className={styles.imgShop} />
			<div className={styles.infoShop}>
				<div className={styles.titleShopBox}>
					<div className={styles.titleBox}>
						<h4 className={styles.titleShop}>Name</h4>
						<p className={styles.suppliersShop}>Category</p>
					</div>
					<p className={styles.priceShop}>$Price</p>
				</div>
				<div className={styles.buttonShopBox}>
					<ButtonCard>Add to shop</ButtonCard>
				</div>
			</div>
		</div>
	)
}

export default CardOneProduct
