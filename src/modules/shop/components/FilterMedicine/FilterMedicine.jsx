import { SpriteSVG } from '@assets/icons/spriteSVG'
import styles from './FilterMedicine.module.scss'
import { useEffect, useState } from 'react'
import { fetchProducts } from '@config/adminConfig'
import { useSearchParams } from 'react-router-dom'

const FilterMedicine = () => {
	const [products, setProducts] = useState([])
	const [valueFilter, setValueFilter] = useState('')
	const [setSearchParams] = useSearchParams()

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
