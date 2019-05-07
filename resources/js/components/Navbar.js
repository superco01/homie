import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
    <nav className='navbar navbar-expand-md navbar-light navbar-laravel'>
        <div className='container'>
            <Link className='navbar-brand' to='/'>Homie</Link>
            <ul className="nav navbar-nav">
                <li>Home</li>
                <li>Search</li>
            </ul>
        </div>
    </nav>
)

export default Navbar