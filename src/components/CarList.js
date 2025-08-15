import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCar } from "../store/slices/carsSlice";
import { createSelector } from "@reduxjs/toolkit";

const memoizedCars = createSelector(
  [(state) => state.cars.cars, (state) => state.cars.searchTerm],
  (cars, searchTerm) =>
    cars.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
);

export default function CarList() {
  const dispatch = useDispatch();
  const cars = useSelector(memoizedCars);
  const newName = useSelector((state) => state.form.name);

  const handleCarDelete = (car) => {
    dispatch(deleteCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    return (
      <div
        key={car.id}
        className={`panel ${
          newName &&
          newName.length > 3 &&
          car.name.toLowerCase().includes(newName.toLowerCase())
            ? "bold"
            : ""
        }`}
      >
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    );
  });

  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  );
}
