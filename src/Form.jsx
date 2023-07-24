import React, { useState } from 'react';
import './Form.css';
const Form = () => {
    const [fullName, setFullName] = useState({
        fname:'',
        lname:'',
        email:'',
        phoneNo:''
    });
    const inputEvent = (event) => {
        const value=event.target.value;
        const name=event.target.name;
        console.log(value);
        console.log(name);
        
        setFullName((prevVal)=>{
            console.log(prevVal);
            return({
                //Spread Operator
                ...prevVal,
                [name]:value

            }
            );
            // if(name==='fname'){
            //     return({
            //         fname:value,
            //         lame:prevVal.lname,
            //         email:prevVal.email,
            //         phoneNo:prevVal.phoneNo
            //     });
            // }
            // else if(name==='lname'){
            //     return({
            //         fname:prevVal.fname,
            //         lname:value,
            //         email:prevVal.email,
            //         phoneNo:prevVal.phoneNo
            //     })
            // }
            // else if(name==='email'){
            //         return({
            //             fname:prevVal.fname,
            //             lname:prevVal.lname,
            //             email:value,
            //             phoneNo:prevVal.phoneNo
            //         })
            //     }
            // else if(name==='phoneNo'){
            //         return({
            //             fname:prevVal.fname,
            //             lname:prevVal.lname,
            //             email:prevVal.email,
            //             phoneNo:value
            //         })
            //     }
            
            
        })
    }
    const clickMe = (event) => {
        event.preventDefault();
        alert('Form Submitted');
       
    }
return (
        <>
            <form onSubmit={clickMe}>
                <div>
                    <h1>hello {fullName.fname} {fullName.lname}</h1>
                    <p>{fullName.email}</p>
                    <p>{fullName.phoneNo}</p>
                    <input 
                    type='text' 
                    placeholder='Enter Your Name' 
                    onChange={inputEvent} 
                    value={fullName.fname} 
                    name='fname' />
                    <input type='text'
                     placeholder='Enter Your Last Name'
                     onChange={inputEvent}
                    value={fullName.lname}
                     name='lname'/>
                     <input type='email'
                     placeholder='Enter Your Email'
                     onChange={inputEvent}
                    value={fullName.email}
                     name='email'/>
                     <input type='number'
                     placeholder='Enter Your Mobile No'
                     onChange={inputEvent}
                    value={fullName.phoneNo}
                     name='phoneNo'/>
                    <button type='submit'>Click Me</button>
                </div>
            </form>
        </>
    );
}
export default Form;


