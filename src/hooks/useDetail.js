import { useState } from 'react'


export const  useDetail = async ({id}) => {
    const [data, setData] = useState();

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
        const data = await response.json();
        setData(data);
    } catch (error) {
        console.log(error);
    } 

    return data
};
