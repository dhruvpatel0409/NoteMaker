import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Pockemon=()=>{
    const [num,setNum]=useState(1);
    useEffect(()=>{
        async function getData(){
            const res=await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            console.log(res.data.name);
        }
        getData();

    });
    return(<>
        <h1>You have Choosen {num}</h1>
        <select value={num} onChange={(event)=>{
            setNum(event.target.value);
        }}>
            <option value='1'>1</option>
            <option value='25'>25</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
        </select>
    </>);
}
export default Pockemon;