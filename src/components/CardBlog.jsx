import './CardBlog.css'

export default function CardBlog({image, title, date, category, text}){
    return(
        <div className='cardBlog'>
            <img src={image} alt="wedding image" />
            <h2>{title}</h2>
            <div>
                <h3>Date: </h3>
                <p>{date}</p>
            </div>
            <div>
                <h3>Category: </h3>
                <p>{category}</p>
            </div>
            <p>{text}</p>
        </div>
    );
}