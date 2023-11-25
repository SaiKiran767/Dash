import React from 'react'
import './Cards.css'
import CardsData from './CardsData'
import Card1 from './Card1'
const Cards = () => {
  return (
    <div className='Cards'>
           {CardsData.map((card,id)=>{
              return(
                <div className='parentContainer' key={id}>
                   <Card1
                     title = {card.title}
                     color = {card.color}
                     barValue = {card.barValue}
                     png = {card.png}
                     series = {card.series}
                     values = {card.value}
                   />
                </div>
              )
           })}
    </div>   
  )
}

export default Cards