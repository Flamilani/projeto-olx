import React from 'react';
import { Link } from 'react-router-dom';

const Page = () => {
    return (
        <div>
            <h1>404</h1>
            <h2>Página não encontrada!</h2>
            <Link to="/">Retornar para Home</Link>        
        </div>      
    );
}

export default Page;