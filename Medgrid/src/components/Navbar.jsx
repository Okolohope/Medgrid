import { NavLink } from "react-router-dom"
import logo from "../assets/Medgrid1.png";

function Navbar({ onMenuClick }) {
  return (
    <nav className="flex h-20 items-center justify-between px-8 py-5 shadow-md">
      <button
        onClick={onMenuClick}
        className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
        >
          <svg className="w-6 h-6" fill="none" stroke='currentColor' viewBox='0 0 24 24'>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h 16M4 12h16M4 18h16" />
          </svg>

      </button>
      <img src={logo} alt="MedGrid" className="h-50 w-40"/>

      <div className="hidden md:flex items-center gap-10">
         <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-600 font-medium' : 'hover:opacity-70'}>Home</NavLink>
         <NavLink to="/about" className={({ isActive }) => isActive ? 'text-blue-600 font-medium' : 'hover:opacity-70'}>About Us</NavLink>
         <NavLink to="/benefits" className={({ isActive }) => isActive ? 'text-blue-600 font-medium' : 'hover:opacity-70'}>Benefits</NavLink>
         <NavLink to="/solutions" className={({ isActive }) => isActive ? 'text-blue-600 font-medium' : 'hover:opacity-70'}>Solutions</NavLink>
         <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-blue-600 font-medium' : 'hover:opacity-70'}>Contact Us</NavLink>
        <NavLink to="/waitlist" className={({ isActive }) => isActive ? 'rounded-lg bg-blue-700 px-5 py-3 text-white' : 'rounded-lg bg-blue-600 px-5 py-3 text-white'}>
          Join Waitlist
        </NavLink>
        
      </div>
    </nav>
  );
}

export default Navbar;