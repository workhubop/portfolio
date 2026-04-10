import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Service() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section className="services-area page-section scroll-to-page" id="services">
        <div className="custom-container">
            <div className="services-content content-width">
                <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                        <i className="las la-stream"></i> Services
                    </h4>
                    <h1 className="scroll-animation" data-aos='fade-up'>My <span>Specializations</span></h1>
                </div>

                <div className="services-items">
                    <div className="service-item scroll-animation" data-aos='fade-up'>
                        <i className="las la-code"></i>
                        <h2>Full Stack Development</h2>
                        <p>Building scalable web applications with React, Next.js, Node.js, and TypeScript from frontend to backend.</p>
                        <span className="projects">10+ Years</span>
                    </div>
                    <div className="service-item scroll-animation" data-aos='fade-up'>
                        <i className="las la-server"></i>
                        <h2>API & Backend Systems</h2>
                        <p>Designing and optimizing RESTful APIs and microservices with Node.js, Python, C#, and cloud platforms.</p>
                        <span className="projects">AWS · Azure · GCP</span>
                    </div>
                    <div className="service-item scroll-animation" data-aos='fade-up'>
                        <i className="las la-mobile"></i>
                        <h2>Mobile App Development</h2>
                        <p>Cross-platform mobile apps using React Native and Expo for iOS and Android, including App Store submission.</p>
                        <span className="projects">iOS & Android</span>
                    </div>
                </div>    
            </div>
        </div>
    </section>
  )
}
