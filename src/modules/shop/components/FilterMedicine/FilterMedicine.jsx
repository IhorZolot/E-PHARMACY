import { SpriteSVG } from '@assets/icons/spriteSVG'
import styles from './FilterMedicine.module.scss'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { fetchProducts } from '@redux/Products/operations'
import { useDispatch, useSelector } from 'react-redux'
import { selectProducts } from '@redux/Products/selectors'

const FilterMedicine = () => {
	const products = useSelector(selectProducts)
	const [valueFilter, setValueFilter] = useState('')
	const [setSearchParams] = useSearchParams()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchProducts())
	}, [dispatch])

	const selectedCategory = [...new Set(products.map((product, index) => ({ id: index, category: product.category })))]
	console.log(selectedCategory)

	const onsubmit = e => {
		e.preventDefault()
		setSearchParams({ category: e.target.category.value, query: valueFilter })
	}

	return (
		<form className={styles.filterSection} onSubmit={onsubmit}>
			<div>
				<select id='category' className={styles.selectCategory}>
					<option value=''>Product category</option>
					{selectedCategory.map(item => (
						<option key={item.id} value={item.category}>
							{item.category}
						</option>
					))}
				</select>
			</div>
			<div className={styles.inputSearch}>
				<input
					value={valueFilter}
					onChange={e => setValueFilter(e.target.value)}
					type='text'
					id='search'
					placeholder='Search medicine'
					className={styles.inputField}
				/>
				<div className={styles.iconInput}>
					<SpriteSVG name='search' />
				</div>
			</div>
			<button className={styles.filterButton}>
				<SpriteSVG name='filter' />
				Filter
			</button>
		</form>
	)
}

export default FilterMedicine
