import { useEffect } from 'react'
import ButtonCard from '../ButtonCard/ButtonCard'
import styles from './CardShop.module.scss'
import {   useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {  selectFilteredProducts } from '../../../../redux/Products/selectors'

const CardShop = () => {
	const filteredProducts = useSelector(selectFilteredProducts); 
	const navigate = useNavigate()

	useEffect(() => {
    console.log(filteredProducts); 
  }, [filteredProducts]);

	const handleViewDetails = medicineId => {
		navigate(`/medicine/${medicineId}`)
	}

	return (
		<div className={styles.cardShop}>
			{filteredProducts.map((product) => (
				<div key={product._id} className={styles.productCard}>
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
