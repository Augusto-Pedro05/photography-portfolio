import './Query.css'

export default function Query({content}){
    return(
        <div id='query'>
            <button>+</button>
            <h3>{content}</h3>
        </div>
    );
}