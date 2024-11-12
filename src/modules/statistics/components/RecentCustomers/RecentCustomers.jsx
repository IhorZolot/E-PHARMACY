import styles from './RecentCustomers.module.scss'
import { selectStatisticsCustomer } from '../../../../redux/Statistics/selectors'
import { useSelector } from 'react-redux'
const RecentCustomers = () => {
	const headers = ['Name', 'Email', 'Spent', 'Address']
	const statisticsCustomer = useSelector(selectStatisticsCustomer)

	return (
		<div className={styles.recentCustomers}>
			<h2>Recent Customers</h2>
			<table className={styles.table}>
				<thead className={styles.tableHeader}>
					<tr>
						{headers.map((item, index) => (
							<th key={index}>{item}</th>
						))}
					</tr>
				</thead>
				<tbody className={styles.tableBody}>
					{statisticsCustomer.map((row, index) => (
						<tr key={index}>
							<td>{row.name}</td>
							<td>{row.email}</td>
							<td>{row.spent}</td>
							<td>{row.address}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default RecentCustomers
