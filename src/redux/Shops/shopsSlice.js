import { createSlice } from '@reduxjs/toolkit'
import { addShopThunk, fetchShopsById } from './operations'

const initialState = {
	shop: [],
	page: 1,
	currentPage: 1,
	isLoading: false,
	error: null,
	shopId: null,
}

const shopsSlice = createSlice({
	name: 'shops',
	initialState,
	extraReducers: builder => {
		builder
			.addCase(fetchShopsById.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.shop = payload
				state.shopId = payload._id
			})
			.addCase(fetchShopsById.pending, state => {
				state.isLoading = true
			})
			.addCase(fetchShopsById.rejected, (state, { payload }) => {
				state.isLoading = false
				state.error = payload
			})
			.addCase(addShopThunk.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.shop.push(payload)
				state.shopId = payload._id
			})
	},
})

export const shopsReducer = shopsSlice.reducer
