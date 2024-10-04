import { SpriteSVG } from '../../../../assets/icons/SpriteSVG'
import styles from './AddFormMedicine.module.scss'
import twoPills from '../../../../assets/icons/twoPills.png'
import ModalButton from '../ModalButton/ModalButton'

const AddFormMedicine = () => {
	return (
			<form className={styles.addFormMedicine}>
				<h2 >Add medicine to store</h2>
				<div className={styles.addImageBox}>
          <img src={twoPills} alt='twoPills' />
					<button >
						<SpriteSVG name='upload' />
						Upload image
					</button>
				</div>
				<div className={styles.inputBox}>
					<label htmlFor='name'>Medicine Name</label>
					<input type='text' name='name' id='name' placeholder='Enter text' />
				</div>
				<div className={styles.inputBox}>
					<label htmlFor='price'>Price</label>
					<input type='number' name='price' id='price' placeholder='Enter text' />
				</div>
				<div className={styles.inputBox}>
					<label htmlFor='description'>Description</label>
					<textarea name='description' id='description' placeholder='Enter text' />
				</div>
				<div className={styles.addInputButtonBox}>
					<ModalButton className={styles.submitButton} type='submit'>Add medicine</ModalButton>
					<ModalButton className={styles.cancelButton} type='reset'>Cancel</ModalButton>
				</div>
			</form>
	)
}

export default AddFormMedicine
