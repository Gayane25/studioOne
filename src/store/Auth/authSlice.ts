import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import axios from 'axios';

interface AuthCredentials {
  userName: string;
  password: string;
}
interface AuthResponse {
  token: string;
}

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  loading: boolean;
  error: null | string;
}
const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.loading = false;
      state.error = null;
      localStorage.removeItem('authToken');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authenticateUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        authenticateUser.fulfilled,
        (state, action: PayloadAction<AuthResponse>) => {
          state.loading = false;
          state.isAuthenticated = true;
          state.token = action.payload.token;
          localStorage.setItem('authToken', state.token);
        }
      )
      .addCase(authenticateUser.rejected, (state) => {
        state.loading = false;
        state.error = 'Unknown error occurred';
      });
  },
});

export const authenticateUser = createAsyncThunk<AuthResponse, AuthCredentials>(
  '/api/authenticate',
  async ({ userName, password }) => {
    const response = await axios.post<AuthResponse>('/api/authenticate', {
      userName,
      password,
    });

    return response.data;
  }
);

export const { logout } = authSlice.actions;
export default authSlice.reducer;
