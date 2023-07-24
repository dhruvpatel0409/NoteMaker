import React, { useState } from 'react';
const time = new Date().toLocaleTimeString();

const Time = () => {
    const [ctime, setCtime] = useState(time);
    const updateTime = () => {
        setCtime(new Date().toLocaleTimeString());
    }
    setInterval(updateTime,1000);
    return (
        <>
            <h1>{ctime}</h1>
            
        </>

    );
}
export default Time;