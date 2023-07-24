import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const hours=new Date().getHours();
const colorStyle={};

if(hours>0 && hours<=12){
    var msg='Good Morning';
    colorStyle.color='green';
}
else if(hours>12 && hours<=19){
    msg='Good Afternoon';
    colorStyle.color='orange';
}
else{
    msg="Good Evening";
    colorStyle.color='black'
}



ReactDOM.render(<>
    <div className='message'><h1>Hello Sir,<span style={colorStyle}>{msg} </span></h1></div>
</>,
document.getElementById('root'));