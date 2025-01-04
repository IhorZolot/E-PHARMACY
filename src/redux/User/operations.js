import { createAsyncThunk } from '@reduxjs/toolkit';
import { API, removeToken, setToken } from '../../config/adminConfig';


export const registerThunk= createAsyncThunk('user/register', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await API.post('/user/register', credentials)
    return data
  } catch (error) {
    return rejectWithValue(error.message)
  }
})
export const loginThunk = createAsyncThunk('user/login', async (credentials, { rejectWithValue }) => {
  try {
    const { data } = await API.post('/user/login', credentials)
    setToken(data.token);
    return data
  } catch (error) {
    return rejectWithValue(error.message)
  }
})
export const logoutThunk = createAsyncThunk('user/logout', async (_, { rejectWithValue }) => {
  try {
    const { data } = await API.post('/user/logout')
    removeToken();
    return data
  } catch (error) {
    return rejectWithValue(error.message)
  }
})