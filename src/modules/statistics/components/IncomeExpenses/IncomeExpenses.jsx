import { useSelector } from 'react-redux'
import styles from './IncomeExpenses.module.scss'
import { selectStatisticsIncomeExpenses } from '../../../../redux/Statistics/selectors'

const IncomeExpenses = () => {
	const statisticsIncomeExpenses = useSelector(selectStatisticsIncomeExpenses)

	return (
		<div className={styles.statisticsExpenses}>
			<h2>Income/Expenses</h2>
			<table className={styles.table}>
				<thead className={styles.tableHeader}>
					<tr>
						<th>Today</th>
					</tr>
				</thead>
				<tbody className={styles.tableBody}>
					{statisticsIncomeExpenses.map((row, index) => (
						<tr key={index}>
							<td>{row.type}</td>
							<td>{row.name}</td>
							<td>{row.amount}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default IncomeExpenses
