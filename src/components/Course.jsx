import { useState } from "react";


import course1 from "../assets/course1.jpg";
import course2 from "../assets/course2.jpg";
import course3 from "../assets/course3.jpg";
import course4 from "../assets/course4.jpg";
import course5 from "../assets/course5.jpg";
import course6 from "../assets/course6.jpg";
import course7 from "../assets/course7.jpg";
import course8 from "../assets/course8.jpg";

import course9 from "../assets/course44.jpg";
import course10 from "../assets/course10.jpg";
import course11 from "../assets/course11.jpg";
import course12 from "../assets/course12.jpg";
import course13 from "../assets/course13.jpg";
import course14 from "../assets/course14.jpg";
import course15 from "../assets/course15.jpg";
import course16 from "../assets/course16.jpg";

import course17 from "../assets/course17.jpg";
import course18 from "../assets/course18.jpg";
import course19 from "../assets/course19.jpg";
import course20 from "../assets/course20.jpg";
import course21 from "../assets/course21.jpg";
import course22 from "../assets/course22.jpg";
import course23 from "../assets/course23.jpg";
import course24 from "../assets/course24.jpg";



import course25 from "../assets/course25.jpg";
import course26 from "../assets/course26.jpg";
import course27 from "../assets/course27.jpg";
import course28 from "../assets/course28.jpg";
import course29 from "../assets/course29.jpg";
import course30 from "../assets/course30.jpg";
import course31 from "../assets/course31.jpg";
import course32 from "../assets/course32.jpg";


import course33 from "../assets/course33.jpg";
import course34 from "../assets/course34.jpg";
import course35 from "../assets/course35.jpg";
import course36 from "../assets/course36.jpg";
import course37 from "../assets/course37.jpg";
import course38 from "../assets/course38.jpg";
import course39 from "../assets/course39.jpg";
import course40 from "../assets/course40.jpg";


function Courses() {
  const categories = [
    {
      name: " Web Development",
      courses: [
        { title: "Complete React Developer - Master React with hooks, context & Redux", img: course1 },
        { title: "Vue.js Professional - Build modern applications with Vue 3", img: course2 },
        { title: "Angular Framework Mastery - Enterprise-level Angular development", img: course3 },
        { title: "Node.js Backend Development - REST APIs, authentication & databases", img: course4 },
        { title: "Python Django Full Stack - Python backend with Django framework", img: course5 },
        { title: "JavaScript Advanced Concepts - ES6+, async programming, patterns", img: course6 },
        { title: "Web Performance Optimization - Speed, SEO & core web vitals", img: course7 },
        { title: "Progressive Web Apps - Offline capabilities & mobile features", img: course8 },
          ],
    },
    {
      name: "Data Science & AI",
      courses: [
        { title: "Python for Data Science - Pandas, NumPy, data manipulation", img: course9 },
        { title: "Machine Learning Fundamentals - Algorithms, models & evaluation", img: course10 },
        { title: "Deep Learning with TensorFlow - Neural networks & AI applications", img: course11 },
        { title: "Data Visualization Mastery - Matplotlib, Seaborn, Plotly", img: course12 },
        { title: "Natural Language Processing - Text analysis & language models", img: course13 },
        { title: "Big Data Analytics - Hadoop, Spark & distributed computing", img: course14 },
        { title: "Computer Vision - Image recognition & processing", img: course15 },
        { title: "AI Product Management - Building AI-driven products", img: course16 },
       ],
    },
    {
      name: " Mobile Development",
      courses: [
        { title: "iOS Development with Swift - Native iPhone & iPad apps", img: course17 },
        { title: "Android Kotlin Development - Modern Android app creation", img: course18 },
        { title: "React Native Cross-Platform - Build once, deploy everywhere", img: course19 },
        { title: "Flutter & Dart Mastery - Google's UI toolkit for mobile", img: course20 },
        { title: "Mobile App Design Patterns - Architecture & best practices", img: course21 },
        { title: "Firebase for Mobile Developers - Backend services & databases", img: course22 },
        { title: "Mobile App Publishing - Store submission & optimization", img: course23 },
        { title: "Mobile Game Development - Unity for mobile gaming", img: course24 }
      ],
    },
    {
      name: " Cloud & DevOps",
      courses: [
        { title: "AWS Solutions Architect - Cloud infrastructure & services", img: course25 },
        { title: "Microsoft Azure Professional - Enterprise cloud solutions", img: course26 },
        { title: "Google Cloud Platform - GCP services & implementation", img: course27 },
        { title: "Docker & Containerization - Container management & orchestration", img: course28 },
        { title: "Kubernetes Mastery - Production-grade container management", img: course29 },
        { title: "CI/CD Pipeline Development - Automation & deployment strategies", img: course30 },
        { title: "Infrastructure as Code - Terraform & CloudFormation", img: course31 },
        { title: "Cloud Security & Compliance - Security best practices", img: course32 }
       
      ],
    },
    {
      name: " Design & Creative",
      courses: [
        { title: "UI/UX Design Fundamentals - User research & interface design", img: course33 },
        { title: "Adobe Creative Suite - Photoshop, Illustrator & XD", img: course34 },
        { title: "Design Systems & Style Guides - Scalable design architecture", img: course35 },
        { title: "Motion Graphics & Animation - After Effects & Lottie", img: course36 },
        { title: "Product Design Strategy - From concept to launch", img: course37 },
        { title: "Design Thinking Methodology - Human-centered problem solving", img: course38 },
        { title: "Brand Identity Design - Logo, typography & visual systems", img: course39 },
        { title: "Interactive Prototyping - Advanced prototyping techniques", img: course40 },
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="courses-container">
      <h1>Explore Our Courses</h1>

      {/*  Tabs */}
      <div className="course-tabs">
        {categories.map((cat, index) => (
          <button
            key={index}
            className={`tab-btn ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/*  Cards */}
      <div className="course-grid">
        {categories[activeTab].courses.map((course, i) => (
          <div key={i} className="course-card">
            <img src={course.img} alt={course.title} />
            <h4>{course.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;
