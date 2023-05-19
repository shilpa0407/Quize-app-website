
import React, {useEffect } from 'react';
import "../components/Landing.css"
import quizbaj from "../Images/quizbaj.png"
import landingpic from "../Images/landingpic 01.png"
import card1 from "../Images/card1.png"
import card2 from "../Images/card2.png"
import card3 from "../Images/card3.png"
import card4 from "../Images/card4.png"
import card5 from "../Images/card5.png"
import card6 from "../Images/card6.png"
import { useSpring, animated } from 'react-spring';
import bscmodeltest from "../Images/bscmodeltest.png";
import primaryexam from "../Images/primaryexam.png";
import bankexam from "../Images/bankexam.png"
import nsiexam from "../Images/nsiexam.png"
import railwayexam from "../Images/railwayexam.png"


function Landing(){
    const [springProps, setSpringProps] = useSpring(() => ({
        xy: [0, 0],
        config: { mass: 10, tension: 1200, friction: 40 },
      }));
    
      const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        setSpringProps({ xy: [clientX, clientY] });
      };
    
      useEffect(() => {
        const handleMouseMove = (e) => {
          const { clientX, clientY } = e;
          setSpringProps({ xy: [clientX, clientY] });
        };
    
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
          window.removeEventListener('mousemove', handleMouseMove);
        };
      }, [setSpringProps]);
    return(
  
        <div>
            
        <animated.div className="cursor" style={{
            transform: springProps.xy.interpolate((x, y) => `translate3d(${x - 10}px, ${y - 10}px, 0)`),
          }}> </animated.div>
       {/*navigationbar */}

           <div className="navigation">
            <div className="logo"><img src={quizbaj} alt="logo"></img></div>
            <div className="menus">
                <div>About</div>
                <div>Portfolio</div>
                <div>Services</div>
                <div>Blog</div>
            </div>
            <div className="contact"><button>contact</button></div>
           </div>

{/* landing page main text and images */}
  <div className="main-text-img">

    <div className="main-text">
    <div className="text1-bold">Play Online Quiz & Win Cash Daily!</div>
    <div className="sm-text">Win up to 10,000 Rs monthly from QuizBaj.</div>

    <div className="login-rig">
    <div className="input">       
        <span>+91</span>
        <input type="text" />
      </div>

          <div className="reg-btn"><button>register now</button></div>
    </div>
    <div className="sm-text-2">Number of Active Users Right Now</div>
    <div className="sm-text-3">20,000+</div>
    </div> 
    <div className="img-div"><img className="small-img" src={landingpic} alt="pic"></img></div>
    </div>
    
{/* 2nd page how to play starts from here */}

<div className="section-2">
    <div className="sec-2-text">How to play</div>
    <div className="cards-line-01">
        <div className="card-1"><img src={card1} alt = "card-1 img"></img></div>
        <div className="card-2"><img src={card2} alt = "card-1 img"></img></div>
        <div className="card-3"><img src={card3} alt = "card-1 img"></img></div>
    </div>
  
</div>
<div className="section-3">
    <div className="cards-line-02">
        <div className="card-4"><img src={card4} alt= "card-1 img"></img></div>
        <div className="card-5"><img src={card5} alt= "card-1 img"></img></div>
        <div className="card-6"><img src={card6} alt= "card-1 img"></img></div>
    </div>
</div>
 
<div className="section-4">
    <div className="text-and-btn">
       <div className="text-sec4"><p>lets sharp your <br></br>preparation</p></div>
       <div className="btn-sec4"> <button>explore all</button></div>
    </div>
    <div className='water'>
 <div className="section-5">
    <div className="gallary-1">
        <div className="gal-1">
          <div className='gal-1-text'>
            <h4>BCS Model Test</h4>
            <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam placerat tortor commodo lectus laoreet venenatis.</p>
          </div>
          <div className='gal-1-img'><img className='gal-1-img1' src={bscmodeltest} alt="some pic"></img></div>
        </div>
        <div className="gal-2"><img className='gal-1-img2' src={primaryexam} alt="some pic"></img><p>Primary Exam</p></div>
    </div>
    <div className="gal-2-1">
    <div className='gal-3'><img className='gal-1-img3' src={bankexam} alt="some pic"></img><p>Bank Exam</p></div>
    <div className='gal-4'><img className='gal-1-img4' src={nsiexam} alt="some pic"></img><p>NSI Exam</p></div>
    <div className='gal-5'><img className='gal-1-img5' src={railwayexam} alt="some pic"></img><p>Railway Exam</p></div>
      </div>
 </div>
</div>
</div>

        </div>
    )
}

export default Landing;