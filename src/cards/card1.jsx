import React, { useState } from 'react';
//import "../card-style.css";
import "../stylek.css";
const Card = props=>{
    
  const[Counter, setCounter] =useState(0)
  const handles=()=>{
    return(
    setCounter(Counter+1)
    )}; 
    return(
        <div className="card text-center">
         <div className="overflow">
           <img src={props.imgsrc} alt="" className='card-img-top'/>     
          </div>   
          <div className='card-body text-dark'>
           <h4 className="card-title">{props.title}</h4>
           <p className="card-text text-secondary">{props.para}</p> 
           <button onClick={handles} className='btn btn-outline-sucess'>{props.btn}</button>
           <p>Number of {props.title} in cart:  {Counter}</p>   
          </div>
        </div>
       
       
    );
}

export default Card;