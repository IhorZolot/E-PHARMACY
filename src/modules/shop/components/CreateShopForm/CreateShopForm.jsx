import styles from './CreateShopForm.module.scss'
const CreateShopForm = () => {
	return (
		<form className={styles.createShopForm}>
			<div>
				<label htmlFor='shop Name'>Shop Name</label>
				<input placeholder='Enter text' type='text' name='shopName' id='Shop Name' />
			</div>
			<div>
				<label htmlFor='Shop Owner Name'>Shop Owner Name</label>
				<input placeholder='Enter text' type='text' name='shopOwnerName' id='Shop Owner Name' />
			</div>
			<div>
				<label htmlFor='email'>Email address</label>
				<input placeholder='Enter text' type='text' name='email' id='email' />
			</div>
			<div>
				<label htmlFor='phone'>Phone Number</label>
				<input placeholder='Enter text' type='text' name='phone' id='phone' />
			</div>
			<div>
				<label htmlFor='address'>Street address</label>
				<input placeholder='Enter text' type='text' name='address' id='address' />
			</div>
			<div>
				<label htmlFor='city'>City</label>
				<input placeholder='Enter text' type='text' name='city' id='city' />
			</div>
			<div>
				<label htmlFor='postal'>Zip / Postal</label>
				<input placeholder='Enter text' type='text' name='postal' id='postal' />
			</div>

			<div className={styles.delivery}>
				<p>Has own Delivery System?</p>
				<div className={styles.radioGroup}>
					<input type='radio' name='delivery' id='yes' value='yes'></input>
					<label htmlFor='yes'>Yes</label>
					<input type='radio' name='delivery' id='no' value='no'></input>
					<label htmlFor='no'>No</label>
				</div>
			</div>

			<button>Create account</button>
		</form>
	)
}

export default CreateShopForm
