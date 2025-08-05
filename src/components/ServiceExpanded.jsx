import './ServiceExpanded.css'

export default function ServiceExpanded({image, title, vantages, price}){
    return (
        <div id='service_expanded'>
            <img src={image} alt="wedding photo" />
            <div>
                <h2>{title}</h2>
                <div>
                    <p>{vantages[0]}</p>
                    <p>{vantages[1]}</p>
                    <p>{vantages[2]}</p>
                    <p>{vantages[3]}</p>
                    <h1>PER SESSION</h1>
                    <h3>${price}</h3>
                </div>
            </div>
        </div>
    );
}