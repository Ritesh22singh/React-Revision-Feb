import React from "react";

import "./App.css";
import Test from "./Test";
import List from "./List";

function App() {
  const fruits = [
    { id: 1, name: "Apple", Calories: 135 },
    { id: 2, name: "Orange", Calories: 45 },
    { id: 3, name: "Coconut", Calories: 105 },
    { id: 4, name: "Pieapple", Calories: 37 },
  ];

  const vegetable = [
    { id: 1, name: "Potatoes", Calories: 110 },
    { id: 2, name: "celery", Calories: 15 },
    { id: 3, name: "carrots", Calories: 25 },
    { id: 4, name: "broccoli", Calories: 50 },
  ];

  return (
    <>
      {/* <Test isLoggedIn={false} username="BroCode" /> */}
      <List item={fruits} category="Fruits" />
      <List item={vegetable} category="Vegetables" />
    </>
  );
}

export default App;
