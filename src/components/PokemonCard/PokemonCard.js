import React from 'react'
import './PokemonCard.css'

export const PokemonCard = ({name, onClick}) => {
  return (
    <button className='card btn' onClick={onClick} key={name}>
      <p >{name}</p>
    </button>
    
  )
}
