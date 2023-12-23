import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signup } from '@/RESTful/UserAuthREST';

// Define the initial state
const initialState = {
  auth: { bearer: '', email: '' },
  status: 'idle',
  error: null,
};

// Create an async thunk for fetching user sign-up response
export const fetchUserSignUpResponse = createAsyncThunk('auth/fetchUserSignUpResponse', async (userData, { rejectWithValue }) => {
  try {
    // Call the signup function to make the API request
    const authData = await signup(userData!);
    return authData;
  } catch (error : any) {
    // Handle errors and return an error message in the rejection payload
    return rejectWithValue(error.message || 'Error during sign-up');
  }
});

// Create a slice for auth state
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setBearer: (state, action) => {
      state.auth.bearer = action.payload;
    },
    setEmail: (state, action) => {
      state.auth.email = action.payload;
    },
    removeBearer: (state) => {
      state.auth.bearer = '';
    },
    removeEmail: (state) => {
      state.auth.email = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserSignUpResponse.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserSignUpResponse.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.auth = action.payload;
      })
      .addCase(fetchUserSignUpResponse.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

// Export the actions and selectors
export const { setBearer, setEmail, removeBearer, removeEmail } = authSlice.actions;
export const selectAuth = (state) => state.auth.auth;

// Export the reducer
export default authSlice.reducer;
