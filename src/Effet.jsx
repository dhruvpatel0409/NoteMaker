import React,{useState, useEffect} from 'react';
const Effect=()=>{
    const [num,setNum]=useState(0);
    // const [nums,setNums]=useState(0);
    useEffect(() => {
        document.title=`Button Clicked ${num} times`;
    }, [num])
    
    return(<>
        <button onClick={()=>{
            setNum(num+1)
        }}>Click ME {num}</button>
        <br/>
        {/* <button onClick={()=>{setNums(nums+1)}}>Click ME {nums}</button> */}
    </>);

}
export default Effect;
