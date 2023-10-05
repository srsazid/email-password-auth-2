import { Link, NavLink } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from "../Providers/AuthProvider";

const Navbar = () => {
    
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut= ()=>{
        logOut()
        .then(()=>{
            console.log("Log Out Success",)
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
        <li><NavLink to="/orders">Orders</NavLink></li>
        
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Email & Password Authentication/providers</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?<>
                         <span>{user.email}</span>
                         <a onClick={handleLogOut} className="btn btn-sm">Log Out</a>

                        </>:
                    <Link to="/login" className="btn btn-sm">Log In</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;