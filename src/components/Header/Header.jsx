import {Link} from 'react-router-dom'
import './Header.css'
import React, { useState } from "react"; // Import useState
function Header() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to control drawer visibility
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  // Function to close drawer when a link is clicked
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };
    return(
        <div className='header1'>
            <header>
                <nav>
                    <Link to={"/"}className='navbar'>Vivekanand College</Link>
                    <div className='desktop-nav'>
                    <Link to={"/home"} className='nav'>Home</Link>
                    <Link to={"/about"} className='nav'>About</Link>
                    <Link to={"/courses"} className='nav'>Courses</Link>
                    <Link to={"/contact"} className='nav'>ContactUs</Link>
                    <Link to={"/admission"} className='navitem nav'>Apply Now!</Link>
                    <Link to={"/notfound"} className='nav'>NotFound</Link>
                    </div>
                </nav>
               {/* Mobile Hamburger Button */}
                     <button className="hamburger-menu" onClick={toggleDrawer}>
                       <span className="hamburger-icon"></span>
                       <span className="hamburger-icon"></span>
                       <span className="hamburger-icon"></span>
                     </button>
                     {/* Mobile Drawer Navigation */}
                     <nav className={`drawer-nav ${isDrawerOpen ? "open" : ""}`}>
                       <button className="close-drawer-btn" onClick={toggleDrawer}>
                         ✕
                       </button>
                       <Link to="/" className="nav-item" onClick={closeDrawer}>
                         Home
                       </Link>
                       <Link to="/about" className="nav-item" onClick={closeDrawer}>
                         About
                       </Link>
                       <Link to="/courses" className="nav-item" onClick={closeDrawer}>
                         Courses
                       </Link>
                       <Link to="/contact" className="nav-item" onClick={closeDrawer}>
                         Contact
                       </Link>
                       <Link
                         to="/admission"
                         className="nav-item btn primary-btn"
                         onClick={closeDrawer}
                       >
                         Apply Now!
                       </Link>
                     </nav>
                     {/* Overlay when drawer is open */}
                     {isDrawerOpen && (
                       <div className="drawer-overlay" onClick={toggleDrawer}></div>
                     )}
                     </header>
                     </div>
                 );
               }
 export default Header ;