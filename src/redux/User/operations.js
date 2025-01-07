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

export const refreshThunk = createAsyncThunk('user/refresh', async (_, thunkAPI) => {
  const savedToken = thunkAPI.getState().user.token
  console.log(savedToken);
  if (!savedToken) {
    return thunkAPI.rejectWithValue('No token found')
  }
  try {
    const { data } = await API.get('/user/user-info')
    setToken(data.token);
    console.log(data);
    return data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message)
  }
})