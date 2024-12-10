import { useEffect } from 'react'
import ButtonCard from '../ButtonCard/ButtonCard'
import styles from './CardShop.module.scss'
import { fetchProducts } from '@redux/Products/operations'
import { useDispatch, useSelector } from 'react-redux'
import { selectProducts } from '@redux/Products/selectors'
import { useNavigate } from 'react-router-dom'

const CardShop = () => {
	const products = useSelector(selectProducts)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	useEffect(() => {
		dispatch(fetchProducts())
	}, [dispatch])

	const handleViewDetails = medicineId => {
		navigate(`/medicine/${medicineId}`)
	}

	return (
		<div className={styles.cardShop}>
			{products.map((product, index) => (
				<div key={index} className={styles.productCard}>
					<img
						src={product.photo}
						alt={product.name}
						className={styles.imgShop}
						onError={e => (e.target.src = '/path/to/placeholder/image.png')}
					/>
					<div className={styles.infoShop}>
						<div className={styles.titleShopBox}>
							<div className={styles.titleBox}>
								<h4 className={styles.titleShop}>{product.name}</h4>
								<p className={styles.suppliersShop}>{product.category}</p>
							</div>
							<p className={styles.priceShop}>${product.price}</p>
						</div>
						<div className={styles.buttonShopBox}>
							<ButtonCard onClick={() => handleViewDetails(product._id)}>Add to shop</ButtonCard>
							<button className={styles.buttonDetails} onClick={() => handleViewDetails(product._id)}>
								Details
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	)
}

export default CardShop
