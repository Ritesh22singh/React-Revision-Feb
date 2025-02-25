// useContext() = React Hook that allows you to share values between multiple levels of components without passing props throught each level

// PROVIDER COMPONENT
// 1. import {createContext} from 'react;
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value ={value}>
// <child/>
// </MyContext.Provider>

// CONSUMER COMPONENT
// 1. import React, {useContext} from 'react;
//    import {myContext} from './ComponentA'
//2.  const value = useContext(MyContext)

import React, { useState, createContext, useContext } from "react";
import ComponentB from "./ComponentB";

export const UserContext = useContext();
const ComponentA = () => {
  const [user, setUser] = useState("Ritesh");
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border-2 border-gray-500 p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-2xl font-semibold text-gray-800">Hello</h1>
        <UserContext.Provider value={user}>
          <ComponentB user={user} />
        </UserContext.Provider>
      </div>
    </div>
  );
};

export default ComponentA;
