import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import styles from './CreateShopForm.module.scss'
import { schemaAddForm } from './helpers/validationSchema'
import { useDispatch } from 'react-redux'
import { addShopThunk } from '@redux/Shops/operations'
import { useNavigate } from 'react-router-dom'

const CreateShopForm = () => {
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(schemaAddForm),
	})
	const submit = data => {
		console.log(data)
		dispatch(addShopThunk(data)).then(action => {
			if (action.payload && action.payload._id) {
				navigate(`/shop/${action.payload._id}`)
			}
			reset()
		})
	}

	return (
		<form className={styles.createShopForm} onSubmit={handleSubmit(submit)}>
			<div>
				<label htmlFor='shop'>Shop Name</label>
				<input placeholder='Enter text' type='text' id='shop' {...register('shop')} />
				{errors.shop && <span>{errors.shop.message}</span>}
			</div>
			<div>
				<label htmlFor='name'>Shop Owner Name</label>
				<input placeholder='Enter text' type='text' id='name' {...register('name')} />
				{errors.name && <span>{errors.name.message}</span>}
			</div>
			<div>
				<label htmlFor='email'>Email address</label>
				<input placeholder='Enter text' type='text' id='email' {...register('email')} />
				{errors.email && <span>{errors.email.message}</span>}
			</div>
			<div>
				<label htmlFor='phone'>Phone Number</label>
				<input placeholder='Enter text' type='text' id='phone' {...register('phone')} />
				{errors.phone && <span>{errors.phone.message}</span>}
			</div>
			<div>
				<label htmlFor='address'>Street address</label>
				<input placeholder='Enter text' type='text' id='address' {...register('address')} />
				{errors.address && <span>{errors.address.message}</span>}
			</div>
			<div>
				<label htmlFor='city'>City</label>
				<input placeholder='Enter text' type='text' id='city' {...register('city')} />
				{errors.city && <span>{errors.city.message}</span>}
			</div>
			<div>
				<label htmlFor='postal'>Zip / Postal</label>
				<input placeholder='Enter text' type='text' id='postal' {...register('postal')} />
				{errors.postal && <span>{errors.postal.message}</span>}
			</div>

			<div className={styles.delivery}>
				<p>Has own Delivery System?</p>
				<div className={styles.radioGroup}>
					<input id='yes' type='radio' name='delivery' value='yes' {...register('delivery')} defaultChecked />
					<label htmlFor='yes'>Yes</label>
					<input id='no' type='radio' name='delivery' value='no' {...register('delivery')} />
					<label htmlFor='no'>No</label>
					{errors.delivery && <span>{errors.delivery.message}</span>}
				</div>
			</div>
			<button>Create account</button>
		</form>
	)
}

export default CreateShopForm
