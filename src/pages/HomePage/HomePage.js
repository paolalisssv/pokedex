import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { PokemonCard } from '../../components/PokemonCard/PokemonCard'
import { Pagination } from '../../components/Pagination/Pagination';
import logo from '../../assets/images/Logo-Pokemon.png'
import "./HomePage.css"

export const HomePage = () => {
	const navigate = useNavigate();
	const [listPokemons, setListPokemons] = useState([]);
	const [offset, setOffset] = useState(20);
	const [limit, setLimit] = useState(20);
	const [page, setPage] = useState(1);
  const [image, setImage] = useState();

	useEffect(() =>{
		if(offset === 140){
			setLimit(11)
		}else{
			setLimit(20)
		}
		(
			async function(){
					try{
						const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`);
						const data = await response.json();
						setListPokemons(data.results)
						console.log(data.results)
					}catch(err){
						console.log("err")
					}
			}
		)()
	},[offset, limit])

	const handleClick = async (event,url) => {
		if(event.detail === 1){
			console.log("uno")
      try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        setImage(data.sprites.back_default)
      }catch(err){
        console.log("err")
      }
		}else if(event.detail === 2){
      try{
        const response = await fetch(url);
        const data = await response.json();
        navigate("/detail", {state: data })
      }catch(err){
        console.log("err")
      }
			
		}
  };

  const next =()=>{
    setOffset(offset+20)
    setPage(page+1)
  }

  const back =()=>{
    setOffset(offset+20)
    setPage(page-1)
  }

  return (
    <div className='container-home-page'>
      <p className='title'>Pokedex</p>
      <div className='container-pokedex'>
        <div className='wrapper-pokedex'>
        <img className='logo-img' alt='logo' src={logo} />
          <div className='wrapper-img'>
            {image && <img alt='alt' className='img-pokemon' src={image} />}
          </div> 
        </div>
        <div>
          {
            listPokemons.map((pok)=>
              <PokemonCard onClick={(event)=>handleClick(event, pok.url)} name={pok.name} />
            )
          }
        </div>
      </div>
     
			
			<Pagination page={page} offset={offset} onClickNext={next} onClickBack={back}/>
    </div>
  )
}
