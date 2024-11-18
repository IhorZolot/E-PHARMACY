import { NavLink } from 'react-router-dom'
import mobileLinksData from '../../../../shared/data/mobile-link-data'
import styles from './MobileBar.module.scss'
import { useSelector } from 'react-redux'
import { selectShopId } from '../../../../redux/Shops/selectors'

const MobileBar = ({ onClose }) => {
	const shopId = useSelector(selectShopId)
	console.log(shopId)
	return (
		<div className={styles.mobileBar}>
			{mobileLinksData.map((link, index) => (
				<NavLink
					key={index}
					to={{
						pathname: link.path.replace(':shopId', shopId),
					}}
					className={styles.mobileBarLink}
					onClick={onClose}
				>
					<span className={styles.span}>{link.name}</span>
				</NavLink>
			))}
		</div>
	)
}
export default MobileBar
