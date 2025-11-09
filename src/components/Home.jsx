import profile from '../assets/online2.jpg';
import img1 from '../assets/student1.jpg';
import img2 from '../assets/student2.jpg';
import img3 from '../assets/student3.jpg';
import img4 from '../assets/student4.jpg';
import icon1 from '../assets/icon1.png';
import icon2 from '../assets/icon4.png';
import icon3 from '../assets/icon3.png';
import icon4 from '../assets/icon2.png';
import review1 from '../assets/beach16.jpeg';
import review2 from '../assets/beach3.webp';
import review3 from '../assets/beach2.webp';
import review4 from '../assets/beach4.jpeg';
import review5 from '../assets/beach9.jpeg';
import { useEffect, useState } from 'react';


function Home()
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




  const [review,setreview] = useState(0);

  const reviews = [
    {image:review1 ,title : 'From Retail to Tech Lead', desc : 'This program completely changed my career trajectory. I went from working retail to landing a $85,000 tech job in just 6 months!" - Sarah M.'},
    {image:review2,title : 'Career Changer at 40', desc : 'I never thought I could switch careers at my age, but the supportive community and practical projects made it possible." - James R'},
    {image:review3,title : 'Zero Experience to Hired in 6 Months', desc : 'No tech background, but the hands-on projects built my confidence and portfolio. Got hired as a frontend developer before even finishing the course!" - Mike T'},
    {image:review4,title : 'From Intern to Full-Stack Developer', desc : 'The real-world projects prepared me perfectly. I went from intern to full-time developer with a 50% salary increase in just one year!" - Chloe L.'},
    {image:review5, title : 'Bootcamp to Startup Founder', desc : 'Not only did I learn to code, but I also built my own startup during the program. The mentorship and community support made it all possible!" - David S'},

 
  ]

  useEffect(()=>
  {
      const timer = setInterval(()=>
      {
          setreview((prev)=>
          
            prev === reviews.length - 1 ? 0 : prev+1 
          );
      },2000);
      return()=>clearInterval(timer);
  },[reviews.length]);

  return(
    <div className="home-container">
      <div className='home-box'>
      <div className="home-content">
        <h1>Master Digital Skills for the Future Economy</h1>

        <p>Transform your career with cutting-edge courses designed by industry leaders. Join 50,000+ learners who have accelerated their careers through our project-based learning approach.
        
        </p>
        <button>ENROLL NOW</button>
      </div>

      <div className="home-image">
        <img src={profile}></img>
      </div>
      </div>

    
      <div className='home-course'>
        <h1>Trending This Week</h1>
        <div className='home-course-container'>
        <div className='home-course-image'>
          <img src={img1}></img>
          <img src={img2}></img>
          <img src={img3}></img>
          <img src={img4}></img>

        </div>

        <div className='home-course-content'>
          <div className='home-course-box'>
            <h4>Full-Stack Development Bootcamp</h4>
            <p>Learn React, Node.js, and MongoDB to build modern web applications</p>
          </div>

           <div className='home-course-box'>
            <h4>Data Science & AI Mastery</h4>
            <p>Python, Machine Learning, and Data Visualization for tomorrow's analysts</p>
          </div>

           <div className='home-course-box'>
            <h4>Digital Marketing Pro</h4>
            <p>SEO, Social Media, and Analytics to dominate digital landscapes</p>
          </div>

           <div className='home-course-box'>
            <h4>UX/UI Design Specialization</h4>
            <p>Create stunning user experiences with Figma and design thinking
</p>

          </div>
        </div>
      </div>
</div>



          <div className='home-choose'>

            <h1>Why Choose Us?</h1>
            <p>We're Different - Here's Why:</p>

            <div className='home-choose-content'>
                <div className='home-choose-box'>
                  <img src={icon1}></img>
                  <h4>Project-Based Curriculum</h4>
                  <p>Every course includes real-world projects that build your portfolio. Don't just watch videos - build actual applications that employers value.</p>
                </div>

                 <div className='home-choose-box'>
                  <img src={icon2}></img>
                  <h4>Industry Expert Instructors</h4>
                  <p>Learn from professionals currently working at Google, Amazon, and Tesla. Get insights you won't find in textbooks.</p>
                </div>

                 <div className='home-choose-box'>
                  <img src={icon3}></img>
                  <h4>Career Transformation</h4>
                  <p>Our students report an average 45% salary increase within 6 months of course completion with dedicated career support.</p>
                </div>

                 <div className='home-choose-box'>
                  <img src={icon4}></img>
                  <h4>Global Learning Community</h4>
                  <p>Join our network of 50,000+ students across 120 countries with active Discord communities and mentorship programs.</p>
                </div>
            </div>
          </div>



            <div className='home-counter'>
              <h1>Achievement Counters</h1>
              <p>Our Impact in Numbers:</p>
              <div className='home-counter-row'>
              <div className='home-counter-box'>
                <Counters end={1000}/>
                <p>Active Students Worldwide</p>
              </div>

              <div className='home-counter-box'>
                <Counters end={200}/>
                <p>Comprehensive Courses</p>
              </div>

              <div className='home-counter-box'>
                <Counters end={100}/>
                <p>Career Success Rate</p>
              </div>

               <div className='home-counter-box'>
                <Counters end={1000}/>
                <p>Projects Completed</p>
              </div>
              </div>
            </div>


            <div className='home-reviews'>
              <h1>Student Success Stories</h1>
              <p>Real Transformations, Real Results</p>

              <div className='home-reviews-content'>
                <div className='home-review-box'>
                    <img src={reviews[review].image}></img>
                    <h4>{reviews[review].title}</h4>
                    <p>{reviews[review].desc}</p>
                </div>
              </div>
            </div>
    </div>
  )
}
export default Home;