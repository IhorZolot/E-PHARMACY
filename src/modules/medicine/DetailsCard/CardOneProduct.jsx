import styles from './CardOneProduct.module.scss'
import altImage from '@assets/images/altImage.png'
import ButtonCard from '../../shop/components/ButtonCard/ButtonCard'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsLoading, selectOneProduct } from '../../../redux/Products/selectors'
import { useEffect } from 'react'
import { fetchOneProduct } from '../../../redux/Products/operations'
import { addProductToShopThunk } from '../../../redux/ShopProducts/operations'
import { validationAddMedicineSchema } from '../components/AddFormMedicine/helpers/validationAddMedicineSchema'

const CardOneProduct = () => {
	const { medicineId } = useParams()
	const dispatch = useDispatch()
	const isLoading = useSelector(selectIsLoading)
	const product = useSelector(selectOneProduct)

	useEffect(() => {
		dispatch(fetchOneProduct(medicineId))
	}, [dispatch, medicineId])

	if (isLoading) {
		return <div>Loading...</div>
	}

	if (!product) {
		return <div>Product not found</div>
	}

	const addProductToShop = () => {
		try {
			const shopId = '67464de2c21ca4602aef786b'
			const validatedProduct = validationAddMedicineSchema.parse(product)
			dispatch(addProductToShopThunk({ shopId, addMedicine: validatedProduct }))
		} catch (error) {
			console.error('Failed to add product:', error.message)
		}
	}

	return (
		<div className={styles.cardShop}>
			<img src={product?.photo ? product?.photo : altImage} alt='Product' className={styles.imgShop} />
			<div className={styles.infoShop}>
				<div className={styles.titleShopBox}>
					<div className={styles.titleBox}>
						<h4 className={styles.titleShop}>{product?.name}</h4>
						<p className={styles.suppliersShop}>{product?.category}</p>
					</div>
					<p className={styles.priceShop}>${product?.price}</p>
				</div>
				<div className={styles.buttonShopBox}>
					<ButtonCard onClick={addProductToShop}>Add to shop</ButtonCard>
				</div>
			</div>
		</div>
	)
}

export default CardOneProduct
