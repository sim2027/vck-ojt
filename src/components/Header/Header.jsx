import {Link} from 'react-router-dom'
import './Header.css'
const Header = () => {
    return( 
            <div>
            <header className='header1'>
                <nav>
                    <Link to="/home">Home</Link> <br/>
                    <Link to="/about">About</Link> <br/>
                    <Link to="/contact"> Contact</Link> <br/>
                    <Link to="/courses"> Courses</Link> <br/>
                    <Link to="/admission"> Admission</Link> <br/>
                    <Link to="/notfound"> NotFound</Link>
        
                </nav>
            </header>
        </div>
    )  
}

export default Header;