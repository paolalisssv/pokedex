import { useState } from 'react'


export const  usePokemons = async ({offset, limit}) => {
    const [data, setData] = useState();

    try {
        const response = fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`);
        const data = await response.json();
        setData(data);
    } catch (error) {
        console.log(error);
    } 

    return data
};
