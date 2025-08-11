import "./ServicesPage.css"

import Query from "../components/Query";
import ServiceExpanded from "../components/ServiceExpanded";
import Title from "../components/Title"
import ButtonTouch from "../components/ButtonTouch"
import Grid from '../components/Grid_1'
import Button from "../components/Button"
import WeddingCutted from "../components/WeddingCutted";

import Branch from "../assets/vectors/Branch_1.png"
import Wedding_6 from '../assets/images/Wedding_6.png'
import Wedding_7 from '../assets/images/Wedding_7.png'
import Wedding_8 from '../assets/images/Wedding_8.png'
import Wedding_14 from '../assets/images/Wedding_14.png'
import Wedding_15 from '../assets/images/Wedding_15.png'

export default function ServicesPage(){
    return(
        <>
        <WeddingCutted/>
        <Title subTitle={"SERVICES"} title={"PHOTOGRAPHY PACKAGES"}/>
        <div>
            <div id="services_expanded">
                <ServiceExpanded image={Wedding_6} title={"Wedding"} price={"799"} 
                vantages={["500+ High-Quality Photos","6 Hours HD Footage", "*Additional Photographer subject to charge", "*Videographer subject to charge"]}/>
                <ServiceExpanded image={Wedding_7} title={"Portrait"} price={"399"}
                vantages={["Atleast 10 High Quality Photos", "Professionally Edited", "Hourly rates applied", "*Videographer subject to charge"]}/>
                <ServiceExpanded image={Wedding_8} title={"Engagement"} price={"799"}
                vantages={["200 High-Quality Photos", "3 Hours HD Footage", "*Additional Photographer subject to charge", "*Videographer subject to charge"]}/>
            </div>
            <ButtonTouch/>
        </div>
        <div id="branch_title">
            <img src={Branch} alt="branch" />
            <h1>Celebrate your love with stunning images that will be cherished for a lifetime</h1>
        </div>
        <Title subTitle={"Process"} title={"What to Expect"}/>
        <Grid/>
        <Title subTitle={"FAQ"} title={"Any Queries?"}/>
        <div id="queries">
            <div>
                <Query content="WHAT IS YOUR PHOTOGRAPHY STYLE?"/>
                <Query content="HOW FAR IN ADVANCE CAN SHOULD WE BOOK YOUR SERVICES?"/>
                <Query content="DO YOU REQUIRE A DEPOSIT, AND WHAT ARE YOUR PAYMENT TERMS?"/>
                <Query content="CAN WE CUSTOMIZE A PHOTOGRAPHY PACKAGE TO FIT YOUR NEEDS?"/>
                <Query content="HOW SOON AFTER THE EVENT WILL I RECEIVE YOUR PHOTOS?"/>
            </div>
        </div>
        <div id="quality">
            <img id="quality_image" src={Wedding_14} alt="wedding 14 photo" />
            <div>
                <h2>Quality Service</h2>
                <p>On your big day, you can count on me to turn fleeting moments into timeless treasures you will cherish for generations.</p>
                <Button content={"Enquire Now"} page={"/contact"}/>
                <img src={Wedding_15} alt="wedding 15 photo" />
            </div>
        </div>
        </>
    );
}