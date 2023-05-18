
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
import { Parallax, ParallaxLayer } from '@react-spring/parallax'



function Landing(){
    const [springProps, setSpringProps] = useSpring(() => ({
        xy: [0, 0],
        config: { mass: 1, tension: 100, friction: 14 },
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
        <div className="gal-1">1</div>
        <div className="gal-2">1</div>
        <div className="gal-3">1</div>
        <div className="gal-4">1</div>
        <div className="gal-5">1</div>
        <div className="gal-6">1</div>
    </div>
 </div>
</div>
</div>
        
        </div>
    )
}

export default Landing;