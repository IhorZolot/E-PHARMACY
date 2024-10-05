import { SpriteSVG } from '../../../../assets/icons/SpriteSVG'
import styles from './StatisticsBox.module.scss'

const StatisticsBox = () => {
	const sectors = [
		{
			name: 'products',
			title: 'All products',
			count: 12,
			icon: 'money',
		},
		{
			name: 'suppliers',
			title: 'All suppliers',
			count: 12,
			icon: 'money',
		},
		{
			name: 'customers',
			title: 'All customers',
			count: 12,
			icon: 'users',
		},
	]
	return (
		<ul className={styles.statisticsBox}>
			{sectors.map((item, index) => (
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
