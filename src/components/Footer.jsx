import NavBar from "./NavBar";
import './Footer.css';
import Facebook from '../assets/icons/Facebook_Logo.png';
import Twitter from '../assets/icons/Twitter_Logo.png';
import Youtube from '../assets/icons/Youtube_Logo.png';
import Instagram from '../assets/icons/Instagram_Logo.png';



export default function Footer(){
    return (
        <footer>
            <NavBar id="NavBar"/>
            <p id="content">Lorem ipsum dolor sit amet consectetur. Morbi volut tempus posuere viverra massa fames sed. Dignissim urisus et ac egestas dignissim.</p>
            <ul id="social_media">
                <li className="icon"><img src={Facebook} alt="facebook logo" /></li>
                <li className="icon"><img src={Twitter} alt="twitter logo" /></li>
                <li className="icon"><img src={Youtube} alt="youtube logo" /></li>
                <li className="icon"><img src={Instagram} alt="instagram logo" /></li>
            </ul>
            <p id="copyright">Copyright 2024 All Rights Reserved</p>
        </footer>
    );
}