import { createSlice } from '@reduxjs/toolkit'
const initialState = {
	counts: {
		productsCount: 0,
		customersCount: 0,
		suppliersCount: 0,
	},
	statisticsCustomer: [],
	statisticsIncomeExpenses: [],
}
const statisticsSlice = createSlice({
	name: 'statistics',
	initialState,
	selectors: {},
	reducers: {
		// setCounts(state, action) {
		// 	state.counts = action.payload
		// },
		// setStatisticsCustomer(state, action) {
		// 	state.statisticsCustomer = action.payload
		// },
		// setStatisticsIncomeExpenses(state, action) {
		// 	state.statisticsIncomeExpenses = action.payload
		// },
	},
})

export const { setCounts, setStatisticsCustomer, setStatisticsIncomeExpenses } = statisticsSlice.actions
export default statisticsSlice.reducer
