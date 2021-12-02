import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import authService from "services/api/authService";
import _decode from "jwt-decode";



export const register = createAsyncThunk(
  "auth/register",
  async ({ username, password, email }, thunkAPI) => {
    try {
      const response = await authService.register(email, username, password);
      // thunkAPI.dispatch(setMessage(response.data.message));
      return response.data;
    } catch (error) {
      const message = error.response.data;
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



const initialize = () => {
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;
  if (!user) return {
    toUrl: "",
    isOpen: false,
    registerMode: false,
    isAuthenticated: false,
    user: null
  }
  const refreshToken = _decode(user.refresh_token)?.exp;
  console.log(refreshToken)
  console.log(Date.now()/1000)
  if (refreshToken<Date.now()/1000) {
    console.log("expired")
    return {
      toUrl: "",
      isOpen: false,
      registerMode: false,
      isAuthenticated: false,
      user: null
    }
  } else {
    console.log("valid");
    return {
      toUrl: "",
      isOpen: false,
      registerMode: false,
      isAuthenticated: true,
      user: user
    }
  }
}
const initialState = initialize();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    showDialog(state,action) {
      console.log("action", action)
      state.isOpen = true;
      state.registerMode= action.payload;
    },
    hideDialog(state) {
      state.isOpen = false;
    },
    switchToRegister(state) {
      state.registerMode = true;
    },
    switchToLogin(state) {
      state.registerMode = false;
    },
    setToUrl(state, { payload }) {
      state.toUrl = payload;
    }
  },
  extraReducers: {
    // [register.fulfilled]: (state, action) => {
    //   state.isAuthenticated = false;
    // },
    // [register.rejected]: (state, action) => {
    //   state.isAuthenticated = false;
    // },
    [login.fulfilled]: (state, action) => {
      state.isAuthenticated = true;
      state.isOpen = false;
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


export const { setToUrl, switchToRegister, switchToLogin, showDialog, hideDialog } = authSlice.actions

export default authSlice.reducer