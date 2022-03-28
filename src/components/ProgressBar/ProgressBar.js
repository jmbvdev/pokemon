import React from 'react';
import "../ProgressBar/progressBar.css"
const ProgressBar = ({data}) => {
    return (
        <div className='progress'>
            <div className='progress-done' style={{opacity: 1,width:`${data}%`}}>
                {data} %
            </div>
        
         </div>
    );
};

export default ProgressBar;