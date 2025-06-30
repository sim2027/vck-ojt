import {Link} from 'react-router-dom'
import './Header.css'
const Header = () => {
    return( 
            <div>
            <header className='header1'>
                <div className='navbar'>
               <Link to="/">Vivekanand College</Link>
               </div>
                <nav className='navbar desktop-nav'>
                     <Link to={"/home"} className='nav'>Home</Link>
                    <Link to={"/about"}className='nav'>About</Link>
                    <Link to={"/contact"}className='nav'>Contact</Link>
                    <Link to={"/courses"}className='nav'>courses</Link>
                    <Link to={"/admission"}className='navitem'>Apply Now </Link>
                </nav>
        
            </header>
        </div>
    )  
}

export default Header;