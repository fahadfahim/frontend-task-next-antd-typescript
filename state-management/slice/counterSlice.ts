"use client";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
  isLoading: boolean;
  users?: any;
  error: any;
}

const initialState: CounterState = {
  value: 0,
  isLoading: false,
  users: "",
  error: null,
};
const url = "https://jsonplaceholder.typicode.com/users";
// Define the async action using createAsyncThunk
export const fetchUserData = createAsyncThunk(
  "userData/fetchUserData",
  async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    return data;
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.isLoading = false;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.isLoading = true;
        state.users = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
