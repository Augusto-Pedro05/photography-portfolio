import './Experience.css'

export default function Experience({amount, text}){
    return(
        <div id='card_experience'>
            <h2>{amount}</h2>
            <p>{text}</p>
        </div>
    )
}