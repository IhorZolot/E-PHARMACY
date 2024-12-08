import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import styles from './CardMyShop.module.scss'
import { ButtonCard } from '../ButtonCard'
import { fetchShopProducts } from '@redux/ShopProducts/operations'
import { selectShopProducts } from '@redux/ShopProducts/selectors'
import { deleteProductToShopThunk } from '@redux/ShopProducts/operations'
import useModal from '../../../../hooks/useModal'
import EditFormMedicine from '../../../medicine/components/EditFormMedicine/EditFormMedicine'
import Modal from '../../../../shared/components/Modal/Modal'

const CardMyShop = () => {
	const shopProducts = useSelector(selectShopProducts)
	const { shopId } = useParams()
	const dispatch = useDispatch()
	const [isOpen, toggleModal] = useModal()
	const [editToMedicine, setEditToMedicine] = useState(null)

	const handleEditProduct = product => {
		setEditToMedicine(product)
		toggleModal()
	}

	useEffect(() => {
		dispatch(fetchShopProducts(shopId))
	}, [dispatch, shopId])
	if (!shopProducts || shopProducts.length === 0) {
		return <p>No products available</p>
	}

	const placeholderImage = '/src/assets/images/altImage.png'

	const handleDeleteProduct = productId => {
		if (!shopId || !productId) {
			console.error('shopId or productId is undefined')
			return
		}
		dispatch(deleteProductToShopThunk({ shopId, productId }))
	}

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
							<ButtonCard onClick={() => handleEditProduct(product)}>Edit</ButtonCard>
							<ButtonCard isStyle onClick={() => handleDeleteProduct(product._id)}>
								Delete
							</ButtonCard>
						</div>
						{isOpen && (
							<Modal onClose={toggleModal}>
								<EditFormMedicine medicine={editToMedicine} onClose={toggleModal} />
							</Modal>
						)}
					</div>
				</div>
			))}
		</>
	)
}

export default CardMyShop
