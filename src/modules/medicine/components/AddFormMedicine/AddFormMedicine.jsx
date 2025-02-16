import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { validationAddMedicineSchema } from './helpers/validationAddMedicineSchema'
import { addProductToShopThunk } from '../../../../redux/ShopProducts/operations'
import CloseButton from '../../../../shared/components/CloseButton/CloseButton'
import { SpriteSVG } from '@assets/icons/spriteSVG'
import styles from './AddFormMedicine.module.scss'
import twoPills from '@assets/icons/twoPills.png'
import ModalButton from '../ModalButton/ModalButton'

const AddFormMedicine = ({ onClose }) => {
	const dispatch = useDispatch()
	const { shopId } = useParams()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(validationAddMedicineSchema),
	})

	const submit = data => {
		if (!shopId) {
			return
		}
		const formData = new FormData()

		for (const [key, value] of Object.entries(data)) {
			if (key === 'photo') {
				if (value && value.length > 0) {
					formData.append(key, value[0])
				}
			} else if (value !== undefined && value !== null && value !== '') {
				formData.append(key, value)
			}
		}

		dispatch(addProductToShopThunk({ shopId, addMedicine: formData }))
			.then(() => {
				reset()
				onClose()
			})
			.catch(err => {
				console.error('Error:', err.message)
			})
	}

	return (
		<form onSubmit={handleSubmit(submit)} className={styles.addFormMedicine}>
			<CloseButton onClose={onClose} />
			<h2>Add medicine to store</h2>
			<div className={styles.addImageBox}>
				<label>
					<img src={twoPills} alt='twoPills' />
					<div className={styles.uploadButton}>
						<SpriteSVG name='upload' />
						Upload image
					</div>
					<input type='file' accept='image/*' style={{ display: 'none' }} {...register('photo')} />
				</label>
				{errors.image && <span>{errors.image.message}</span>}
			</div>
			<div className={styles.addInputBox}>
			<div className={styles.inputBox}>
				<label htmlFor='name'>Medicine Name</label>
				<input type='text' id='name' placeholder='Enter text' {...register('name')} />
				{errors.name && <span>{errors.name.message}</span>}
			</div>
			<div className={styles.inputBox}>
				<label htmlFor='price'>Price</label>
				<input type='number' id='price' placeholder='Enter text' {...register('price', { valueAsNumber: true })} />
				{errors.price && <span>{errors.price.message}</span>}
			</div>
			<div className={styles.inputBox}>
				<label htmlFor='category'>Category</label>
				<input type='text' id='category' placeholder='Enter text' {...register('category')} />
				{errors.category && <span>{errors.category.message}</span>}
			</div>
			</div>
			<div className={styles.inputBox}>
				<label htmlFor='description'>Description</label>
				<textarea type='text' id='description' placeholder='Enter text' {...register('description')} />
				{errors.description && <span>{errors.description.message}</span>}
			</div>
			<div className={styles.addInputButtonBox}>
				<ModalButton className={styles.submitButton} type='submit'>
					Add medicine
				</ModalButton>
				<ModalButton onClick={onClose} className={styles.cancelButton} type='reset'>
					Cancel
				</ModalButton>
			</div>
		</form>
	)
}

export default AddFormMedicine
