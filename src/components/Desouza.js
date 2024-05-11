import React from 'react'
import { useParams } from 'react-router-dom'

function Desouza() {
    const { param } = useParams();
    return (
        <div>
           <p> Desouza {param}</p>
        </div>
    );
}

export default Desouza;
