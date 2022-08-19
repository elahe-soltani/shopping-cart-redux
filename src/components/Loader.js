import React from 'react';
import Spinner from '../gif/Spinner.gif'
const Loader = () => {
    return (
        <div style={{width:"100%" , textAlign : "center" }}>
            <img src={Spinner} alt="Loading" />
        </div>
    );
};

export default Loader;