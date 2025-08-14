import React from "react";
import { useSelector } from "react-redux";

export default function CarValue() {
  const totalCost = useSelector((state) => {
    const { searchTerm, cars } = state.cars;
    const filtredCars = searchTerm
      ? cars.filter((car) =>
          car.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : cars;
    return filtredCars.reduce((sum, cur) => sum + cur.cost, 0);
  });
  return <div className="car-value">Total cost: ${totalCost}</div>;
}
