import { useEffect } from 'react'
import styles from './RecentCustomers.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStatistics } from '../../../../redux/Statistics/operations'
import { setStatisticsCustomer } from '../../../../redux/Statistics/statisticsSlice'
import { selectStatisticsCustomer } from '../../../../redux/Statistics/selectors'
const RecentCustomers = () => {
	const headers = ['Name', 'Email', 'Spent', 'Address']
	const statisticsCustomer = useSelector(selectStatisticsCustomer)
	const dispatch = useDispatch()
	useEffect(() => {
		const loadStatisticsCustomers = async () => {
			const data = await fetchStatistics()
			if (data) {
				dispatch(setStatisticsCustomer(data.statisticsCustomer))
			}
		}
		loadStatisticsCustomers()
	}, [dispatch])
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
