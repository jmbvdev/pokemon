import "../Home/home.css"
import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [name, setName]= useState("")
    const dispatch= useDispatch()
   const navigate= useNavigate()

    const submit =e=>{
        e.preventDefault()
        dispatch({
            type: "SET_NAME",
            payload: name
        })

    navigate("/pokedex")

    }

    return (
        <div>
            <h1>WELCOME TRAINER</h1>
            <form onSubmit={submit}>
                <input type="text"
                value={name}
                onChange={e=> setName(e.target.value)}
                />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default Home;