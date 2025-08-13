import { nanoid } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    cars: [],
  },
  reducers: {
    changeTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      state.cars.push({ ...action.payload, id: nanoid() });
    },
    deleteCar(state, action) {
      state.cars = state.cars.filter((car) => car.id !== action.payload);
    },
  },
});

export const { changeTerm, addCar, deleteCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
