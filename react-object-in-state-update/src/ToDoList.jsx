import React, { useState } from "react";

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event) {
    setNewTask(event.target.value);

    // This function is for whatever user give in input button, it will add in ToDo list
  }

  function addTask() {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }

    // Here I'm wirte a function for adding todo list in the newArray, before that it will check, whether it emply or having text, with help of TRIM function,
    // then I used updater function to update the newTask array.
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);

    // The first parameter (_) represents the current element in the array. The underscore _ is used when the value is not needed.
    // The second parameter (i) represents the index of the element in the array.
    // The condition i !== index ensures that the element at the given index is removed
    // This line removes an item from the tasks array at the specified index and returns a new array without modifying the original one.
  }

  function moveTaskUp(index) {
    // This function takes index as a parameter, which represents the position of the task in the array.
    if (index > 0) {
      // This checks whether the task is not the first item in the list.
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }

    // The function moves a task upward in the tasks list by swapping it with the previous item.

    // Step:

    // This swaps the task at index with the task at index - 1 (the previous one).
    // The syntax used here is array destructuring assignment, which is a short way to swap two values.
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h1 className="text-2xl font-bold text-center mb-4">To-Do List</h1>

        {/* Input Field */}
        <div className="flex mb-4">
          <input
            type="text"
            placeholder="Enter a task..."
            value={newTask}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600 transition"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <ol className="space-y-2">
          {tasks.map((task, index) => (
            <li
              key={index}
              className="bg-gray-200 p-3 rounded-md flex justify-between items-center"
            >
              <span className="flex-1">{task}</span>
              <div className="space-x-2">
                <button
                  onClick={() => deleteTask(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
                <button
                  onClick={() => moveTaskUp(index)}
                  className="bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600"
                >
                  ⬆️
                </button>
                <button
                  onClick={() => moveTaskDown(index)}
                  className="bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600"
                >
                  ⬇️
                </button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ToDoList;
