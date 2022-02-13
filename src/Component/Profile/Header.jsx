import React from 'react'
import Navbar from './Navbar'
import './profile.css';

function Header() {
    return (
        <div>
            <nav className="navbar navbar-light">
                
                <span className="navbar-brand" style={{paddingLeft:30}}>
                    eFinanceClaimer
                </span>
                <ul class="nav justify-content-end">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Notifications</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Messages</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Settings</a>
                </li>
                
                </ul>

            </nav>
            
        </div>
    )
}

export default Header;
