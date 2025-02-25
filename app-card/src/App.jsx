import React from "react";
import "./App.css";
import Card from "./Card";
import Props from "./Props";
import jyothi from "./assets/jyothi.png";
import propic from "./assets/New Pic2.jpeg";

function App() {
  return (
    <>
      <Card img={propic} name="Ritesh" />
      <Card img={jyothi} name="Jyothi" />
      <Props name="Ritesh" age="25" isStudent={false} />
      <Props name="Jyothi" age={26} isStudent={false} />
      <Props />
    </>
  );
}

export default App;
