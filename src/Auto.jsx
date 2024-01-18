import React from 'react';
import './Auto.css';

const Auto = (props) => (
    <div className='auto col-sm-6 col-md-4 col-lg-3'>
        <img className='obr img-fluid' src={props.auto.img} alt ={props.auto.marka}/>
        <p className='markaModel'>{props.auto.marka} {props.auto.model}</p>
        <p className='cena'>Cena: {props.auto.cena} zł</p>
    </div>

);
export default Auto;