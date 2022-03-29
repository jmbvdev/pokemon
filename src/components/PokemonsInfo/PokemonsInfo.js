import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PokemonsColors from '../PokemonsColors';
import "../PokemonsInfo/pokemonsInfo.css"

const PokemonsInfo = ({pokemonUrl}) => {
    const[pokemonInfo, setPokemonInfo]= useState({})
   
  

    useEffect(()=>{
        axios.get(pokemonUrl)
        .then(res=>setPokemonInfo(res.data))
    },[pokemonUrl])

 

    return (
    
        <Link to={`/pokedex/${pokemonInfo.id}`} className="pokemon-link">
            <div className='pokemon-card' style={{background:`${PokemonsColors(pokemonInfo.types?.[0]?.type.name)}`}}> 
                <div className='pokemon-specs'>
                    <h2> {pokemonInfo.name}</h2>
                    <div>
                    <p><b>Types: </b>{pokemonInfo.types?.[0]?.type.name} {pokemonInfo.types?.[1]?.type.name} </p>
                    </div>
                    <div>
                    <p><b>Hp: </b>{pokemonInfo.stats?.[0].base_stat}</p>
                    </div>
                    <div>
                    <p><b>Attack: </b>{pokemonInfo.stats?.[1].base_stat}</p>
                    </div>
                    <div>
                    <p><b>Defense: </b>{pokemonInfo.stats?.[2].base_stat}</p>
                    </div>
                    <div>
                    <p><b>Speed: </b>{pokemonInfo.stats?.[5].base_stat}</p>
                    </div>
                </div>
            <img src={pokemonInfo.sprites?.other.dream_world.front_default} alt="" />
            </div>
        </Link>
        
    );
};

export default PokemonsInfo;