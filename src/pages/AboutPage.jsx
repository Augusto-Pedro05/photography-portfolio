import './AboutPage.css'

import Title from '../components/Title'
import Button from '../components/Button'
import WeddingCutted from "../components/WeddingCutted";
import Grid from '../components/Grid_2';

import Author_Bio_Photo_2 from '../assets/images/Author_Bio_Photo_2.png'
import Branch_3 from '../assets/vectors/Branch_3.png'
import Wedding_16 from '../assets/images/Wedding_16.png'
import Wedding_17 from '../assets/images/Wedding_17.png'
import Wedding_18 from '../assets/images/Wedding_18.png'
import Wedding_19 from '../assets/images/Wedding_19.png'
import Wedding_21 from '../assets/images/Wedding_21.png'
import Wedding_22 from '../assets/images/Wedding_22.png'

export default function ServicesPage(){
    return(
        <>
            <WeddingCutted/>
            <Title subTitle={"ABOUT"} title={"MY STORY"}/>
            <div id='author_bio'> 
                <img id='author_bio_img' src={Author_Bio_Photo_2} alt="Author Bio Photo 2" />
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam viverra ut viverra lorem. Velit tellus vitae massa sed egestas ornare pretium. Donec odio faucibus consectetur feugiat varius.</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam viverra ut viverra lorem. Velit tellus</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Rutrum tincidunt consequat nec potenti. Justo molestie amet vulputate aliquam viverra ut viverra lorem. Velit tellus vitae massa sed egestas ornare pretium</p>
                    <img src={Branch_3} alt="branch 3" />
                    <Button content={"View Portfolio"}/>
                </div>
            </div>
            <div id='wedding_images'>
                <img src={Wedding_16} alt="photo wedding 16" />
                <img src={Wedding_17} alt="photo wedding 17" />
                <img src={Wedding_18} alt="photo wedding 18" />
                <img src={Wedding_19} alt="photo wedding 19" />
            </div>
            <Title subTitle={"GET TO KNOW ME"} title={"A Few Facts About Myself"}/>
            <Grid/>
            <div id='crafting_memories'>
                <div>
                    <h3>CRAFTING MEMORIES</h3>
                    <h2>Your Story, My Lens</h2>
                    <p>Your wedding day is a once-in-a-lifetime event, and choosing the right photographer is essential to preserving its magic for years to come. I would be honored to be a part of your special day.</p>
                    <Button content={"Book Now"}/>
                </div>
                <div id='crafting_memories_img'>
                    <img id='crafting_memories_img_1' src={Wedding_21} alt="photo wedding 21" />
                    <img id='crafting_memories_img_2'src={Wedding_22} alt="photo wedding 22" />
                </div>
            </div>
        </>
    );
}