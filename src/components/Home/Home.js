import "../Home/home.css"
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const [name, setName]= useState("")
    const dispatch= useDispatch()
   const navigate= useNavigate()

   const isDark= useSelector(state=>state.isDark)

    const submit =e=>{
        e.preventDefault()
        dispatch({
            type: "SET_NAME",
            payload: name
        })

    navigate("/pokedex")

    }

    return (
         <div className={isDark? "dark":"light"}>       
        <div className="home-container">
                <div className="home-welcome">
                    <h2>HELLO TRAINER!</h2>
                    <img src="https://www.seekpng.com/png/full/345-3459799_starmetroids-vgc-2015-retrospective-pokemon-alpha-sapphire-trainer.png" alt="" />
                    <p>Give me your name to start</p>
                </div>
                <form onSubmit={submit} className="home-form">
                    <div>
                    <input type="text"
                    value={name}
                    onChange={e=> setName(e.target.value)}
                    />
                    <button><i className="fa-solid fa-play"></i></button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Home;