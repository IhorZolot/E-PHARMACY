import { createSlice } from '@reduxjs/toolkit'
import { addProductToShopThunk, fetchShopProducts } from './operations'

const initialState = {
	shopProducts: [],
	isLoading: false,
	error: null,
}

const shopProductsSlice = createSlice({
	name: 'shopProducts',
	initialState,
	extraReducers: builder => {
		builder
			.addCase(fetchShopProducts.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.shopProducts = payload
			})
			.addCase(fetchShopProducts.pending, state => {
				state.isLoading = true
			})
			.addCase(fetchShopProducts.rejected, (state, { payload }) => {
				state.isLoading = false
				state.error = payload
			})
			.addCase(addProductToShopThunk.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.shopProducts.push(payload)
			})
	},
})

export const shopProductsReducer = shopProductsSlice.reducer
