import React from 'react';
import "../ProgressBar/progressBar.css"
import PokemonsColors from '../PokemonsColors';
const ProgressBar = ({data,type}) => {
    if (data>=100) {
        data=100
    }
    return (
        <div className='progress' >
            <div className='progress-done' style={{opacity: 1,width:`${data}%`, background:`${PokemonsColors(type)}`}}>
                {data} %
            </div>
        
         </div>
    );
};

export default ProgressBar;