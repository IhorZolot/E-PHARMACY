import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'

import { selectCategories } from '@redux/Products/selectors'
import { fetchCategoriesProducts, fetchFilteredProducts } from '@redux/Products/operations'
import { SpriteSVG } from '@assets/icons/spriteSVG'
import styles from './FilterMedicine.module.scss'
import { setCurrentPage, setFilters } from '../../../../redux/Products/productsSlice'

const FilterMedicine = () => {
	const dispatch = useDispatch()
	const categories = useSelector(selectCategories) ?? []
	const [selectedCategory, setSelectedCategory] = useState('')
	const [valueFilter, setValueFilter] = useState('')

	useEffect(() => {
		dispatch(fetchCategoriesProducts())
	}, [dispatch])

	const onsubmit = e => {
		e.preventDefault()
		if (!selectedCategory.trim() && !valueFilter.trim()) {
			toast.error('Please enter filter value!')
			return
		}
		const filters = {
			category: selectedCategory,
			query: valueFilter,
		}
		dispatch(setFilters(filters))
		dispatch(setCurrentPage(1))

		dispatch(fetchFilteredProducts({ ...filters, page: 1 }))
		toast.success('Filter applied successfully!')
	}

	return (
		<form className={styles.filterSection} onSubmit={onsubmit}>
			<div>
				<select
					id='category'
					className={styles.selectCategory}
					value={selectedCategory}
					onChange={e => setSelectedCategory(e.target.value)}
				>
					<option value=''>Product category</option>
					{Array.isArray(categories) &&
						categories.map(item => (
							<option key={item} value={item}>
								{item}
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
				<p>Filter</p>
			</button>
		</form>
	)
}

export default FilterMedicine
