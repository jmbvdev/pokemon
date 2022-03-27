import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonsInfo from '../PokemonsInfo/PokemonsInfo';
import "../PokemonsList/pokemonsList.css"

const PokemonsList = () => {

    const[pokemons, setPokemons]= useState([])
    const[types, setTypes]= useState([])
    const[pokemonSearched, setPokemonSearched]= useState("")
    const[page,setPage]= useState(1)
    const trainer = useSelector(state=>state.name)
   

    ///Pagination
    const pokemonsPerPage=4;
    const lastPokemonIndex= page* pokemonsPerPage;
    const firstPokemonIndex=lastPokemonIndex-pokemonsPerPage;
    const paginatedPokemons= pokemons.slice(firstPokemonIndex,lastPokemonIndex);
    const totalPages=Math.ceil(pokemons.length/pokemonsPerPage);
    let pagesNumber=[];
    
    for (let i = 1; i <= totalPages; i++) {
        pagesNumber.push(i)
    }

    const navigate = useNavigate()
    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/pokemon/")
        .then(res=>setPokemons(res.data.results))
    },[])
   

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/type/`)
        .then(res=>setTypes(res.data.results))
    },[])


    const filterTypes=url=>{
       axios.get(url)
       .then(res=>setPokemons(res.data.pokemon))
    }

    const searchPokemons=e=>{
        e.preventDefault()
        navigate(`/pokedex/${pokemonSearched}`)
    }
  

    return (
        <div>
            <h1>Welcome {trainer}</h1>
             <select onChange={e=>filterTypes(e.target.value)}>
               
            {
                types.map(type=>(
                    
                    <option key={type.url} value={type.url}>{type.name}</option>
                ))
            }
            </select> 
            <div>
                <input type="text" value={pokemonSearched} onChange={e=>setPokemonSearched(e.target.value)}/>
                <button onClick={searchPokemons}>Search</button>
            </div>
            <ul>
                {
                    paginatedPokemons.map(pokemon=> (
                        <li key={pokemon.url? pokemon.url: pokemon.pokemon.url}>
                            <PokemonsInfo pokemonUrl={pokemon.url? pokemon.url: pokemon.pokemon.url}/>
                        </li>
                    ))

                }
            </ul>
            {
                page!==1&& (
                    <button onClick={()=>setPage(page-1)}>Previus Page</button>
                )
            }
            {
                pagesNumber.map(number=>(
                    <button key={number} onClick={()=> setPage(number)}>{number}</button>
                ))
            }
            {
                page!==totalPages&&(
                    <button onClick={()=>setPage(page+1)}>Next Page</button>
                )
            }
        </div>
    );
};

export default PokemonsList;