import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../PokemonsDetails/pokemonsDetails.css"
const PokemonsDetails = () => {
    const {id}= useParams()
    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then(res=> console.log(res.data))

    },[id])
    return (
        <div>
            <h1>pokemon details</h1>
            {id}
        </div>
    );
};

export default PokemonsDetails;