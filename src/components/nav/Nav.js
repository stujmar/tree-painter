import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <div className="flex text-center justify-around">
            <NavLink exact className="flex-1 bg-green-400 py-2 px-4 text-green-50 hover:bg-gray-50 hover:text-gray-500" to="/about" activeClassName="border-b-4">About</NavLink>
            <NavLink exact className="flex-1 bg-green-400 py-2 px-4 text-green-50 hover:bg-gray-50 hover:text-gray-500" to="/" activeClassName="border-b-4">Tree Planter</NavLink>
            <NavLink exact className="flex-1 bg-green-400 py-2 px-4 text-green-50 hover:bg-gray-50 hover:text-gray-500" to="/painter-classic" activeClassName="border-b-4">Tree Painter Classic</NavLink>
        </div>
    )
}

export default Nav;