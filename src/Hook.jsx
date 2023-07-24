import React, { useState } from 'react';
import './card.css';

const Hook = () => {
    const state = useState();
    const [count, setCount] = useState(0);
    const IncNum = () => {
        setCount(count+1);
    }
    return (
        <>
            <h1 className='heading-style'>{count}</h1>
            <button onClick={IncNum}>Click me</button>
        </>

    )

}
export default Hook;