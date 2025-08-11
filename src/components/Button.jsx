import "./Button.css"
import { Link } from 'react-router-dom'

export default function Button({ content, page }) {
    const handleClick = () => {
        window.scrollTo(0, 0);
    };

    return (
        <Link className='button' to={page} onClick={handleClick}>
            {content}
        </Link>
    );
}
