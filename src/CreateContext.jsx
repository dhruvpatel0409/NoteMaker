import React, { createContext } from "react";
import Comp1 from "./Comp1";

const FirstName=createContext();
const LastName=createContext();

const Context=()=>{
    
    return(
        <>
            <FirstName.Provider value={'Dhruv Amitkumar'}>
            <LastName.Provider value={'Patel'}>
            <Comp1/>
            </LastName.Provider>
            </FirstName.Provider>
        </>
        );

}
export default Context;
export {FirstName , LastName};