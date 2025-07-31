export default function AboutPage(){
    return(
        <>
        <div>
         <img src="" alt="" />
        </div>
        <div>
            <h2>SERVICES</h2>
            <h1>PHOTOGRAPHY PACKAGES</h1>
        </div>
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
        <div>
            <h2>Process</h2>
            <h1>What to Expect</h1>
        </div>
        <div>

        </div>
        <div>
            <h2>FAQ</h2>
            <h1>Any Queries?</h1>
        </div>
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