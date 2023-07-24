import React from 'react';
function Card(props) {
    return (
        <div className='cards'>
            <div className='card'>
            <a href={props.link} ><img src={props.imgsrc} alt='myPic' className='cardImg' /></a>
                <div className='card_info'>
                    <span className='card_cat'>{props.title}</span>
                    <h3 className='card_title'>{props.sname}</h3>

                    <button>Watch Now</button>
                  
                </div>
                
            </div>

        </div>
    );
}
export default Card;