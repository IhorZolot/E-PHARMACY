import CardShop from './components/CardShop/CardShop'
import DetailsCard from './components/DetailsCard/DetailsCard'
import DrugButtonSector from './components/DrugButtonSector/DrugButtonSector'
import { FilterMedicine } from './components/FilterMedicine'

const Shop = () => {
	return (
		<div>
			{/* <TitleMedShop/> */}
			{/* <div className={styles.sectorButtons}> */}
			{/* <Button className={styles.buttonEdit} >Edit data</Button> */}
			{/* <Button className={styles.buttonAdd} >Add medicine</Button> */}
			{/* </div> */}
			<DrugButtonSector />
			<FilterMedicine />
			<CardShop />
			<DetailsCard />
		</div>
	)
}

export default Shop
