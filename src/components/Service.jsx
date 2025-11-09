import service1 from '../assets/team1.jpg';
import service2 from '../assets/team2.jpg';
import service3 from '../assets/team3.jpg';
import service4 from '../assets/course42.jpg';
import service5 from '../assets/course43.jpg';
import service6 from '../assets/course44.jpg';
import { useState } from 'react';


function Service()
{

  const [activeIndex,setActiveIndex] = useState(null);

  const questions = [
    {que : ' Can I combine multiple services like mentorship and career coaching?',
     ans : 'Yes, we offer bundled packages. Our "Career Accelerator" combines both services with a dedicated success manager for a complete learning-to-employment journey.'
    },
    {que : ' What is your refund policy if I am not satisfied?',
     ans : 'We offer a 14-day money-back guarantee on all services. For longer programs, we provide prorated refunds at specific milestones if you choose to exit.'
    },
    {que : ' How quickly can I start after purchasing a service?',
     ans : 'Most services begin within 24 hours. You will be matched with your mentor or coach and gain immediate access to all learning materials.'
    },
    {que : ' Are there long-term contracts required?',
     ans : 'No long-term contracts are required. We offer flexible monthly and annual subscription options that you can cancel at any time.'
    },
    {que : 'Do you offer payment plans for your services?',
     ans : 'Yes, we provide interest-free monthly payment plans for all programs over $500. You can split costs into 3-12 monthly installments.'
    },
    {que : ' What qualifications do your mentors and coaches have?',
     ans : 'All mentors are senior industry professionals with 8+ years experience at companies like Google, Amazon, and Microsoft. Coaches have proven track records in tech recruitment and career development.'
    },
    {que : ' Can I switch mentors if the match isnt right?',
     ans : 'Absolutely. We offer free mentor reassignment within the first 30 days to ensure you have the right chemistry and teaching style match.'
    },
    {que : ' Do you provide certificates for completed services?',
     ans : 'Yes, you receive verified certificates and LinkedIn credentials for all completed programs, plus portfolio-ready project documentation.'
    }

  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return(
    <div className="service-container">
      <div className="service-container-box">
      <div className="service-content">
        <h1>Our Services</h1>
        <p>At EduTech, we believe in redefining education through innovation and practicality. Our services are designed to make learning impactful, engaging, and career-focused. Whether you’re a student, professional, or corporate team, we help you master the most in-demand digital skills of the future.</p>
      </div>

      <div className="service-box-container">
        <div className="service-box-content">
                    <img src={service1}></img> 
                    <h4>Personalized Learning Journeys</h4>
                    <p>Every learner is different — and so is their path to success. EduTech offers customized learning experiences that adapt to your goals, skill level, and learning speed. You’ll receive step-by-step guidance with tailored resources and assessments. This ensures you learn efficiently and achieve measurable growth.

                    </p>
          </div>

          <div className="service-box-row">
                    <img src={service2}></img> 
                    <h4>Corporate Upskilling Solutions</h4>
                    <p>In today’s fast-paced digital era, companies need skilled professionals to stay ahead. Our corporate training programs are built to empower organizations with modern tools and technologies. We focus on project-based, interactive sessions for maximum team engagement. The result is a workforce that’s confident, creative, and future-ready.

                    </p>
          </div>

          <div className="service-box-content">
                    <img src={service3}></img> 
                    <h4>Expert Mentorship & Career Coaching</h4>
                    <p>Learning from real experts makes all the difference. Our mentorship programs connect learners directly with professionals from Google, Amazon, and other top firms. You’ll receive portfolio reviews, interview guidance, and career strategy tips. This one-on-one approach ensures personal growth and practical skill mastery.

                    </p>
          </div>

          <div className="service-box-row">
                    <img src={service4}></img> 
                    <h4>Interactive Workshops & Live Sessions</h4>
                    <p>Education is most powerful when it’s interactive and exciting. EduTech hosts weekly live sessions, hackathons, and webinars to enhance your learning experience. These sessions are led by experts who share real-world insights and case studies. You’ll stay updated on the latest trends and technologies while gaining hands-on exposure.

                    </p>
          </div>

          <div className="service-box-content">
                    <img src={service5}></img> 
                    <h4>Global Certification & Internship Support</h4>
                    <p>Every learner deserves recognition for their hard work. That’s why our courses come with globally recognized certificates that validate your skills. Top-performing students get access to exclusive internship opportunities with partner companies. This bridge between learning and employment makes your career journey smoother and faster.

                    </p>
          </div>

          <div className="service-box-row">
                    <img src={service6}></img> 
                    <h4>Vibrant Learning Community</h4>
                    <p>Join an energetic global network of 50,000+ learners and mentors from 120+ countries. Our community is built for collaboration, peer learning, and professional networking. You can share ideas, showcase projects, and receive continuous support. Together, we grow stronger, smarter, and ready for the digital world.

                    </p>
          </div>
      </div>


      </div>



         <div className="service-faq">
        <h1>Frequently Asked Questions</h1>
        <div className="service-faq-box">
          {questions.map((q, index) => (
            <div key={index} className="faq-item">
              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <h4>{q.que}</h4>
                <span>{activeIndex === index ? '-' : '+'}</span>
              </div>
              {activeIndex === index && (
                <p className="faq-answer">{q.ans}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Service;