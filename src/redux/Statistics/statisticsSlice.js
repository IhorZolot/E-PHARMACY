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
		setCounts(state, { payload }) {
			console.log(payload)
			state.counts = {
				productsCount: payload.productsCount,
				customersCount: payload.customersCount,
				suppliersCount: payload.suppliersCount,
			}
		},
		setStatisticsCustomer(state, { payload }) {
			state.statisticsCustomer = payload
		},
		setStatisticsIncomeExpenses(state, { payload }) {
			state.statisticsIncomeExpenses = payload
		},
	},
})

export const { setCounts, setStatisticsCustomer, setStatisticsIncomeExpenses } = statisticsSlice.actions
export default statisticsSlice.reducer
