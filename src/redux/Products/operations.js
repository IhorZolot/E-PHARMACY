import { createAsyncThunk } from '@reduxjs/toolkit'
import { API } from '../../config/adminConfig'

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (_, thunkAPI) => {
	try {
		const { data } = await API.get('/products')
		console.log(data)
		return data.products
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})
