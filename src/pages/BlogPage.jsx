import './BlogPage.css'

import Title from '../components/Title'
import WeddingCutted from "../components/WeddingCutted";
import CardBlog from '../components/CardBlog';

import Wedding_40 from '../assets/images/Wedding_40.png'
import Wedding_43 from '../assets/images/Wedding_43.png'
import Wedding_42 from '../assets/images/Wedding_42.png'
import Wedding_41 from '../assets/images/Wedding_41.png'

export default function BlogPage(){
    return(
        <>
            <WeddingCutted/>
            <Title subTitle={"BLOG"} title={"LATEST STORIES"}/>
            <div id='pos_title'>
                <p>Lorem ipsum dolor sit amet consectetur. Ipsum velit tincidunt tristique cras urna. Amet pellentesque erat dui lacus ultricies nec sit.</p>
            </div>
            <div id='cards'>
                <div className='card'>
                    <CardBlog image={Wedding_40} title={'GIFT IDEAS FOR THE BRIDE & GROOM ON THE WEDDING DAY'}
                    date={'28 July 2023'} category={'Wedding'} text={'Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate.'}/>
                    <CardBlog image={Wedding_41} title={'GIFT IDEAS FOR THE BRIDE & GROOM ON THE WEDDING DAY'}
                    date={'28 July 2023'} category={'Wedding'} text={'Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate.'}/>
                </div>
                <div className='card'>
                    <CardBlog image={Wedding_42} title={'GIFT IDEAS FOR THE BRIDE & GROOM ON THE WEDDING DAY'}
                    date={'28 July 2023'} category={'Wedding'} text={'Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate.'}/>
                    <CardBlog image={Wedding_41} title={'GIFT IDEAS FOR THE BRIDE & GROOM ON THE WEDDING DAY'}
                    date={'28 July 2023'} category={'Wedding'} text={'Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate.'}/>
                </div>
                <div className='card'>
                    <CardBlog image={Wedding_40} title={'GIFT IDEAS FOR THE BRIDE & GROOM ON THE WEDDING DAY'}
                    date={'28 July 2023'} category={'Wedding'} text={'Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate.'}/>
                    <CardBlog image={Wedding_43} title={'GIFT IDEAS FOR THE BRIDE & GROOM ON THE WEDDING DAY'}
                    date={'28 July 2023'} category={'Wedding'} text={'Lorem ipsum dolor sit amet as a consectetur. Rutrum ins tincidunt consequat nec potenti. Justo molestie amet vulputate.'}/>
                </div>
            </div>
        </>
    );
}