import { SpriteSVG } from '../../../../assets/icons/spriteSVG'
import styles from './TitleMedShop.module.scss'

const TitleMedShop = () => {
	return (
		<div className={styles.titleMedShop}>
			<h2>Huel LLC</h2>
			<p>
				<span>Owner:</span>
        Datha Harmon
			</p>
			<div className={styles.mapAdnPhone} >
				<div className={styles.sectorMap}>
					<a href='https://www.google.com/maps/place/123+Main+Street' target='_blank' rel='noopener noreferrer'>
						<SpriteSVG name='map' />
					</a>
					<span className={styles.spanMap}>Kretoria</span>
				</div>
				<div className={styles.sectorMap}>
					<a href='tel:+1234567890'>
						<SpriteSVG name='phone' />
					</a>
					<span className={styles.spanMap}  >(123) 456-7890</span>
				</div>
			</div>
		</div>
	)
}

export default TitleMedShop
