import ButtonCard from '../ButtonCard/ButtonCard'
import styles from './CardShop.module.scss'
import {   useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {   selectVisibleProducts } from '../../../../redux/Products/selectors'
import { useEffect } from 'react'
import { fetchProducts } from '../../../../redux/Products/operations'

const CardShop = () => {
	const visibleProducts = useSelector(selectVisibleProducts)
	const dispatch = useDispatch()
	const navigate = useNavigate()
	useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

	const handleViewDetails = medicineId => {
		navigate(`/medicine/${medicineId}`)
	}

	return (
		<div className={styles.cardShopSection}>
			{visibleProducts.map((product) => (
				<div key={product._id} className={styles.productCard}>
					<img
						src={product.photo}
						alt={product.name}
						className={styles.imgShop}
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
