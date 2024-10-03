import ButtonCard from '../ButtonCard/ButtonCard'
import styles from './CardShop.module.scss'
const CardShop = () => {
	return (
		<div className={styles.cardShop}>
			<div className={styles.imgShop}>image</div>
			<div className={styles.infoShop}>
				<div className={styles.titleShopBox}>
					<div className={styles.titleBox}>
						<h4 className={styles.titleShop}>Isopro Alcohol</h4>
						<p className={styles.suppliersShop}>2.5mg</p>
					</div>
					<p className={styles.priceShop}>$5.00</p>
				</div>
				<div className={styles.buttonShopBox}>
					<ButtonCard>Add to shop</ButtonCard>
					<button className={styles.buttonDetails}>Details</button>
				</div>
			</div>
		</div>
	)
}

export default CardShop
