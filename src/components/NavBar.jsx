import {Link} from 'react-router-dom'
import Logo from '../assets/images/Logo.png'
import './NavBar.css'

export default function NavBar(){
    return (
        <nav id = "nav">
            <ul id = "navList">
                <li><Link className='navLink' to="/home">HOME</Link></li>
                <li><Link className='navLink' to="/about">ABOUT</Link></li>
                <li><Link className='navLink' to="/services">SERVICES</Link></li>
                <img src={Logo} alt="logo" />
                <li><Link className='navLink' to="/portfolio">PORTFOLIO</Link></li>
                <li><Link className='navLink' to="/blog">BLOG</Link></li>
                <li><Link className='navLink' to="/contact">CONTACT</Link></li>
            </ul>        
        </nav>
    );
}