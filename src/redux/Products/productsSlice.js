import { createSlice } from '@reduxjs/toolkit'
import { fetchProducts } from './operations'

const initialState = {
	products: [],
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
		builder.addCase(fetchProducts.rejected, (state, { payload }) => {
			state.isLoading = false
			state.error = payload
		})
	},
})

export const productsReducer = productsSlice.reducer
