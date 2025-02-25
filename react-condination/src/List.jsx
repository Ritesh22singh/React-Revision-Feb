import React from "react";

const List = (props) => {
  //   const fruits = ["Apple", "Orange", "Banana", "Coconut", "Pineapple"];

  //   const fruits = [
  //     { id: 1, name: "Apple", Calories: 135 },
  //     { id: 2, name: "Orange", Calories: 45 },
  //     { id: 3, name: "Coconut", Calories: 105 },
  //     { id: 4, name: "Pieapple", Calories: 37 },
  //   ];

  // To sort the list we have to use these method
  //fruits.sort((a, b) => a.name.localeCompare(b.name)); // This will sort alphabetically
  //fruits.sort((a, b) => b.name.localeCompare(a.name)); // This will sort reverse alphabetically
  //fruits.sort((a, b) => a.Calories - b.Calories); // This will sort Numberic order
  //fruits.sort((a, b) => b.Calories - a.Calories);  //// This will sort reverse Numberic order

  // Now we will use filter method to filter out some data as per confition
  //   const lowCalFruits = fruits.filter((fruit) => fruit.Calories < 100);

  //   const listItem = lowCalFruits.map((lowCalFruit) => (
  //     <li key={lowCalFruit.id}>
  //       {lowCalFruit.name}: &bsp;
  //       <b>{lowCalFruit.Calories}</b>
  //     </li>
  //   ));

  // Now we will render only who having high calories greater than 100
  //   const highCalFruits = fruits.filter((fruit) => fruit.Calories >= 100);

  //   const listItem = highCalFruits.map((highCalFruit) => (
  //     <li key={highCalFruit.id}>
  //       {highCalFruit.name}: &bsp;
  //       <b>{highCalFruit.Calories}</b>
  //     </li>
  //   ));

  //   const listItem = fruits.map((fruit) => (
  //     <li key={fruit.id}>
  //       {fruit.name}: &bsp;
  //       <b>{fruit.Calories}</b>
  //     </li>
  //   ));

  // Here via a props we are accepting data
  const category = props.category;
  const itemList = props.item;

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp;
      <b>{item.Calories}</b>
    </li>
  ));
  return (
    <>
      <h2>{category}</h2>
      <li>{listItems}</li>
    </>
  );
};

export default List;
