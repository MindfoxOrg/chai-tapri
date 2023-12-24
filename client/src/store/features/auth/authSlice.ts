// authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { signup, signin } from '@/RESTful/UserAuthREST';

// Define the initial state
const initialState = {
  auth: { bearer: localStorage.getItem('authKey'), email: localStorage.getItem('userEmail') },
  status: 'idle',
  error: null
};

// Create async thunks for fetching user sign-up and sign-in responses
export const fetchUserSignUpResponse = createAsyncThunk('auth/fetchUserSignUpResponse', async (userData, { rejectWithValue }) => {
  try {
    // Call the signup function to make the API request
    const authData = await signup(userData);
    return authData;
  } catch (error :any) {
    // Handle errors and return an error message in the rejection payload
    return rejectWithValue(error.message || 'Error during sign-up');
  }
});

export const fetchUserSignInResponse = createAsyncThunk('auth/fetchUserSignInResponse', async (loginData, { rejectWithValue }) => {
  try {
    // Call the signin function to make the API request
    const authData = await signin(loginData);
    return authData;
  } catch (error : any) {
    // Handle errors and return an error message in the rejection payload
    return rejectWithValue(error.message || 'Error during sign-in');
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
      localStorage.clear();
      state.auth.bearer = '';
    },
    removeEmail: (state) => {
      localStorage.clear();
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
        state.auth = {
          bearer: action.payload.bearer,
          email: action.payload.email,
          
        }
      })
      .addCase(fetchUserSignUpResponse.rejected, (state : any, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(fetchUserSignInResponse.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUserSignInResponse.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.auth = {
          bearer: action.payload.bearer,
          email: action.payload.email,
        }
      })
      .addCase(fetchUserSignInResponse.rejected, (state : any, action) => {
        state.status = 'failed';
        state.error = `action.payload`;
      });
  },
});

// Export the actions and selectors, including the async thunks
export const { setBearer, setEmail, removeBearer, removeEmail } = authSlice.actions;
export const selectAuth = (state : any) => state.auth;
export const selectUserEmail =(state : any) => state.auth.email;

// Export the reducer
export default authSlice.reducer;
