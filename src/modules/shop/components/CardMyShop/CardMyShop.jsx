import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import styles from './CardMyShop.module.scss'
import { ButtonCard } from '../ButtonCard'
import { fetchShopProducts } from '@redux/ShopProducts/operations'
import { selectShopProducts } from '@redux/ShopProducts/selectors'

const CardMyShop = () => {
	const shopProducts = useSelector(selectShopProducts)
	const { shopId } = useParams()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchShopProducts(shopId))
	}, [dispatch, shopId])

	if (!shopProducts || shopProducts.length === 0) {
		return <p>No products available</p>
	}
	const placeholderImage = '/src/assets/images/altImage.png'
	return (
		<>
			{shopProducts.map(product => (
				<div key={product._id} className={styles.cardShop}>
					<img src={product.photo ? product.photo : placeholderImage} alt={product.name} className={styles.imgShop} />
					<div className={styles.infoShop}>
						<div className={styles.titleShopBox}>
							<div className={styles.titleBox}>
								<h4 className={styles.titleShop}>{product.name}</h4>
								<p className={styles.priceShop}>${product.price}</p>
							</div>
							<p className={styles.suppliersShop}>{product.category}</p>
						</div>
						<div className={styles.buttonShopBox}>
							<ButtonCard>Edit</ButtonCard>
							<ButtonCard isStyle>Delete</ButtonCard>
						</div>
					</div>
				</div>
			))}
		</>
	)
}

export default CardMyShop
