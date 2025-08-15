import './GalleryPage.css'

import WeddingCutted from '../components/WeddingCutted';
import Title from '../components/Title';

import Wedding_34 from '../assets/images/Wedding_34.png'
import Wedding_35 from '../assets/images/Wedding_35.png'
import Wedding_36 from '../assets/images/Wedding_36.png'
import Wedding_37 from '../assets/images/Wedding_37.png'
import Wedding_38 from '../assets/images/Wedding_38.png'
import Wedding_39 from '../assets/images/Wedding_39.png'
import Branch_1 from '../assets/vectors/Branch_1.png'
import Wedding_23 from '../assets/images/Wedding_23.png'
import Wedding_24 from '../assets/images/Wedding_24.png'
import Wedding_28 from '../assets/images/Wedding_28.png'
import Wedding_31 from '../assets/images/Wedding_31.png'

export default function GalleryPage(){
    return(
        <>
            <WeddingCutted/>
            <Title subTitle={'GALLERY'} title={'RACHEL & JONATHAN'}/>
            <div id='gallery'>
                <div id='gallery_initial_content'>
                    <div>
                        <h3>Date: </h3>
                        <p>28 July 2023</p>
                    </div>
                    <div>
                        <h3>Category: </h3>
                        <p>Wedding</p>
                    </div>
                </div> 
                <img src={Wedding_34} alt="wedding 24 photo" />
                <h3>Lorem ipsum dolor sit amet consectetur. Vitae nunc vitae massa mattis quam egestas egestas integer morbi. Lectus magnis accumsan nulla vulputate. Malesuada varius sagittis nec id tellus vitae adipiscing id. Et vitae sit urna aliquet sed arcu bibendum ut.</h3>
                <div id='gallery_images'>
                    <div id='gallery_images_1'>
                        <img src={Wedding_35} alt="wedding 35 photo" />
                        <img src={Wedding_36} alt="wedding 36 photo" />
                    </div>
                    <div id='gallery_images_2'>
                        <img src={Wedding_37} alt="wedding 37 photo" />
                        <img src={Wedding_38} alt="wedding 38 photo" />
                    </div>
                    <img src={Wedding_39} alt="wedding 39 photo" />
                </div>
                <div id='branch_title'>
                    <img src={Branch_1} alt="branch photo" />
                    <h2>More Works</h2>
                </div>
                <div id='more_images'>
                    <img src={Wedding_23} alt="wedding 23 photo" />
                    <img src={Wedding_24} alt="wedding 24 photo" />
                    <img src={Wedding_28} alt="wedding 28 photo" />
                    <img src={Wedding_31} alt="wedding 31 photo" />
                </div>
            </div>
        </>
    );
}