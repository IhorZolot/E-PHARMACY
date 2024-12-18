import { SpriteSVG } from '@assets/icons/spriteSVG'
import styles from './TitleMedShop.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { selectShops } from '@redux/Shops/selectors'
import { useEffect } from 'react'
import { fetchShopsById } from '@redux/Shops/operations'

const TitleMedShop = () => {
	const shop = useSelector(selectShops)
	/////////////////////////////////////////////////////////
	const shopId = '67464de2c21ca4602aef786b'

	const dispatch = useDispatch()
	useEffect(() => {
		if (shopId) {
			dispatch(fetchShopsById(shopId))
		}
	}, [dispatch, shopId])

	if (!shop) {
		return <div>Loading...</div>
	}

	return (
		<div className={styles.titleMedShop}>
			<h2>{shop && shop.shop}</h2>
			<p>
				<span>Owner:</span>
				{shop && shop.name}
			</p>
			<div className={styles.mapAdnPhone}>
				<div className={styles.sectorMap}>
					<a
						href={`https://www.google.com/maps/place/${encodeURIComponent(shop && shop.address)}`}
						target='_blank'
						rel='noopener noreferrer'
					>
						<SpriteSVG name='map' />
					</a>
					<span className={styles.spanMap}>{shop && shop.address}</span>
				</div>
				<div className={styles.sectorMap}>
					<a href={`tel:${shop && shop.phone}`}>
						<SpriteSVG name='phone' />
					</a>
					<span className={styles.spanMap}>{shop && shop.phone}</span>
				</div>
			</div>
		</div>
	)
}

export default TitleMedShop
