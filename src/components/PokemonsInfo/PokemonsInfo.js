import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "../PokemonsInfo/pokemonsInfo.css"

const PokemonsInfo = ({pokemonUrl}) => {
    const[pokemonInfo, setPokemonInfo]= useState({})
    

    useEffect(()=>{
        axios.get(pokemonUrl)
        .then(res=>setPokemonInfo(res.data))
    },[pokemonUrl])

 

    return (
        <div>
            <Link to={`/pokedex/${pokemonInfo.id}`}>
              {pokemonInfo.name}
             
            </Link>
        </div>
    );
};

export default PokemonsInfo;