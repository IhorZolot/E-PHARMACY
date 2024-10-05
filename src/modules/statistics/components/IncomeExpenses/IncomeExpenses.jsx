import styles from './IncomeExpenses.module.scss'
const IncomeExpenses = () => {
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
          <tr>
            <td>$100</td>
            <td>asdfdfdf</td>
            <td>$150</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default IncomeExpenses