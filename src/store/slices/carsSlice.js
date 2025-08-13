import { createSlice } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    cars: [],
  },
  reducers: {
    changeTerm(state, action) {},
    addCar(state, action) {},
    deleteCar(state, action) {},
  },
});

export const { changeTerm, addCar, deleteCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
