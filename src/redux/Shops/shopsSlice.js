import { createSlice } from '@reduxjs/toolkit'
import { fetchShopsById } from './operations'

const initialState = {
	shop: null,
	page: 1,
	currentPage: 1,
	isLoading: false,
	error: null,
}

const shopsSlice = createSlice({
	name: 'shops',
	initialState,
	extraReducers: builder => {
		builder.addCase(fetchShopsById.fulfilled, (state, { payload }) => {
			state.isLoading = false
			state.shop = payload
		})
		builder.addCase(fetchShopsById.pending, state => {
			state.isLoading = true
		})
		builder.addCase(fetchShopsById.rejected, (state, { payload }) => {
			state.isLoading = false
			state.error = payload
		})
	},
})

export const shopsReducer = shopsSlice.reducer
