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
    const isDark= useSelector(state=>state.isDark)
    const pokemonsPerPage= useSelector(state=>state.pokemonsPerPage)
    const numbersPerPage = +pokemonsPerPage
   
   

    ///Pagination
 
    const lastPokemonIndex= page* numbersPerPage;
    const firstPokemonIndex=lastPokemonIndex-numbersPerPage;
    const paginatedPokemons= pokemons.slice(firstPokemonIndex,lastPokemonIndex);
    const totalPages=Math.ceil(pokemons.length/numbersPerPage);
    const[toggleCircle, setToggleCircle]= useState(false)
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
        <div className={isDark? "dark": "light"} >
            <div className='pokedex'>
                <div className='config-btn' onClick={()=>navigate("/config")}><i className="fa-solid fa-gear"></i></div>
                <div className='back-btn' onClick={()=>navigate("/")}><i className="fa-solid fa-angle-left"></i></div>
            
                <div className='pokedex-titles'>
                    <h1>Pokedex</h1>
                    <h3>Welcome {trainer}!</h3>
                </div>
                <div className={toggleCircle? "right":"left"}>
                    <h4 className='toggle-title'>Search for {toggleCircle? "Pokemon": "Type"}</h4>
                    <div className='toggle' onClick={()=> setToggleCircle(!toggleCircle)}>
                        <div className='toggle-circle'></div>
                    </div>

                </div>
                <div className={toggleCircle? "right":"left"}>
                    <div className='select-box'>
                        <select onChange={e=>filterTypes(e.target.value)}>
                            {
                                types.map(type=>(
                                    
                                    <option key={type.url} value={type.url}>{type.name}</option>
                                ))
                            }
                        </select> 
                        
                    </div>
                    <div className='search-box'>
                        <input type="text" value={pokemonSearched} onChange={e=>setPokemonSearched(e.target.value)}/>
                        <button onClick={searchPokemons}><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>

                </div>
                    <ul className='pokedex-container'>
                        {
                            paginatedPokemons.map(pokemon=> (
                                <li key={pokemon.url? pokemon.url: pokemon.pokemon.url}>
                                    <PokemonsInfo pokemonUrl={pokemon.url? pokemon.url: pokemon.pokemon.url}/>
                                </li>
                            ))

                        }
                    </ul>
                <div className='pages'>
                {
                    page!==1&& (
                        <button onClick={()=>setPage(page-1)}><i className="fa-solid fa-arrow-left"></i></button>
                    )
                }
                {
                    pagesNumber.map(number=>(
                        <button key={number} onClick={()=> setPage(number)}>{number}</button>
                    ))
                }
                {
                    page!==totalPages&&(
                        <button onClick={()=>setPage(page+1)}><i className="fa-solid fa-arrow-right"></i></button>
                    )
                }
                </div>
            </div>

        </div>
    );
};

export default PokemonsList;