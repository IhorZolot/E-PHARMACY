import { SpriteSVG } from '../../../../assets/icons/SpriteSVG'

import styles from './AddFormMedicine.module.scss'
import twoPills from '../../../../assets/icons/twoPills.svg'

const AddFormMedicine = () => {
	return (
		<>
			<form className={styles.addFormMedicine}>
				<h2 >Add medicine to store</h2>
				<div className={styles.addImageBox}>
          <div className={styles.addImage}>
          <img src={twoPills} alt='twoPills'/>
          </div>
					
					<button>
						<SpriteSVG name='upload' />
						Upload image
					</button>
				</div>
				<div>
					<label htmlFor='name'>Medicine Name</label>
					<input type='text' name='name' id='name' placeholder='Enter text' />
				</div>
				<div>
					<label htmlFor='price'>Price</label>
					<input type='number' name='price' id='price' placeholder='Enter text' />
				</div>
				<div>
					<label htmlFor='description'>Description</label>
					<textarea name='description' id='description' placeholder='Enter text' />
				</div>
				<div>
					<button type='submit'>Add medicine</button>
					<button type='reset'>Cancel</button>
				</div>
			</form>
		</>
	)
}

export default AddFormMedicine
