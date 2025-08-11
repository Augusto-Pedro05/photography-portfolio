import './ErrorPage.css'

import Button from '../components/Button'
import WeddingCutted from "../components/WeddingCutted";
import Title from '../components/Title';

export default function ErrorPage(){
    return(
        <div id='error'>
            <WeddingCutted/>
            <Title subTitle={"ERROR"} title={"SORRY, THE PAGE YOU ARE LOOKING FOR DOESN’T EXIST."}/>
            <Button content={"Home"} page={"/"}/>
        </div>
    );
}