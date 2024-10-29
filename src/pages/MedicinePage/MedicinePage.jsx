import CardShop from '../../modules/shop/components/CardShop/CardShop'
import { DrugButtonSector } from '../../modules/shop/components/DrugButtonSector'
import { FilterMedicine } from '../../modules/shop/components/FilterMedicine'
import TitleMedShop from '../../modules/shop/components/TitleMedShop/TitleMedShop'

const MedicinePage = () => {
	return (
		<div>
			<TitleMedShop />
			<DrugButtonSector />
			<FilterMedicine />
			<CardShop />
		</div>
	)
}

export default MedicinePage
