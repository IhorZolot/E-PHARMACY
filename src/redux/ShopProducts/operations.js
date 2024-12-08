import { createAsyncThunk } from '@reduxjs/toolkit'
import { API } from '../../config/adminConfig'

export const fetchShopProducts = createAsyncThunk('shopProducts/fetchShopProducts', async (shopId, thunkAPI) => {
	try {
		const { data } = await API.get(`/shop/${shopId}/product`)
		return data.products
	} catch (error) {
		return thunkAPI.rejectWithValue(error.message)
	}
})

export const addProductToShopThunk = createAsyncThunk(
	'shopProducts/addProductToShop',
	async ({ shopId, addMedicine }, thunkAPI) => {
		try {
			const { data } = await API.post(`/shop/${shopId}/product/add`, addMedicine)
			return data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)

export const editProductToShopThunk = createAsyncThunk(
	'shopProducts/editProductToShop',
	async ({ shopId, productId, updateMedicine }, thunkAPI) => {
		try {
			const { data } = await API.put(`/shop/${shopId}/product/${productId}/edit`, updateMedicine)
			return data
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)

export const deleteProductToShopThunk = createAsyncThunk(
	'shopProducts/deleteProductToShop',
	async ({ shopId, productId }, thunkAPI) => {
		try {
			const { data } = await API.delete(`/shop/${shopId}/product/${productId}/delete`)
			return data._id
		} catch (error) {
			return thunkAPI.rejectWithValue(error.message)
		}
	}
)
