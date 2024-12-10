import { createAsyncThunk } from '@reduxjs/toolkit'
import { API } from '../../config/adminConfig'

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (_, thunkAPI) => {
	try {
		const { data } = await API.get('/products')
		return data.products
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const fetchOneProduct = createAsyncThunk('products/fetchOneProduct', async (productId, thunkAPI) => {
	try {
		const { data } = await API.get(`/products/${productId}`)
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const fetchProductsReviews = createAsyncThunk('products/fetchProductsReviews', async (_, thunkAPI) => {
	try {
		const { data } = await API.get(`/reviews`)
		return data.reviews
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})
