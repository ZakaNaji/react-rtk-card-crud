import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCar } from "../store/slices/carsSlice";

export default function CarList() {
  const dispatch = useDispatch();
  const { searchTerm, cars } = useSelector((state) => state.cars);
  const newName = useSelector((state) => state.form.name);
  const filtredCars = searchTerm
    ? cars.filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : cars;

  const handleCarDelete = (car) => {
    dispatch(deleteCar(car.id));
  };

  const renderedCars = filtredCars.map((car) => {
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
