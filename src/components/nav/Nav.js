import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="flex justify-around">
            <NavLink exact className="flex-grow bg-blue-400 py-2 px-4 text-blue-50 hover:bg-gray-50 hover:text-gray-500" to="/" activeClassName="border-b-4">Home/About</NavLink>
            <NavLink exact className="flex-grow bg-blue-400 py-2 px-4 text-blue-50 hover:bg-gray-50 hover:text-gray-500" to="/seed-planter" activeClassName="border-b-4">Seed Planter</NavLink>
            <NavLink exact className="flex-grow bg-blue-400 py-2 px-4 text-blue-50 hover:bg-gray-50 hover:text-gray-500" to="/painter-classic" activeClassName="border-b-4">Tree Painter Classic</NavLink>
        </div>
    )
}

export default Nav;