import {Link} from 'react-router-dom'

import './ButtonTouch.css'

export default function ButtonTouch(){
    const handleClick = () => {
        window.scrollTo(0, 0);
    };

    return(
        <div id='container_button_touch'>
            <Link id='button_touch' to={'/contact'} onClick={handleClick}>GET IN TOUCH</Link>
        </div>  
    );
}