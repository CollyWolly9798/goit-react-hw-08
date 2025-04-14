import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const setAuthHeader = value => {
  axios.defaults.headers.common.Authorization = value;
};

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
  try {
    const repsonse = await axios.post('/users/signup', credentials);
    setAuthHeader(`Bearer ${repsonse.data.token}`);
    return repsonse.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const login = createAsyncThunk('auth/login', async (creditials, thunkAPI) => {
  try {
    const repsonse = await axios.post('/users/login', creditials);
    setAuthHeader(`Bearer ${repsonse.data.token}`);
    return repsonse.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  await axios.post('/users/logout');
  setAuthHeader('');
});

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkAPI) => {
    try {
      const reduxState = thunkAPI.getState();
      setAuthHeader(`Bearer ${reduxState.auth.token}`);
      const repsonse = await axios.get('/users/current');
      return repsonse.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const reduxState = thunkAPI.getState();
      reduxState.auth.token !== null;
    },
  }
);
