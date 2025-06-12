import React from "react";
import { Link, NavLink } from "react-router";
import "./Header.css"

function Header() {

    return (
        <>
            <div id="header" className="h-20 bg-gray-500">

                <div id="logo" className="size-10">
                    <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?semt=ais_hybrid&w=740" alt="" />
                </div>
                <div id="links">
                    <Link to={'/'}></Link>
                    <Link to={'/home'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/contact'}>Contact</Link>
                </div>
            </div>

        </>
    )
}

export default Header;