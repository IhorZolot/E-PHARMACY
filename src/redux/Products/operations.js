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
export const fetchCategoriesProducts = createAsyncThunk('products/fetchCategories', async (_, thunkAPI) => {
	try {
		const { data } = await API.get('/products/categories')
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})
export const fetchFilteredProducts = createAsyncThunk('products/fetchFilteredProducts', async (filters, thunkAPI) => {
	try {
		console.log('Filters before API call:', filters);
		const params = new URLSearchParams(filters)
		const { data } = await API.get(`/products/filters?${params.toString()}`)
		console.log('API Response:', data);
		return data
	} catch (error) {
		console.error('Error fetching filtered products:', error);
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
