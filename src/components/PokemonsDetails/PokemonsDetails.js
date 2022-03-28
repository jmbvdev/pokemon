import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import "../PokemonsDetails/pokemonsDetails.css"
import ProgressBar from '../ProgressBar/ProgressBar';
const PokemonsDetails = () => {
    const {id}= useParams()
    const [pokemonsDetails, setPokemonsDetails]= useState({})
    const navigate= useNavigate()
    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res=> setPokemonsDetails(res.data))
    },[id])
    return (
        <div className='details-container'>
              <div className='back-btn' onClick={()=>navigate("/pokedex")}><i className="fa-solid fa-angle-left"></i></div>
            <div className='pokemon-details'>
                <div className='pokemon-title'>
                     <h1>{pokemonsDetails.name}</h1>
                     <h4>#0{pokemonsDetails.id}</h4>
                </div>
                <div className='pokemon-types'>
                     <h5>{pokemonsDetails.types?.[0]?.type.name} </h5>
                     <h5>{pokemonsDetails.types?.[1]?.type.name} </h5>

                </div>
                <img src={pokemonsDetails.sprites?.other.dream_world.front_default} alt="" />
                <div className='pokemon-stats'>
                    <h3>Stats Base</h3>
                    <div className='stats-container'>
                        <div className='stats'>
                            <h4>Hp: </h4>
                            <ProgressBar data={pokemonsDetails.stats?.[0].base_stat}/>
                        </div>
                        <div className='stats'>
                            <h4>Defense: </h4>
                            <ProgressBar data={pokemonsDetails.stats?.[2].base_stat}/>
                        </div>
                        <div className='stats'>
                            <h4>Attack: </h4>
                            <ProgressBar data={pokemonsDetails.stats?.[1].base_stat}/>
                        </div>
                        <div className='stats'>
                            <h4>Speed: </h4>
                            <ProgressBar data={pokemonsDetails.stats?.[5].base_stat}/>
                        </div>
                        <div className='measures'>
                            <img src={pokemonsDetails.sprites?.back_default} alt="" />
                            <img src={pokemonsDetails.sprites?.front_default} alt="" />
                            <div className='measures-spescs'>
                                <h5> Weight: {pokemonsDetails.weight} </h5>
                                <h5>Height: {pokemonsDetails.height} </h5>
                            </div>

                        </div>
                    </div>

                </div>
                

            </div>
        </div>
    );
};

export default PokemonsDetails;