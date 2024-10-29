import { SpriteSVG } from '@assets/icons/spriteSVG'
import styles from './FilterMedicine.module.scss'
const selectCategory = [
	{ id: 1, name: 'Category 1' },
	{ id: 2, name: 'Category 2' },
	{ id: 3, name: 'Category 3' },
	{ id: 4, name: 'Category 4' },
	{ id: 5, name: 'Category 5' },
]
const FilterMedicine = () => {
	return (
		<div className={styles.filterSection}>
			<div>
				<select id='category' value='' className={styles.selectCategory}>
					<option value=''>Product category</option>
					{selectCategory.map(item => (
						<option key={item.id}>{item.name}</option>
					))}
				</select>
			</div>
			<div className={styles.inputSearch}>
				<input type='text' id='search' placeholder='Search medicine' className={styles.inputField} />
				<div className={styles.iconInput}>
					<SpriteSVG name='search' />
				</div>
			</div>
			<button className={styles.filterButton}>
				<SpriteSVG name='filter' />
				Filter
			</button>
		</div>
	)
}

export default FilterMedicine
