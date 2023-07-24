import React from 'react';
import { useContext } from 'react';
import Comp3 from './Comp3';
import { FirstName,LastName } from './CreateContext';
const Comp2=()=>{
    const fname=useContext(FirstName);
    const lname=useContext(LastName);
  return (
    <h1>My Name is {fname} {lname}</h1>
  );

//   <Comp3/>;
}
export default Comp2;
