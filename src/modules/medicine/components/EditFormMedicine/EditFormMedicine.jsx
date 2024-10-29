import { SpriteSVG } from 'assets/icons/SpriteSVG'
import styles from './EditFormMedicine.module.scss'
import twoPills from 'assets/icons/twoPills.png'
import ModalButton from '../ModalButton/ModalButton'
const EditFormMedicine = () => {
	return (
		<form className={styles.editFormMedicine}>
			<h2>Edit medicine</h2>
			<div className={styles.editImageBox}>
				<img src={twoPills} alt='twoPills' />
				<button>
					<SpriteSVG name='upload' />
					Upload image
				</button>
			</div>
			<div className={styles.editInputBox}>
				<label htmlFor='name'>Medicine Name</label>
				<input type='text' name='name' id='name' placeholder='Enter text' />
			</div>
			<div className={styles.editInputBox}>
				<label htmlFor='price'>Price</label>
				<input type='number' name='price' id='price' placeholder='Enter text' />
			</div>
			<div className={styles.editInputBox}>
				<label htmlFor='description'>Description</label>
				<textarea name='description' id='description' placeholder='Enter text' />
			</div>
			<div className={styles.editInputButtonBox}>
				<ModalButton className={styles.submitButton} type='submit'>
					Save medicine
				</ModalButton>
				<ModalButton className={styles.cancelButton} type='reset'>
					Cancel
				</ModalButton>
			</div>
		</form>
	)
}

export default EditFormMedicine
