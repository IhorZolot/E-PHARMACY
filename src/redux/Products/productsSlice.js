import { createSlice } from '@reduxjs/toolkit'
import { fetchOneProduct, fetchProducts, fetchProductsReviews } from './operations'

const initialState = {
	products: [],
	reviews: [],
	oneProduct: null,
	isLoading: false,
	error: null,
}

const productsSlice = createSlice({
	name: 'products',
	initialState,

	extraReducers: builder => {
		builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
			state.isLoading = false
			state.products = payload
		})
		builder.addCase(fetchProducts.pending, state => {
			state.isLoading = true
		})
		builder
			.addCase(fetchProducts.rejected, (state, { payload }) => {
				state.isLoading = false
				state.error = payload
			})
			.addCase(fetchOneProduct.fulfilled, (state, { payload }) => {
				state.oneProduct = payload
				state.isLoading = false
			})
			.addCase(fetchOneProduct.pending, state => {
				state.isLoading = true
			})
			.addCase(fetchOneProduct.rejected, (state, { payload }) => {
				state.isLoading = false
				state.error = payload
			})
			.addCase(fetchProductsReviews.fulfilled, (state, { payload }) => {
				state.isLoading = false
				state.reviews = payload
			})
			.addCase(fetchProductsReviews.pending, state => {
				state.isLoading = true
			})
			.addCase(fetchProductsReviews.rejected, (state, { payload }) => {
				state.isLoading = false
				state.error = payload
			})
	},
})

export const { setDescription } = productsSlice.actions
export const productsReducer = productsSlice.reducer
