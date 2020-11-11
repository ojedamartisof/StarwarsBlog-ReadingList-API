import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <Link className="navbar-brand" to="/">
                <img src="../img/logo8.jpg" width="150" height="100" alt="" />  
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/people">People</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/planets">Planets</Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/vehicles">Vehicles</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;