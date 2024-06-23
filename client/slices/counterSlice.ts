import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterProps {
  loading: boolean;
  value: number;
}

const initialState: CounterProps = {
  loading: false,
  value: null!,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    initialApiCal: (state) => {
      state.loading = true;
    },
  },
});

export const { initialApiCal } = counterSlice.actions;

export default counterSlice.reducer;
