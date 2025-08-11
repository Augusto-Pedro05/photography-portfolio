import './CardPortfolio.css'

export default function CardPortfolio({image, couple, title}){
    return(
        <div id="card_portfolio">
            <img src={image} alt="Wedding image" />
            <h2>{couple}</h2>
            <h3>{title}</h3>
        </div>
    );
}