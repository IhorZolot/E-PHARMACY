import { createAsyncThunk } from '@reduxjs/toolkit'
import { API } from '../../config/adminConfig'

export const fetchShopsById = createAsyncThunk('shops/fetchShopsById', async (shopId, thunkAPI) => {
	try {
		const { data } = await API.get(`/shop/${shopId}`)
		return data
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})
