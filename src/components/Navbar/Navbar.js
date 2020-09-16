import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-light">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Main</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/tech">Tech</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}


