import './ContactPage.css'

import Title from '../components/Title';
import WeddingCutted from "../components/WeddingCutted";
import Button from '../components/Button'

import Wedding_47 from '../assets/images/Wedding_47.png';
import Wedding_48 from '../assets/images/Wedding_48.png';
import Email from '../assets/vectors/Email.png';
import CellPhone from '../assets/vectors/CellPhone.png';
import Location from '../assets/vectors/Location.png';

export default function ContactPage(){
    return(
        <>
            <WeddingCutted/>
            <Title subTitle={"CONTACT"} title={"GET IN TOUCH"}/>
            <div id='contact_info'>
                <div id='info'>
                    <div className='contact_info_line'>
                        <p>Your Name</p>
                        <input type="text" />
                    </div>
                    <div className='contact_info_line'>
                        <p>Contact Number</p>
                        <input type="text" />
                    </div>
                    <div className='contact_info_line'>
                        <p>Wedding / Event Date</p>
                        <input type="text" />
                    </div>
                    <div className='contact_info_multiline'>
                        <p>Tell me about yourself / event plan</p>
                        <textarea name="form_contact" id="contact"></textarea>
                    </div>
                    <Button content={"Submit"} page={"/error"}/>
                </div>
                <img id="wedding_47" src={Wedding_47} alt="wedding 47 photo" />
            </div>
            <div id='enquire_title'>
                <h2>Enquire Now!</h2>
                <h1>“YOU WILL NEVER KNOW THE VALUE OF A MOMENT UNTIL IT BECOMES A MEMORY.”</h1>
            </div>
            <div id='contacts'>
                <img src={Wedding_48} alt="wedding 48 photo" />
                <div>
                    <div className='contact'>
                        <img src={Email} alt="email vector" />
                        <h3>EMAIL</h3>
                        <p>contact@TessaMorgan.xyz</p>
                    </div>
                    <div className='contact'>
                        <img src={Location} alt="location vector" />
                        <h3>ADDRESS</h3>
                        <p>5396 North Reese Avenue, Fresno CA 93722</p>
                    </div>
                    <div className='contact'>
                        <img src={CellPhone} alt="cellphone vector" />
                        <h3>CONTACT</h3>
                        <p>+1 901 247 5467</p>
                    </div>
                </div>
            </div>
            <div id='padding'>
            </div>    
        </>
    );
} 