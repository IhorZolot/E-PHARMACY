import { useNavigate } from 'react-router-dom'
import styles from './DrugButtonSector.module.scss'
const DrugButtonSector = () => {
	const navigate = useNavigate()
	return (
		<div className={styles.drugButtonSector}>
			<button>Drug store</button>
			<button onClick={() => navigate('/medicine')}>All medicine</button>
		</div>
	)
}

export default DrugButtonSector
