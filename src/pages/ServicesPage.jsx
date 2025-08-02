import "./ServicesPage.css"

import Query from "../components/Query";
import ServiceExpanded from "../components/ServiceExpanded";
import Title from "../components/Title"

import Branch from "../assets/vectors/Branch_1.png"
import Wedding from "../assets/images/Wedding_Cutted.png"

export default function ServicesPage(){
    return(
        <>
        <div>
         <img src={Wedding} alt="" />
        </div>
        <Title subTitle={"SERVICES"} title={"PHOTOGRAPHY PACKAGES"}/>
        <div>
            <div>
                <ServiceExpanded/>
                <ServiceExpanded/>
                <ServiceExpanded/>
            </div>
            <button>Get in Touch</button>
        </div>
        <div>
            <img src={Branch} alt="branch" />
            <h1>Celebrate your love with stunning images that will be cherished for a lifetime</h1>
        </div>
        <Title subTitle={"Process"} title={"What to Expect"}/>
        <div>

        </div>
        <Title subTitle={"FAQ"} title={"Any Queries?"}/>
        <div>
            <Query query="WHAT IS YOUR PHOTOGRAPHY STYLE?"/>
            <Query query="HOW FAR IN ADVANCE CAN SHOULD WE BOOK YOUR SERVICES?"/>
            <Query query="DO YOU REQUIRE A DEPOSIT, AND WHAT ARE YOUR PAYMENT TERMS?"/>
            <Query query="CAN WE CUSTOMIZE A PHOTOGRAPHY PACKAGE TO FIT YOUR NEEDS?"/>
            <Query query="HOW SOON AFTER THE EVENT WILL I RECEIVE YOUR PHOTOS?"/>
        </div>
        <div>

        </div>
        </>
    );
}