import { useDispatch, useSelector } from 'react-redux'
import { Pagination, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

import { selectTotalPages, selectVisibleProducts } from '@redux/Products/selectors'
import { fetchFilteredProducts } from '@redux/Products/operations'
import { fetchProducts } from '@redux/Products/operations'
import styles from './CardShop.module.scss'
import { setCurrentPage } from '@redux/Products/productsSlice'
import { selectCurrentPage, selectFilters } from '@redux/Products/selectors'
import { Button } from '@shared/components/Button'

const CardShop = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const visibleProducts = useSelector(selectVisibleProducts)
	const currentPage = useSelector(selectCurrentPage)
	const totalPages = useSelector(selectTotalPages)
	const filters = useSelector(selectFilters)

	useEffect(() => {
		if (filters.category || filters.query) {
			dispatch(fetchFilteredProducts({ ...filters, page: currentPage }))
		} else {
			dispatch(fetchProducts({ page: currentPage }))
		}
	}, [dispatch, currentPage, filters])

	const handleViewDetails = medicineId => {
		navigate(`/medicine/${medicineId}`)
	}
	const handlePageChange = (event, page) => {
		dispatch(setCurrentPage(page))
		if (filters.category || filters.query) {
			dispatch(fetchFilteredProducts({ ...filters, page }))
		} else {
			dispatch(fetchProducts({ page }))
		}
	}
	return (
		<div className={styles.cardShopSection}>
			{visibleProducts?.map(product => (
				<div key={product._id} className={styles.productCard}>
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
							<Button onClick={() => handleViewDetails(product._id)}>Add to shop</Button>
							<button className={styles.buttonDetails} onClick={() => handleViewDetails(product._id)}>
								Details
							</button>
						</div>
					</div>
				</div>
			))}
			<Stack spacing={2} className={styles.paginationBox}>
				<Pagination count={totalPages} page={currentPage} onChange={handlePageChange} className={styles.pagination} />
			</Stack>
		</div>
	)
}

export default CardShop
