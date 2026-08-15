import { Link } from "react-router-dom"
import logo from "../assets/Medgrid1.png";

function Navbar() {
  return (
    <nav className="flex h-20 items-center justify-between px-8 py-5 shadow-md">
      <img src={logo} alt="MedGrid" className="h-25 w-30"/>

      <div className="flex items-center gap-10">
         <Link to="/" className="hover:opacity-70">Home</Link>
         <Link to="/about" className="hover:opacity-70">About Us</Link>
         <Link to="/benefits" className="hover:opacity-70">Benefits</Link>
         <Link to="/solutions" className="hover:opacity-70">Solutions</Link>
         <Link to="/contact" className="hover:opacity-70">Contact Us</Link>
        <Link to="/waitlist" className="rounded-lg bg-blue-600 px-5 py-3 text-white">
          Join Waitlist
        </Link>
        
      </div>
    </nav>
  );
}

export default Navbar;