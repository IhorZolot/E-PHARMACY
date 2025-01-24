import CardOneProduct from './DetailsCard/CardOneProduct'
import DetailsCard from './DetailsCard/DetailsCard'
import styles from './Medicine.module.scss'

const Medicine = () => {
	return (
		<section className={styles.medicineSection}>
			<CardOneProduct />
			<DetailsCard />
		</section>
	)
}

export default Medicine
