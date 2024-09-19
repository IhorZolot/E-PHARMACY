import Button from '../../shared/components/Button/Button'
import DrugButtonSector from './components/DrugButtonSector/DrugButtonSector'
import { FilterMedicine } from './components/FilterMedicine'
import TitleMedShop from './components/TitleMedShop/TitleMedShop'
import styles from './Shop.module.scss'

const Shop = () => {
	return (
		<div >
      <TitleMedShop/>
      <div className={styles.sectorButtons}>
      <Button className={styles.buttonEdit} >Edit data</Button>
      <Button className={styles.buttonAdd} >Add medicine</Button>
      </div>
      <DrugButtonSector/>
      <FilterMedicine/>
    </div>
	)
}

export default Shop
