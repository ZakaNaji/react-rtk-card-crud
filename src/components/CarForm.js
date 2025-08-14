import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeName, changeCost } from "../store";

export default function CarForm() {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => state.form);

  const handleNameChange = (e) => {
    const value = e.target.value;
    dispatch(changeName(value));
  };

  const handleCostChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    dispatch(changeCost(value));
  };
  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form>
        <div className="field-group">
          <div className="field">
            <label className="label">Name</label>
            <input
              className="input is-expanded"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label className="label">Cost</label>
            <input
              className="input is-expanded"
              value={cost || ""}
              onChange={handleCostChange}
              type="number"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
