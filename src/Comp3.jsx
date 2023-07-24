import React from 'react';
import { FirstName, LastName } from './CreateContext';

const Comp3 = () => {
    return (
        <>
            <FirstName.Consumer>
                {(fname) => {
                    return (<>
                        <LastName.Consumer>
                            {
                                (lname) => {
                                    return <h1>My Full Name is {fname} {lname}</h1>
                                }
                            }
                        </LastName.Consumer>


        </>);
                }}
            </FirstName.Consumer>
        </>
    );
}
export default Comp3;