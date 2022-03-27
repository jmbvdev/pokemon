import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "../PokemonsDetails/pokemonsDetails.css"
const PokemonsDetails = () => {
    const {id}= useParams()
    const [pokemonsDetails, setPokemonsDetails]= useState({})
    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res=> setPokemonsDetails(res.data))
        

    },[id])
    return (
        <div>
            <h1>{pokemonsDetails.name}</h1>
        </div>
    );
};

export default PokemonsDetails;