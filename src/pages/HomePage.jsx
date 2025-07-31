import './HomePage.css'

import Service from '../components/Service'
import Experience from '../components/Experience'

import Wedding from "../assets/images/Wedding.png"
import Branch from "../assets/images/Branch.png"
import Author_Bio_Photo from "../assets/images/Author_Bio_Photo.png"
import Flowers_Underline from "../assets/images/Flowers_Underline.png"
import Flower_1 from "../assets/images/Flower_1.png"
import Flower_2 from "../assets/images/Flower_2.png"
import Flower_3 from "../assets/images/Flower_3.png"
import Beach_Wedding from "../assets/images/Beach_Wedding.png"
import Branch_Beach_Wedding from "../assets/images/Branch_Beach_Wedding.png"
import Wedding_1 from "../assets/images/Wedding_1.png"
import Wedding_2 from "../assets/images/Wedding_2.png"
import Wedding_3 from "../assets/images/Wedding_3.png"
import Wedding_4 from "../assets/images/Wedding_4.png"
import LessThan from "../assets/images/LessThan.png"
import GreaterThan from "../assets/images/GreaterThan.png"

export default function HomePage(){
    return(
        <>
            <div id="wedding">
                <img id="wedding-image" src={Wedding} alt="wedding" />
                <div id="wedding-content">
                    <h2 id="wedding-content-1">Your Dream Wedding Awaits</h2>
                    <h1 id="wedding-content-2">Artistic Wedding Photography</h1>
                </div>
            </div>
            <div id="branch">
                <img id="branch_image" src={Branch} alt="branch"/>
                <h3 id="branch_content_1">AWARD WINNING PHOTOGRAPHY</h3>
                <h2 id="branch_content_2">Showcasing your big day in a memorable and unforgettable way.</h2>
            </div>
            <div id="bio_photographer">
                <img id="bio_photo" src={Author_Bio_Photo} alt="author bio photo" />
                <div id="bio_photographer_content">
                    <h1>“</h1>
                    <h2>Hello, My Name is Tessa</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Dignissim consectetur tristique purus vehicula felis velit ac. Tempus velit morbi accumsan id sit interdum lacus turpis ac. Integer malesuada sagittis placerat eget.</p>
                    <p>Lorem ipsum dolor sit amet consectetur. Dignissim consectetur tristique purus vehicula felis velit ac. Tempus velit morbi accumsan id sit interdum lacus turpis ac. Integer malesuada sagittis placerat.</p>
                    <img src={Flowers_Underline} alt="flowers underline" />
                    <h3>Tessa.M</h3>
                    <button>Learn More</button>
                </div>
            </div>
            <div id='title_services'>
                <h3>SERVICES</h3>
                <h2>What I Offer</h2>
            </div>
            <div id='services'>
                <Service image={Flower_1} title={"Wedding"} price={2999}/>
                <Service image={Flower_2} title={"Portrait"} price={399}/>
                <Service image={Flower_3} title={"Engagement"} price={1999}/>
            </div>
            <div id='beach_wedding'>
                <img src={Beach_Wedding} alt="beach wedding"/>
                <div id='margin'>
                    <div id='border'>
                        <img src={Branch_Beach_Wedding} alt="branch beach wedding" />
                        <h3>Creative, Passionate, Artistic</h3>
                        <p>Lorem ipsum dolor sit amet consectetur. Dignissim consectetur tristique purus vehicula felis velit ac. Tempus velit morbi accumsan </p>
                    </div>
                </div>
            </div>
            <div id='title_portfolio'>
                <h3>PORTFOLIO</h3>
                <h2>Featured Story</h2>
            </div>
            <div id='portfolio'>
                <div>
                    <h2>01</h2>
                    <h3>Ricardo e Michele</h3>
                    <p>Lorem ipsum dolor sit amet consecte Dignissim consectetur tristique purus vehicula felis velit.</p>
                </div>
                <img className='portfolio_image' src={Wedding_1} alt="image wedding 1" />
                <img className='portfolio_image' src={Wedding_2} alt="image wedding 2" />
            </div>
            <div id='portfolio_button'>
                <button>View Gallery</button>
            </div>
            <div id='title_testimonials'>
                <h1>Client Testimonials</h1>
            </div>
            <div id='carousel'>
                <button><img src={LessThan} alt="less than" /></button>
                    <div id='carousel_info'>
                        <h2>“</h2>
                        <p>Showcasing your Big Day in a Memorable & Unforgettable way.</p>
                        <h3>Sarah & Luke</h3>
                    </div>
                <img src={Wedding_3} alt="image Wedding 3"/>
                <button><img src={GreaterThan} alt="greater than" /></button>
            </div>
            <div id='experience'>
                <h1>HELPING COUPLES BRING TO LIFE THEIR WEDDING DREAMS</h1>
                <div id='experiences'>
                    <Experience amount="12" text="Years Experience"/>
                    <Experience amount="10K" text="Photos Delivered"/>
                    <Experience amount="300" text="Events Captured"/>
                    <Experience amount="6" text="Awards"/>
                </div>
            </div>
            <div id='contact'>
                <div>
                    <h3>Contact</h3>
                    <h1>Get in Touch</h1>
                    <input type="text" placeholder='NAME'/>
                    <input type="text" placeholder='EMAIL'/>
                    <textarea placeholder='MESSAGE'></textarea>
                    <button>Send</button>
                </div>
                <img src={Wedding_4} alt="image wedding 4" />
            </div>
        </>
    );
}