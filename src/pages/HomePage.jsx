import Wedding from "../assets/images/Wedding.png";
import Branch from "../assets/images/Branch.png"
import './HomePage.css'


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
                <img src={Branch} alt="branch"/>
                <h3>AWARD WINNING PHOTOGRAPHY</h3>
                <h2>Showcasing your big day in a memorable and unforgettable way.</h2>
            </div>
        </>
    );
}