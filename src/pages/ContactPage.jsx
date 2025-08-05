import './ContactPage.css'

import Title from '../components/Title';
import WeddingCutted from "../components/WeddingCutted";
import Button from '../components/Button'

import Wedding_47 from '../assets/images/Wedding_47.png'
import Wedding_48 from '../assets/images/Wedding_48.png'

export default function ContactPage(){
    return(
        <>
            <WeddingCutted/>
            <Title subTitle={"CONTACT"} title={"GET IN TOUCH"}/>
            <div>
                <div>
                    <p>Your Name</p>
                    <input type="text" />
                    <p>Contact Number</p>
                    <input type="text" />
                    <p>Wedding / Event Date</p>
                    <input type="text" />
                    <p>Tell me about yourself / event plan</p>
                    <textarea name="form_contact" id="contact"></textarea>
                    <Button content={"Submit"}/>
                </div>
                <img src={Wedding_47.png} alt="wedding 47 photo" />
                <div>
                    <h2>Enquire Now!</h2>
                    <h1>“YOU WILL NEVER KNOW THE VALUE OF A MOMENT UNTIL IT BECOMES A MEMORY.”</h1>
                </div>
                <div>
                    <img src={Wedding_48} alt="wedding 48 photo" />
                    <div>

                    </div>
                </div>
            </div>
        </>
    );
} 