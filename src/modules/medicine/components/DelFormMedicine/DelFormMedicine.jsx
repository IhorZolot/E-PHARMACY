import twoPills from '@assets/icons/twoPills.png'
import ModalButton from '../ModalButton/ModalButton'
import styles from './DelFormMedicine.module.scss'
const DelFormMedicine = () => {
	return (
		<div className={styles.delFormMedicineBox}>
			<h2>Confirm deletion</h2>
			<p> Are you sure you want to delete this item?</p>
			<div>
				<img src={twoPills} alt='twoPills' />
				<h3>Moringa</h3>
				<span>Roofing (Asphalt)</span>
			</div>
			<div className={styles.delButtonBox}>
				<ModalButton className={styles.confirmButton} type='submit'>
					Confirm
				</ModalButton>
				<ModalButton className={styles.cancelButton} type='reset'>
					Cancel
				</ModalButton>
			</div>
		</div>
	)
}

export default DelFormMedicine
