import styles from './RecentCustomers.module.scss'
const RecentCustomers = () => {
  const headers = ['Name', 'Email', 'Spent', 'Phone', 'Address'];
  return (
    <div className={styles.recentCustomers}>
      <h1>Recent Customers</h1>
      <table className={styles.table}>
        <thead className={styles.tableHeader}>
          <tr>
            {headers.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          <tr>
            <td>Wade </td>
            <td>4ZmBd@exa.com</td>
            <td>$36</td>
            <td>(123) 456-7890</td>
            <td>US</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default RecentCustomers