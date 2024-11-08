import { configureStore } from '@reduxjs/toolkit'
import statisticsReducer from './Statistics/statisticsSlice'

export const store = configureStore({
	reducer: {
		statistics: statisticsReducer,
	},
})
