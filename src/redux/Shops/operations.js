import { createAsyncThunk } from '@reduxjs/toolkit'
import { API } from '../../config/adminConfig'

export const fetchShopsById = createAsyncThunk('shops/fetchShopsById', async (shopId, thunkAPI) => {
	try {
		const { data } = await API.get(`/shop/${shopId}`)
		console.log('Received data:', data)
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const addShopThunk = createAsyncThunk('shops/addNewShop', async (shop, thunkAPI) => {
	try {
		const { data } = await API.post('/shop/create', shop)
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})
