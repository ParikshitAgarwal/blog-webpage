import React from 'react'
import {Link} from 'react-router-dom'
import { auth } from '../firebase';

const Navbar = () => {
    
  const handleLogout = () => {
   auth.signOut();
  };
    return (
        <nav className='navbar'>
            <h1>Blog Post</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                <button onClick={handleLogout}>Logout</button>

            </div>
        </nav>
    )
}

export default Navbar
