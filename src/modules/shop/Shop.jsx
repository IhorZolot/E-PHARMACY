import { useNavigate } from 'react-router-dom'
import { Button } from '../../shared/components/Button'
import TitleMedShop from './components/TitleMedShop/TitleMedShop'
import styles from './Shop.module.scss'
import useModal from '../../hooks/useModal'
import AddFormMedicine from '../medicine/components/AddFormMedicine/AddFormMedicine'
import Modal from '../../shared/components/Modal/Modal'
import { useSelector } from 'react-redux'
import DrugLinkSector from './components/DrugLinkSector/DrugLinkSector'
import { selectShopId } from '../../redux/Shops/selectors'
import clsx from 'clsx'


const Shop = () => {
	const [isOpen, toggleModal] = useModal()
	const  shopId  = useSelector(selectShopId)
	const navigate = useNavigate()

	return (
		<section className={clsx(styles.shopSection,'container')}>
			<div>
				<div className={styles.shopBox} >
				<TitleMedShop />
			<div className={styles.sectorButtons}>
				<Button onClick={() => navigate(`/shop/${shopId}/update`)} className={styles.buttonEdit}>
					Edit data
				</Button>
				<Button onClick={toggleModal} className={styles.buttonAdd}>
					Add medicine
				</Button>
			</div>
				</div>
			<DrugLinkSector />
			</div>
			{isOpen && (
					<Modal onClose={toggleModal}>
						<AddFormMedicine onClose={toggleModal} />
					</Modal>
				)}
		</section>
	)
}

export default Shop
