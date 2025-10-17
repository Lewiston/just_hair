import React from 'react';
import "../Styles/Navbar.css";

import { Bell, User } from 'lucide-react';


const Navbar = () => {
return (
<nav className="navbar">
<div className="logo">JH</div>
<h2 className="welcome">Hi, Jack! Welcome Back</h2>
<div className="search-section">
<input type="text" placeholder="Search" className="search-bar" />
<Bell className="icon" />
<User className="icon" />
</div>
</nav>
);
};


export default Navbar;