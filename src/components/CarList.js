import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCar } from "../store/slices/carsSlice";

export default function CarList() {
  const dispatch = useDispatch();
  const { searchTerm, cars } = useSelector((state) => state.cars);

  const handleCarDelete = (car) => {
    dispatch(deleteCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    return (
      <div key={car.id} className="panel">
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
