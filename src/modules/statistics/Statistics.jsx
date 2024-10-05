import { StatisticsBox } from './components/StatisticsBox'
import RecentCustomers from './components/RecentCustomers/RecentCustomers'
import IncomeExpenses from './components/IncomeExpenses/IncomeExpenses'
import styles from './Statistics.module.scss'

const Statistics = () => {
  return (
    <div className={styles.statisticsSection} >
      <h1 className={styles.statisticsTitle}>Statistics</h1>
      <StatisticsBox/>
      <RecentCustomers/>
      <IncomeExpenses/>
    </div>
  )
}

export default Statistics