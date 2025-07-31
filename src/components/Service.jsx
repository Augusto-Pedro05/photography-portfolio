import './Service.css'

export default function({image, title, price}){
    return(
        <div className='service'>
            <img src={image} alt={image} />
            <h2>{title}</h2>
            <div>
                <p>Per Session</p>
                <h3>${price}</h3>
            </div>
            <button>More Details</button>
        </div>
    );
}