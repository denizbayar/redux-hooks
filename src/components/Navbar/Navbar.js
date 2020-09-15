import React from 'react'
import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-dark bg-light">
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link" ><Link to="/">Main</Link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" ><Link to="/tech">Tech</Link></a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}


