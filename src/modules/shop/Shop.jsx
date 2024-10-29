import { useNavigate } from 'react-router-dom'
import { Button } from '../../shared/components/Button'
import { DrugButtonSector } from './components/DrugButtonSector'
import TitleMedShop from './components/TitleMedShop/TitleMedShop'
import styles from './Shop.module.scss'
import useModal from '../../hooks/useModal'
import AddFormMedicine from '../medicine/components/AddFormMedicine/AddFormMedicine'
import Modal from '../../shared/components/Modal/Modal'
import CardMyShop from './components/CardMyShop/CardMyShop'

const Shop = () => {
	const [isOpen, toggleModal] = useModal()
	const navigate = useNavigate()
	return (
		<div>
			<TitleMedShop />
			<div className={styles.sectorButtons}>
				<Button onClick={() => navigate('/shop/edit')} className={styles.buttonEdit}>
					Edit data
				</Button>
				<Button onClick={toggleModal} className={styles.buttonAdd}>
					Add medicine
				</Button>
				{isOpen && (
					<Modal onClose={toggleModal}>
						<AddFormMedicine onClose={toggleModal} />
					</Modal>
				)}
			</div>
			<DrugButtonSector />
			<CardMyShop />
		</div>
	)
}

export default Shop
