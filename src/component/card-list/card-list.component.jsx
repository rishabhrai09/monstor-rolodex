import React from 'react'
import {Card} from '././card/card.component'
import './card-list.styles.css'
export const CardList=( props)=>{
    
return(<div className="card-list">   { props.monstor.map(monstor=>
<Card key={monstor.id} monstor={monstor}/>
    )}</div>)
} 