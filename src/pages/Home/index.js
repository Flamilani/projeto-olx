import React from 'react';
import { Link } from 'react-router-dom';

const Page = () => {
    return (
        <div>
            <h1>Página Home</h1>
            <Link to="/">Home</Link> <br />
            <Link to="/about">Sobre</Link> <br />
            <Link to="/contact">Contato</Link> 
        </div>

      
    );
}

export default Page;