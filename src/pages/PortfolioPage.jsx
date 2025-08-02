import './PortfolioPage.css'

import Title from '../components/Title'
import Button from '../components/Button'

import Wedding_Cutted from '../assets/images/Wedding_Cutted.png'
import Wedding_32 from '../assets/images/Wedding_32.png'
import Wedding_33 from '../assets/images/Wedding_33.png'

export default function PortfolioPage(){
    return(
        <>
            <img src={Wedding_Cutted} alt="wedding cutted" />
            <Title subTitle={"PORTFOLIO"} title={"HIGHLIGHTED WORKS"}/>
            <div>

            </div>
            <button>GET IN TOUCH</button>
            <div>
                <img src={Wedding_32} alt="wedding 32" />
                <div>
                    <h3>My Promise</h3>
                    <p>I guarantee breathtaking wedding photos that perfectly capture the magic of your special day, or your money back</p>
                </div>
            </div>
            <div>
                <div>
                    <h2>YOU’RE PERFECT</h2>
                    <h3>Stay Beautfiul</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Ac in bibendum pharetra justo nullam est placerat. Eget tortor lacus porta pellentesque duis velit habitant nisl dignissim. </p>
                    <Button content={"Enquire Now"}/>
                </div>
                <img src={Wedding_33} alt="wedding 33" />
            </div>
        </>
    );
}