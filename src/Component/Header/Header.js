import React from 'react';
import logo from '../../images/logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
           <h2 className="fst-bold text-dark ">WE ARE THE REAL HERO!!!</h2>
            <nav>
            <img className="logo" src={logo} alt="" />
                <a href="/NASA">NASA TV</a>
                <a href="/TOPICS">Topics</a>
                <a href="/Mission">Mission</a>
                <a href="/Gellery">Gallery</a>
                <a href="/About">About</a>
                <a href="/Audience">NASA Audience</a>
            </nav>
            <h2 className="text-dark"><span className="text-danger">Inter</span>national Space Station</h2>
            <h4 className="text-dark">Total monthly Expenses: $ 100m</h4>
        </div>
    );
};

export default Header;
