import Button from '../../shared/components/Button/Button'
import DrugButtonSector from './components/DrugButtonSector/DrugButtonSector'
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
    </div>
	)
}

export default Shop
