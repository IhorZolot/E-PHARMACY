import { useEffect, useState } from 'react'
import ButtonCard from '../ButtonCard/ButtonCard'
import styles from './CardShop.module.scss'
import { fetchProducts } from '@config/adminConfig'

const CardShop = () => {
	const [products, setProducts] = useState([])
	useEffect(() => {
		const getProducts = async () => {
			try {
				const res = await fetchProducts()
				setProducts(res.data)
				console.log(res.data)
			} catch (error) {
				console.log('Error fetching products:', error)
			}
		}
		getProducts()
	}, [])

	return (
		<div className={styles.cardShop}>
			{products.map((product, index) => (
				<div key={index} className={styles.productCard}>
					<img src={product.photo} alt={product.name} className={styles.imgShop} />
					<div className={styles.infoShop}>
						<div className={styles.titleShopBox}>
							<div className={styles.titleBox}>
								<h4 className={styles.titleShop}>{product.name}</h4>
								<p className={styles.suppliersShop}>{product.category}</p>
							</div>
							<p className={styles.priceShop}>${product.price}</p>
						</div>
						<div className={styles.buttonShopBox}>
							<ButtonCard>Add to shop</ButtonCard>
							<button className={styles.buttonDetails}>Details</button>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default CardShop
