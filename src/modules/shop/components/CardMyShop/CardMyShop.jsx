import styles from './CardMyShop.module.scss'
import { ButtonCard } from '../ButtonCard'

const CardMyShop = () => {
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
					<ButtonCard>Edit</ButtonCard>
					<ButtonCard isStyle>Delete</ButtonCard>
				</div>
			</div>
		</div>
	)
}

export default CardMyShop
