import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";

const initialState = {
  user: null,
  isLoading: false,
  iSuccess: false,
  message: "",
};

const login = createAsyncThunk("auth/login", async (user, thunkAPI) => {
  return authService.login(user);
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      isLoading = false;
      iSuccess = false;
    },
  },
  extraReducers: (builder) => {
    //cases
    builder.addCase(login.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(login.fulfilled, (state, action) => {
      state.iSuccess = true;
      state.user = action.payload;
    });

    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = true;
      state.message = action.payload;
    });
  },
});

export { reset } = authSlice.actions
export authSlice.actions


