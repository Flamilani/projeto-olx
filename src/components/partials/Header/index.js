import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderArea } from './styled';

// import { isLogged } from '../../../helpers/AuthHandler';

const Header = () => {
    let logged = false;
    
    return (
        <HeaderArea>
            <div className="container">
               <div className="logo">
                    <Link to="/">
                        NET LIBRAS
                    </Link>
               </div>           
               <nav>
                <ul>
                    {logged &&
                        <>
                    <li>
                        <Link to="/login">Minha Conta</Link>
                    </li>
                    <li>
                        <Link to="/logout">Sair</Link>
                    </li>
                    <li>
                        <Link to="post-an-ad" className="button">Poste um anúncio</Link>
                    </li>
                        </>
                    }
                    {!logged &&
                        <>
                    <li>
                        <Link to="/signin">Login</Link>
                         </li>
                    <li>
                        <Link to="signup">Cadastrar</Link>
                    </li>
                        </>
                    }                    
                  
                </ul>
            </nav>   
            </div>
        </HeaderArea>
    );
}

export default Header;