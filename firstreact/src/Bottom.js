import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Logo from './Img/red-star.jpg'
import Pic1 from './Img/IMG_4690.JPG'
import Pic2 from './Img/IMG_4691.JPG'

function BottomPage(){
    return(
        <div className='bottom-page'>
            <div className="pic1">
                <img src = {Pic1} className = 'firstpic' alt='pic 1' />
                <div className='content1'>
                    <img src = {Logo} className = 'red-star' alt='red-star' />
                    <span>(10.0)</span>
                    <span>CEO</span>
                    <div>
                        <p>Beauty in nature</p>
                        <p>Let me be your guide in this amazing experince</p>
                    </div>
                </div>
            </div>
            <div className="pic2">
            <img src = {Pic2} className = 'secondpic' alt='pic 2' />
                <div className='content2'>
                    <img src = {Logo} className = 'red-star' alt='red-star' />
                    <span>(10.0)</span>
                    <span>CEO</span>
                    <div>
                        <p>In the horizon i find peace</p>
                        <p>Let me be your guide in this amazing experince</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BottomPage;