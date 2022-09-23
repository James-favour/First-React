import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Img1 from './Img/img1.jpg';
import Img2 from './Img/img2.jpg';
import Img3 from './Img/img3.jpg';
import Img4 from './Img/img4.jpg';
import Img5 from './Img/img5.jpg';
import Img6 from './Img/img6.jpg';
import Img7 from './Img/img7.jpg';
import Img8 from './Img/img8.jpg';
import Img9 from './Img/img9.jpg';

function Main(){
    return (
        <div className='mainSection'>
            <div className='images'>
                <img src={Img1} alt="img1"  />
                <img src={Img2} alt="img2"  />
                <img src={Img3} alt="img3"  />
                <img src={Img4} alt="img4"  />
                <img src={Img5} alt="img5"  />
                <img src={Img6} alt="img6"  />
                <img src={Img7} alt="img7"  />
                <img src={Img8} alt="img8"  />
                <img src={Img9} alt="img9"  />
                </div>

                <div className="words">
                <h2>VIEWING PLEASURE</h2>
                <p>join me in the journey as i uncover many beautiful landscapes ever discovered... </p>
                </div>             
        </div>
    )
}

export default Main;