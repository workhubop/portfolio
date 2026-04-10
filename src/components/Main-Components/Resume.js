import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Resume() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section className="resume-area page-section scroll-to-page" id="resume">
        <div className="custom-container">
            <div className="resume-content content-width">
                <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                        <i className="las la-briefcase"></i> Resume
                    </h4>
                    <h1 className="scroll-animation" data-aos='fade-up'>Education & <span>Experience</span></h1>
                </div>

                <div className="resume-timeline">
                    <div className="item scroll-animation" data-aos='fade-right'>
                        <span className="date">Oct 2023 - Feb 2026</span>
                        <h2>Senior Full Stack Engineer</h2>
                        <p>HTC Global Services — Macomb, MI</p>
                    </div>
                    <div className="item scroll-animation" data-aos='fade-left'>
                        <span className="date">Mar 2022 - Sep 2023</span>
                        <h2>Full Stack Engineer</h2>
                        <p>Twitter — Macomb, MI</p>
                    </div>
                    <div className="item scroll-animation" data-aos='fade-right'>
                        <span className="date">Feb 2016 - Dec 2021</span>
                        <h2>Full Stack Developer</h2>
                        <p>Softjourn — Ivano-Frankivsk, Ukraine</p>
                    </div>
                    <div className="item scroll-animation" data-aos='fade-left'>
                        <span className="date">Apr 2016 - Dec 2021</span>
                        <h2>Master's Degree in Computer Science</h2>
                        <p>Ivano-Frankivsk National Technology University of Oil and Gas — Ukraine</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}
