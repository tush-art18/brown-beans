import React from 'react';

const Navbar = () => {
  return (
    <header>
        <div className="logo"><img src="/logo.png" alt="logo" /></div>
        <nav>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Menu</a>
            <a href="#">Contact</a>
            <a href="#"><img src="/search_24dp_A17B4F_FILL0_wght400_GRAD0_opsz24.png" alt="" /></a>
        </nav>
    </header>
  );
};

export default Navbar;
