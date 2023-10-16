import React from 'react'
import './BuyStyle.css';
import {useState} from 'react';

function BuyButton() {
    const [done, setDone] = useState("Not Buy");
    const buyFun =()=>{
        console.log("Working")
        setDone("Add to card successfully")
    }
  return (
    <div className='buy'>
        <button onClick={buyFun}><b>RENT</b></button>
        <div className='box'><b>{done}</b></div>
        </div>
  )
}

export default BuyButton