import './PortfolioPage.css'

import Title from '../components/Title'
import Button from '../components/Button'
import CardPortfolio from '../components/CardPortfolio';
import ButtonTouch from '../components/ButtonTouch';

import WeddingCutted from "../components/WeddingCutted";
import Wedding_32 from '../assets/images/Wedding_32.png'
import Wedding_33 from '../assets/images/Wedding_33.png'
import Wedding_23 from '../assets/images/Wedding_23.png'
import Wedding_24 from '../assets/images/Wedding_24.png'
import Wedding_25 from '../assets/images/Wedding_25.png'
import Wedding_26 from '../assets/images/Wedding_26.png'
import Wedding_27 from '../assets/images/Wedding_27.png'
import Wedding_28 from '../assets/images/Wedding_28.png'
import Wedding_29 from '../assets/images/Wedding_29.png'
import Wedding_30 from '../assets/images/Wedding_30.png'
import Wedding_31 from '../assets/images/Wedding_31.png'

export default function PortfolioPage(){
    return(
        <>
            <WeddingCutted/>
            <Title subTitle={"PORTFOLIO"} title={"HIGHLIGHTED WORKS"}/>
            <div className='cards'>
                <CardPortfolio image={Wedding_23} couple={"Sarah & Luke"} title={"WEDDING"}/>
                <CardPortfolio image={Wedding_24} couple={"Richard & Jane"} title={"WEDDING"}/>
                <CardPortfolio image={Wedding_25} couple={"Gareth & Eva"} title={"WEDDING"}/>
            </div>
            <div className='cards'>
                <CardPortfolio image={Wedding_26} couple={"Sarah & Luke"} title={"ENGAGEMENT"}/>
                <CardPortfolio image={Wedding_27} couple={"Richard & Jane"} title={"ENGAGEMENT"}/>
                <CardPortfolio image={Wedding_28} couple={"Gareth & Eva"} title={"ENGAGEMENT"}/>
            </div>
            <div className='cardslast'>
                <CardPortfolio image={Wedding_29} couple={"Sarah"} title={"PORTRAIT"}/>
                <CardPortfolio image={Wedding_30} couple={"Jane"} title={"PORTRAIT"}/>
                <CardPortfolio image={Wedding_31} couple={"Angeline"} title={"PORTRAIT"}/>
            </div>
            <ButtonTouch/>
            <div id='my_promise'>
                <img src={Wedding_32} alt="wedding 32" />
                <div>
                    <h3>My Promise</h3>
                    <p>I guarantee breathtaking wedding photos that perfectly capture the magic of your special day, or your money back</p>
                </div>
            </div>
            <div id='stay_beatifiul'>
                <div>
                    <h2>YOU’RE PERFECT</h2>
                    <h3>Stay Beautfiul</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Ac in bibendum pharetra justo nullam est placerat. Eget tortor lacus porta pellentesque duis velit habitant nisl dignissim. </p>
                    <Button content={"Enquire Now"} page={"/contact"}/>
                </div>
                <img src={Wedding_33} alt="wedding 33" />
            </div>
        </>
    );
}