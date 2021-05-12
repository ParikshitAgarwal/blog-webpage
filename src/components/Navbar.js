import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSideBar = () => setSidebar(!sidebar);
  const handleLogout = () => {
    auth.signOut();
  };
  return (
    <nav className="navbar">
      <h1>Blog Post</h1>

      <div className={sidebar ? "links active" : "links"}>
      <div className="burger" onClick={showSideBar}>
        <div className="list"></div>
        <div className="list"></div>
        <div className="list"></div>
      </div>
        <Link to="/blog-webpage" style={{marginBottom:25}} onClick={() => setSidebar(!sidebar)}>Home</Link>
        <Link to="/blog-webpage/create" onClick={() => setSidebar(!sidebar)}>New Blog</Link>
        <button onClick={handleLogout}>Logout</button>
      </div>
    
    </nav>
  );
};

export default Navbar;
