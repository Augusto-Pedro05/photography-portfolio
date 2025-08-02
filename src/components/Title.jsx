import "./Title.css"

export default function Title({subTitle, title}){
    return (
        <div id="title">
            <h2>{subTitle}</h2>
            <h1>{title}</h1>
        </div>
    );
}