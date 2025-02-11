import ButtonCard from '../ButtonCard/ButtonCard'
import styles from './CardShop.module.scss'
import {   useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {   selectCurrentPage, selectTotalPages, selectVisibleProducts } from '../../../../redux/Products/selectors'
import { useEffect } from 'react'
import { fetchProducts } from '../../../../redux/Products/operations'
import { Pagination, Stack } from '@mui/material'
import { setCurrentPage } from '../../../../redux/Products/productsSlice'

const CardShop = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const visibleProducts = useSelector(selectVisibleProducts)
	const currentPage = useSelector(selectCurrentPage)
	const totalPages = useSelector(selectTotalPages)
	
	useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch, currentPage ]);

	const handleViewDetails = medicineId => {
		navigate(`/medicine/${medicineId}`)
	}
	const handlePageChange = ( event, page) => {
    dispatch(setCurrentPage(page));
  };

	return (
		<div className={styles.cardShopSection}>
			{visibleProducts?.map((product) => (
				console.log('visibleProducts:', visibleProducts),
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
			<Stack spacing={2} className={styles.paginationBox} >
				<Pagination
					count={totalPages} 
          page={currentPage} 
					onChange={handlePageChange} 
            sx={{
              "& .MuiPaginationItem-root": {
                color: '#59b17a',
              },
              "& .MuiPaginationItem-root.Mui-selected": {
                backgroundColor: '#59b17a',
                color: 'white',
              },
              "& .MuiPaginationItem-root:hover": {
                backgroundColor: '#9baba1',
								color: 'white',
              }
            }}
				/>
			</Stack>
			
		</div>
	)
}

export default CardShop
