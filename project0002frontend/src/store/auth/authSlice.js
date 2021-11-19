import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import authService from "services/api/authService";

const user = localStorage.getItem("user");

export const register = createAsyncThunk(
    "auth/register",
    async ( {username, password, email}, thunkAPI) => {
      try {
        const response = await authService.register( email, username, password);
        // thunkAPI.dispatch(setMessage(response.data.message));
        return response.data;
      } catch (error) {
        const message =error.response.data;
        // thunkAPI.dispatch(setMessage(message));
        console.log(message);
        return thunkAPI.rejectWithValue();
      }
    }
  );
  
  export const login = createAsyncThunk(
    "auth/login",
    async ({ username, password }, thunkAPI) => {
      try {
        const data = await authService.login(username, password);
        return { user: data };
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        // thunkAPI.dispatch(setMessage(message));
        console.log(message);
        return thunkAPI.rejectWithValue();
      }
    }
  );

  export const guestLogin = createAsyncThunk(
    "auth/guestLogin",
    async ({ username, password }, thunkAPI) => {
      try {
        const data = await authService.login(username, password);
        return { user: data };
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        // thunkAPI.dispatch(setMessage(message));
        console.log(message);
        return thunkAPI.rejectWithValue();
      }
    }
  );
  
  export const logout = createAsyncThunk("auth/logout", async () => {
    await authService.logout();
  });

const initialState = user
    ? { isAuthenticated: true, user }
    : { isAuthenticated: false, user: null };

const authSlice = createSlice({
    name: "auth",
    initialState,
    extraReducers: {
        [register.fulfilled]: (state, action) => {
          state.isAuthenticated = false;
        },
        [register.rejected]: (state, action) => {
          state.isAuthenticated = false;
        },
        [login.fulfilled]: (state, action) => {
          state.isAuthenticated = true;
          state.user = action.payload.user;
        },
        [login.rejected]: (state, action) => {
          state.isAuthenticated = false;
          state.user = null;
        },
        [logout.fulfilled]: (state, action) => {
          state.isAuthenticated = false;
          state.user = null;
        },
      },
})


export const {  } = authSlice.actions


export default authSlice.reducer