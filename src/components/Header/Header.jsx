import React from "react";
import { Link, NavLink } from "react-router";
import "./Header.css"
import { FaCar } from "react-icons/fa";
import { IoCall } from "react-icons/io5";




function Header() {

    return (
        <>
            <div id="header" className="h-auto flex justify-between items-center p-8 px-16">

                <div id="logo" >
                    <NavLink className="flex items-center gap-2 text-3xl font-bold " to={''}> <FaCar />
                        Motor</NavLink>
                </div>


                <div id="links" className="flex gap-6">
                    <li className="font-bold text-lg list-none" >
                        <NavLink  className="hover:text-blue-700" to={''}>Home</NavLink>
                    </li>
                    <li className=" list-none text-lg font-bold" >
                        <NavLink  className="hover:text-blue-700" to={'/vehicels'}>Vehicels</NavLink>
                    </li>
                    <li className=" list-none text-lg font-bold" >
                        <NavLink  className="hover:text-blue-700" to={'/details'}>Details</NavLink>
                    </li>

                    <li className="list-none text-lg font-bold">
                        <NavLink  className="hover:text-blue-700" to={'/about'}>About Us</NavLink>
                    </li>
                    <li className=" list-none text-lg font-bold">
                        <NavLink  className="hover:text-blue-700" to={'/contact'}>Contact Us</NavLink>

                    </li>
                </div>



                <div id="help" className="flex px-5 gap-3">
                    <div id="call" className="p-2 flex items-center justify-center text-xl bg-blue-600 text-white rounded-full">
                        <IoCall />
                    </div>

                    <div id="text" className="text-xs font-medium font">
                        <p>Need help ?</p>
                        <p >+91 54784 78545</p>
                    </div>
                </div>



            </div>

        </>
    )
}

export default Header;