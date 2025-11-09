import about from '../assets/about1.jpg';
import aboutIcon1 from '../assets/icon1.png';
import aboutIcon2 from '../assets/icon2.png';
import aboutIcon3 from '../assets/icon1.png';
import aboutIcon4 from '../assets/icon2.png';
import aboutIcon5 from '../assets/icon1.png';

import team1 from '../assets/team1.jpg';
import team2 from '../assets/team2.jpg';
import team3 from '../assets/team3.jpg';

import { useEffect, useState } from 'react';
function About()
{
   function Counters({end})
    {
       const [count,setCount] = useState(0);
  
      useEffect(()=>
      {
         let start = 0;
        const duration = 5000;
        const setTime = Math.floor(duration/end);
  
        const timer = setInterval(()=>
        {
          start += 1;
          setCount(start);
          if(start === end) clearInterval(timer);
  
        },setTime);
  
          return()=>clearInterval(timer);
      },[end]);
  
        return <h5>{count}</h5> 
    }
  
  return(
    <div className="about-container">

      <div className="about-story">
          <h1>Our Origin Story</h1>
          <p>Born from Frustration, Built for Impact</p>
        <div className="about-story-content">

        <div className="about-box">
          <p>Founded in 2020 by three industry professionals who were frustrated with the gap between traditional education and real-world job requirements. We noticed that graduates were learning theory but lacked the practical skills that companies actually needed. Our mission became clear: to create an education that bridges this gap.
<br/>
We started by collaborating directly with tech leaders to map the exact skills demanded in the modern workplace. This real-time intelligence became the foundation of every curriculum we built. We replaced theoretical exams with hands-on projects, simulating the challenges and pressures of a real tech environment. Our instructors are not just teachers; they are seasoned practitioners who bring current industry practices and insights directly to our students. We foster a continuous feedback loop, constantly refining our content to keep pace with the breakneck speed of technological change. Ultimately, we measure our success not by certificates issued, but by the careers transformed and the tangible impact our students make in their new roles.
          </p>
        </div>

        <div className="about-image">
          <img src={about}></img>
        </div>
        </div>
      </div>



      <div className='about-edu'>
        <div className='about-edu-content'>
          <h1>Our Educational Philosophy</h1>
          <div className='about-edu-box'>
            <img src={aboutIcon1}/>
            <h4>Learn by Building</h4>
            <p>We believe the best learning happens when you're actively creating. That's why every course is centered around building real projects that solve actual problems.</p>
          </div>

           <div className='about-edu-box-row'>
            <img src={aboutIcon2}/>
            <h4>Learn by Building</h4>
            <p>We believe the best learning happens when you're actively creating. That's why every course is centered around building real projects that solve actual problems.</p>
          </div>

           <div className='about-edu-box'>
            <img src={aboutIcon3}/>
            <h4>Learn by Building</h4>
            <p>We believe the best learning happens when you're actively creating. That's why every course is centered around building real projects that solve actual problems.</p>
          </div>

           <div className='about-edu-box-row'>
            <img src={aboutIcon4}/>
            <h4>Learn by Building</h4>
            <p>We believe the best learning happens when you're actively creating. That's why every course is centered around building real projects that solve actual problems.</p>
          </div>

           <div className='about-edu-box'>
            <img src={aboutIcon5}/>
            <h4>Learn by Building</h4>
            <p>We believe the best learning happens when you're actively creating. That's why every course is centered around building real projects that solve actual problems.</p>
          </div>
        </div>
      </div>



      <div className='about-team'>
        <h1>Leadership Team</h1>
        <div className='about-team-content'>
            <div className='about-team-box'>
              <img src={team1}></img>
              <h4>CEO & Founder</h4>
              <p>15 years in tech education, former Google Engineering Manager</p>
            </div>

            <div className='about-team-box'>
              <img src={team2}></img>
              <h4>Chief Learning Officer</h4>
              <p>PhD in Educational Technology, 12 years curriculum design experience</p>
            </div>

            <div className='about-team-box'>
              <img src={team3}></img>
              <h4>Head of Instruction</h4>
              <p>Former Microsoft Lead Developer, 8 years teaching experience</p>
            </div>
        </div>
      </div>




      <div className='about-metrics'>
        <h1>Company Metrics</h1>
        <p>Our Growth & Impact:</p>

        <div className='about-metrics-content'>

          <div className='about-metrics-box'>
            <Counters end={10}/>
            <p>Years of Educational Excellence</p>
          </div>

           <div className='about-metrics-box'>
            <Counters end={50}/>
            <p>Team Members Dedicated to Your Success</p>
          </div>

           <div className='about-metrics-box'>
            <Counters end={2000}/>
            <p>Hours of Course Content</p>
          </div>
        </div>
      </div>


            <div className='about-vision'>
              <h1>Future Vision</h1>
              <p>Where We're Headed</p>
              <div className='about-vision-box'>
                  <p>By 2025, we aim to become the world's leading platform for practical skills education, reaching 1 million students and expanding into emerging technologies like Web3, Quantum Computing, and Sustainable Tech.
                    
                  </p>
              </div>
            </div>
    </div>
  )
}
export default About;