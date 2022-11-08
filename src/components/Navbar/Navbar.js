import React from 'react';
import './Navbar.css'
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
            <div className='container' >
                <div className='content' >
                    <Link to='/' >
                        <h1>Aquarium Life</h1>
                    </Link>
                </div>
            </div>
    );
};

export default Navbar;