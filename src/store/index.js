import { configureStore } from "@reduxjs/toolkit";
import { formReducer } from "./slices/formSlice";
import { carsReducer } from "./slices/carsSlice";
import { changeName, changeCost } from "./slices/formSlice";
import { changeTerm, addCar, deleteCar } from "./slices/carsSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    cars: carsReducer,
  },
});

export { store, changeName, changeCost, changeTerm, addCar, deleteCar };
