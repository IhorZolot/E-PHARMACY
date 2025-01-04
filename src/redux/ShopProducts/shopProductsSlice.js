import { createSlice } from '@reduxjs/toolkit'
import {
	addProductToShopThunk,
	deleteProductToShopThunk,
	editProductToShopThunk,
	fetchShopProducts,
} from './operations'

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
			.addCase(addProductToShopThunk.pending, state => {
				state.isLoading = true
			})
			.addCase(addProductToShopThunk.rejected, (state, { payload }) => {
				state.isLoading = false
				state.error = payload
			})
			.addCase(editProductToShopThunk.fulfilled, (state, { payload }) => {
				const { updateProductShop } = payload
				state.isLoading = false
				const index = state.shopProducts.findIndex(product => product._id === updateProductShop._id)
				if (index !== -1) {
					state.shopProducts[index] = { ...state.shopProducts[index], ...updateProductShop }
				}
			})
			.addCase(editProductToShopThunk.pending, state => {
				state.isLoading = true
			})
			.addCase(editProductToShopThunk.rejected, (state, { payload }) => {
				state.isLoading = false
				state.error = payload
			})
			.addCase(deleteProductToShopThunk.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.shopProducts = state.shopProducts.filter(product => product._id !== payload)
			})
			.addCase(deleteProductToShopThunk.pending, state => {
				state.isLoading = true
			})
			.addCase(deleteProductToShopThunk.rejected, (state, { payload }) => {
				state.isLoading = false
				state.error = payload
			})
	},
})

export const shopProductsReducer = shopProductsSlice.reducer
