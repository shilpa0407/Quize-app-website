
import React, { useEffect } from 'react';
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
import math from "../Images/math.png"
import english from "../Images/english.png"
import science from "../Images/science.png"
import Kannada from "../Images/Kannada.png"
import gk from "../Images/gk.png"
import section8 from "../Images/section8.png"
import unsplash1 from "../Images/unsplash1.png"
import unsplash2 from "../Images/unsplash2.png"
import unsplash3 from "../Images/unsplash3.png"
import fb from "../Images/fb.png"
import insta from "../Images/insta.png"
import tweet from "../Images/tweet.png"
import AOS from 'aos';
import 'aos/dist/aos.css'; 


function Landing() {
  useEffect(() =>{
    AOS.init();
  },[])

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
  return (

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
      <div className="main-text-img"  data-aos="zoom-in-up" data-aos-duration="3000" data-aos-mirror="true">
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
          <div data-aos="zoom-in-down" data-aos-easing="ease-out-cubic" data-aos-mirror="true" data-aos-duration="3000" className="card-1"><img src={card1} alt="card-1 img"></img></div>
          <div data-aos="zoom-in-down" data-aos-easing="ease-out-cubic"  data-aos-duration="3000" className="card-2"><img src={card2} alt="card-1 img"></img></div>
          <div data-aos="zoom-in-down" data-aos-easing="ease-out-cubic"  data-aos-duration="3000"  className="card-3"><img src={card3} alt="card-1 img"></img></div>
        </div>
      </div>
      <div className="section-3">
        <div className="cards-line-02" >
          <div data-aos="zoom-in-down" data-aos-easing="ease-out-cubic" data-aos-mirror="true"  data-aos-duration="3000"  className="card-4"><img src={card4} alt="card-1 img"></img></div>
          <div data-aos="zoom-in-down" data-aos-easing="ease-out-cubic" data-aos-mirror="true"  data-aos-duration="3000" className="card-5"><img src={card5} alt="card-1 img"></img></div>
          <div data-aos="zoom-in-down" data-aos-easing="ease-out-cubic" data-aos-mirror="true"  data-aos-duration="3000"  className="card-6"><img src={card6} alt="card-1 img"></img></div>
        </div>
      </div>

      <div className="section-4">
        <div className="text-and-btn">
          <div className="text-sec4"><p>lets sharp your <br></br>preparation</p></div>
          <div className="btn-sec4"> <button>explore all</button></div>
        </div>
      </div>
      <div className='water'>
        <div className="section-5">
          <div className="gallary-1"> 
            <div data-aos="fade-left" data-aos-easing="ease-out-cubic"  data-aos-duration="3000" data-aos-mirror="true" className="gal-1" >
              <div className='gal-1-text'>
                <h4>BCS Model Test</h4>
                <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam placerat tortor commodo lectus laoreet venenatis.</p>
              </div>
              <div className='gal-1-img'><img className='gal-1-img1' src={bscmodeltest} alt="some pic"></img></div>
            </div>
            <div data-aos="fade-left" data-aos-easing="ease-out-cubic"  data-aos-duration="3000" data-aos-mirror="true" className="gal-2"><img className='gal-1-img2' src={primaryexam} alt="some pic"></img><p>Primary Exam</p></div>
          </div>
          <div className="gal-2-1" >
            <div data-aos="fade-right"  data-aos-easing="ease-out-cubic" data-aos-duration="3000" data-aos-mirror="true" className='gal-3'><img className='gal-1-img3' src={bankexam} alt="some pic"></img><p>Bank Exam</p></div>
            <div data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="3000" data-aos-mirror="true" className='gal-4'><img className='gal-1-img4' src={nsiexam} alt="some pic"></img><p>NSI Exam</p></div>
            <div data-aos="fade-right"  data-aos-easing="ease-out-cubic" data-aos-duration="3000" data-aos-mirror="true" className='gal-5'><img className='gal-1-img5' src={railwayexam} alt="some pic"></img><p>Railway Exam</p></div>
          </div>
        </div>
        <div className="section-6" >
          <div className="text-and-btn-2" >
            <div className="text-sec6"><p>Explore Our Quiz  <br></br>Categories</p></div>
            <div className="btn-sec6"> <button>explore all</button></div>
          </div>
        </div>
      </div>

      <div className='section-7'>
        <div id='boxes'>
          <div data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-mirror="true" data-aos-duration="3000" className='box1'>
            <img src={math}className='box1-img' alt='box1'></img>
            <h6>Math</h6>
            <p>Sky was cloudless and of a deep dark blue spectacle <br></br> before us was indeed </p>
          </div>

          <div  data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-mirror="true" data-aos-duration="3000" className='box2'>
            <img src={english} className='box2-img' alt='box2'></img>
            <h6>English</h6>
            <p>Even the all-powerful Pointing has no <br></br> control about the blind texts.</p>
          </div>

          <div  data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-mirror="true" data-aos-duration="3000" className='box3'>
            <img src={science} className='box3-img' alt='box3'></img>
            <h6>Science</h6>
            <p>Unorthographic life One <br></br> day however a small line of <br></br> blind text.</p>
          </div>

          <div  data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-mirror="true" data-aos-duration="3000" className='box4'>
            <img src={Kannada} className='box4-img' alt='box4'></img>
            <h6>Kanadda</h6>
            <p>However a small line of blind <br></br>text by the name..</p>
          </div>

          <div  data-aos="zoom-in-up" data-aos-easing="ease-out-cubic" data-aos-mirror="true" data-aos-duration="3000" className='box5'>
            <img src={gk} className='box5-img' alt='box5'></img>
            <h6>General Knowledge</h6>
            <p>Text by the name of Lorem Ipsum <br></br> decided to leave for the far World<br></br> of Grammar.</p>
          </div>
        </div>
      </div>
      <div>
      </div>
      <div className='section-8'>
        <div data-aos="fade-up-left" data-aos-easing="ease-out-cubic" data-aos-duration="3000" className="sec-8-text" >
          <h4>Winner <br></br> Player</h4>
          <p>Orci varius natoque penatibus et magnis dis <br></br> parturient montes, nascetur ridiculus  mus. <br></br> Etiam placerat tortor commodo <br></br> lectus laoreet venenatis.</p>
        </div>
        <div  data-aos="fade-up-right" data-aos-easing="ease-out-cubic" data-aos-duration="3000" className='sec-8-img'><img className='sec-8-img1' src={section8} alt="sec-8"></img></div>
        </div>
        <div className='section-9'>
          <div  data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="3000" className='sec-9-text'>
          <h4>Check Latest Articles</h4>
          </div>
          <div data-aos="fade-up" data-aos-easing="ease-out-cubic" data-aos-duration="3000"  className='sec-9-images'>
            <div className='sec-9-img'><img className='sec-9-img1' src={unsplash1}  alt='SEC-9-1'></img> <p>Even the all-powerful Pointing <br></br> has no control about</p></div>
            <div className='sec-9-img'><img className='sec-9-img2' src={unsplash2}   alt='SEC-9-2'></img><p>Almost unorthographic life One day <br></br> however a small line</p></div>
            <div className='sec-9-img'><img className='sec-9-img3' src={unsplash3}   alt='SEC-9-3'></img><p>Lorem Ipsum decided to leave for the<br></br> far World of Grammar</p></div>
          </div>
          </div>
          <div className='footer'>
        <div><img src={fb} alt="fb"></img></div>
        <div><img src={insta} alt="fb"></img></div>
        <div><img src={tweet} alt="fb"></img></div>
       </div>
    </div>
  )
}

export default Landing;