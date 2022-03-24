import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import PokemonsInfo from '../PokemonsInfo/PokemonsInfo';
import "../PokemonsList/pokemonsList.css"

const PokemonsList = () => {
    const [pokemons, setPokemons]= useState([])
    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon/")
        .then(res=>setPokemons(res.data.results))

    },[])
    const trainer = useSelector(state=>state.name)

    return (
        <div>
            <h1>Welcome {trainer}</h1>
            <ul>
                {
                    pokemons.map(pokemon=> (
                        <li key={pokemon.url}>
                            <PokemonsInfo pokemonUrl={pokemon.url} />
                        </li>
                    ))

                }
            </ul>
        </div>
    );
};

export default PokemonsList;