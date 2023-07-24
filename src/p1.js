import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
const img1="https://picsum.photos/200/300";
const img2="https://picsum.photos/240/300";
const img3="https://picsum.photos/290/300"
const date=new Date().toLocaleDateString();
const time=new Date().toLocaleTimeString();

//With the Use Of JSX.
ReactDOM.render(
<>
<p>The Current Date is:{date}</p>
<p>The Current Time is:{time}</p>
<h1 contentEditable="true" className='head'>Hello World!!!</h1>
<div className='container'>
<img src={img1} alt="Uploading Error..."/>
<img src={img2} alt="Uploading Error..."/>
<img src={img3} alt="Uploading Error..."/>
</div>
</>,
document.getElementById('root'));


// //With The Use Of React Module
// ReactDOM.render(React.createElement("h1",null,"Welcome to React"),document.getElementById('root'));

// //Pure JavaScript
// var h1=document.createElement("h1");
// h1.innerHTML="My Name is Dhruv.";
// document.getElementById('root').appendChild(h1);