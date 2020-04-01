import React from 'react';
import { Link } from 'react-router-dom';

import {FiSun, FiMoon} from 'react-icons/fi';

function Header(props) {
    return(
        <nav className={`navbar navbar-expand-lg ${props.visibility ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}` } >
            <span className="navbar-brand">Navbar</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link to="/"><span className="nav-link">Pesquisa</span></Link>
                </li>
                <li className="nav-item">
                    <Link to="/create"><span className="nav-link">Cadastro</span></Link>
                </li>
                </ul>
                <button className="btn" onClick={props.changeVisibility}>
                        {
                            props.visibility ? 
                                <FiSun size={25} color='white'/>
                            :
                                <FiMoon size={25} color='black'/>
                        }
                </button>
            </div>
        </nav>
            
    );
}

export default Header