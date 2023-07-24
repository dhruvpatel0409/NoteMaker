import React from "react";
import Card from './Card';
import './card.css';
import Sdata from './Sdata';

const App=()=>{
  return <><h1 className='heading-style'>Top 5 netFlix Series in 2023.</h1>
      {Sdata.map((val) =>{
     return <Card 
          key={val.id}
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
      />
  })
}
</>

}

export default App;


