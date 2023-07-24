import React, { useState } from 'react';
import './ToDo.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Counter = () => {
    // const counter=1;
    // const [IncItem,setIncItem]=useState(0);
    // const[DecItem,setDecItem]=useState(0);
    // const Inc=()=>{
    //     setIncItem(counter+1);
    // }
    // const dec=()=>{
    //     setDecItem(counter-1);
    // }
    const [count, setCount] = useState(0);

    return (<>
        <div className="main_div">
            <div className="center_div">
                <br />
                <h1>{count}</h1>
                <br />
                <div className='buttons'>
                <Tooltip title='add'>
                    <Button
                        onClick={() => setCount(count + 1)}
                        className='add'>

                        <AddIcon />
                    </Button>
                    </Tooltip>
                    <Tooltip title='delete'>
                    <Button 
                    onClick={() => {
                        setCount(count - 1);
                        if (count <= 0) {
                            alert('Reaches to zero,No further decrement');
                            setCount(0);
                        }
                    }} 
                    className='delete'><RemoveIcon /></Button>
                    </Tooltip>
                </div>
                {/* <button onClick={dec}>Decrement</button> */}
            </div>
        </div>
    </>
    );

}
export default Counter;
