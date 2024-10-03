import ButtonCard from '../ButtonCard/ButtonCard'
import styles from './DetailsCard.module.scss'

const DetailsCard = () => {
  return (
    <div className={styles.detailsCard}>
      <div className={styles.detailsButtonBox}>
        <ButtonCard>Description</ButtonCard>
        <ButtonCard isStyle >Reviews</ButtonCard>
      </div>
      <p>
        text
      </p>

    </div>
  )
}

export default DetailsCard