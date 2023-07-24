import React,{ useState } from "react";
import './ToDo.css';
import ToDoList from "./ToDoList";

const ToDo=()=>{
    const [ToDo,setToDo]=useState('');//items written in the input element
    const [Items,setItems]=useState([]);//Its an array to store the value of Previous items plus current data items(using Spread Operator we can access those things.)
    const inputChange=(event)=>{
        const value=event.target.value;
        setToDo(value);
    }
    const AddItems=()=>{
        setItems((oldItems)=>{
            return [...oldItems,ToDo];
        })
        setToDo('');
    }
    const deleteItems=(id)=>{
        console.log("Item was deleted...");
        setItems((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
                return index !==id;
            });
        });
    }
    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <br/>
                    <h1>ToDo List</h1>
                    <br/> 
                    <input type='text' placeholder="Add a Items" 
                    onChange={inputChange}
                    value={ToDo}
                    />
                    <button onClick={AddItems}>+</button>
                    {/* <ol>
                        <li>{ToDo}</li>
                    </ol> */}
                    <ol>
                        {Items.map((itemValue,index)=>{
                            return <ToDoList
                                text={itemValue}
                                onSelect={deleteItems}
                                key={index}
                                id={index}
                            />;
                        })}
                    </ol>
                </div>
            </div>
        </>
    );
}
export default ToDo;