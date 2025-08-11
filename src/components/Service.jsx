import './Service.css'

import Button from './Button'

export default function({image, title, price}){
    return(
        <div className='service'>
            <img src={image} alt={image} />
            <h2>{title}</h2>
            <div>
                <p>Per Session</p>
                <h3>${price}</h3>
            </div>
            <Button content={"More Details"} page={"/services"}/>
        </div>
    );
}