import { configureStore } from "@reduxjs/toolkit";
import { formReducer } from "./formSlice";
import { carsReducer } from "./carsSlice";
import { changeName, changeCost } from "./formSlice";
import { changeTerm, addCar, deleteCar } from "./carsSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    cars: carsReducer,
  },
});

export { store, changeName, changeCost, changeTerm, addCar, deleteCar };
