import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import IconArrowLeft from '../../assets/images/IconArrowLeft';
import './PokemonDetail.css'

export const PokemonDetail = ({url}) => {
	const navigate = useNavigate();
    const location = useLocation();
    
    console.log('state', location.state)


  return (
    <div className='container-pokemon-detail'>
        <button className='btn-transparent' onClick={()=>navigate(-1)}>
            <IconArrowLeft />
        </button>
        <br/>
        <center>
         <img className='img' src={location.state.sprites.back_default} alt={location.state.name} />
        </center>
        <h1 className='name-text'>{location.state.name}</h1>
        <div>
            <p>Height:</p>
            <p>Weight: {location.state.weight}</p>
            <p>Experience: {location.state.base_experience}</p>
        </div>
    </div>
  )
}
