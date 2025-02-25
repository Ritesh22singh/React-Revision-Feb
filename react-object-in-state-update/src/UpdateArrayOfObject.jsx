import React, { useState } from "react";

const UpdateArrayOfObject = () => {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    const newCar = {
      year: carYear,
      make: carMake,
      model: carModel,
    };
    setCars((cars) => [...cars, newCar]);
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }

  function handleRemoveCar() {
    setCars((c) => c.filter((_, i) => i !== index));
  }

  function handleYearChange(event) {
    setCarYear(event.target.value);
  }

  function handleMakeChange(event) {
    setCarMake(event.target.value);
  }

  function handleModelChange(event) {
    setCarModel(event.target.value);
  }
  return (
    <div>
      <h2>List of the Car Objects</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            <strong>Year:</strong> {car.year} <br />
            <strong>Make:</strong> {car.make} <br />
            <strong>Model:</strong> {car.model}
          </li>
        ))}
      </ul>
      <input type="number" value={carYear} onChange={handleYearChange} /> <br />
      <input
        type="text"
        value={carMake}
        onChange={handleMakeChange}
        placeholder="Please Enter makes"
      />
      <br />
      <input
        type="text"
        value={carModel}
        onChange={handleModelChange}
        placeholder="Enter car model"
      />
      <br />
      <button onClick={handleAddCar}>Add Car</button>
      <button onClick={() => handleRemoveCar(index)}>Remove Car</button>
    </div>
  );
};

export default UpdateArrayOfObject;
