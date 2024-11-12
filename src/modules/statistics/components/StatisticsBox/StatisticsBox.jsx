import { SpriteSVG } from '@assets/icons/spriteSVG'
import styles from './StatisticsBox.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { selectCounts } from '@redux/Statistics/selectors'
import { getSectorsStatistics } from './statisticsHelpers'
import { fetchStatistics } from '@redux/Statistics/operations'

const StatisticsBox = () => {
	const { productsCount, suppliersCount, customersCount } = useSelector(selectCounts)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(fetchStatistics())
	}, [dispatch])

	const sectorsStatistics = getSectorsStatistics(productsCount, suppliersCount, customersCount)

	return (
		<ul className={styles.statisticsBox}>
			{sectorsStatistics.map((item, index) => (
				<li key={index}>
					<div className={styles.sector}>
						<SpriteSVG name={item.icon} />
						<span>{item.title}</span>
					</div>
					<p>{item.count}</p>
				</li>
			))}
		</ul>
	)
}

export default StatisticsBox
