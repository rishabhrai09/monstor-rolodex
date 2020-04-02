import React from 'react';
import './card.styles.css'

export const Card=(props)=>{
    return(
<div className="card-container">
    <img alt="monstors" src={`https://robohash.org/${props.monstor.id}?set=set2&180*180`}/>
<h2>{props.monstor.name}</h2>
    <h3>{props.monstor.email}</h3>


</div>    )
}