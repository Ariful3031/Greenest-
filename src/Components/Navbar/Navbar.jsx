import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
// import userImg from '../../assets/user.png'

const Navbar = () => {

    const { user, logoutUser } = useContext(AuthContext);
    const Links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/plants'>Plants</NavLink></li>
        <li><NavLink to='/profile'>My profile</NavLink></li>

    </>

    return (
        <div className="w-11/12 mx-auto navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {Links}

                    </ul>
                </div>
                <img className="w-[100px] h-10 btn-ghost text-xl" src="https://images.squarespace-cdn.com/content/v1/6594040f3b38c97cdafab8d3/969658bd-5410-4fae-a5dc-5076eca40fd0/GreeNest+Logo+%28h%29.png" alt="" />

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {Links}
                </ul>
            </div>
            <div className="navbar-end flex gap-2">

                {
                    user ? <Link to='/profile'><img className='w-12 h-12 rounded-full' src={user.photoURL} alt="" /></Link> : <Link to='/signup' className="btn bg-[#02A53B] hover:bg-[#166534] text-white px-8 rounded-lg">Register</Link>
                }

                {
                    user ? (<button onClick={logoutUser} className="btn bg-[#02A53B] hover:bg-[#166534] text-white px-8 rounded-lg">Logout</button>) : (<Link to='/login' className="btn bg-[#02A53B] hover:bg-[#166534] text-white px-8 rounded-lg">Login</Link>)
                }



            </div>
        </div>
    );
};

export default Navbar;