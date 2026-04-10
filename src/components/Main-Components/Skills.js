import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Skills() {
  useEffect(() => {
    AOS.init({ duration: 1000 })
  }, [])
  return (
    <section className="skills-area page-section scroll-to-page" id="skills">
      <div className="custom-container">
        <div className="skills-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos='fade-up'>
              <i className="las la-shapes"></i> my skills
            </h4>
            <h1 className="scroll-animation" data-aos='fade-up'>My <span>Advantages</span></h1>
          </div>

          <div className="row skills text-center">
            <div className="col-md-3 scroll-animation" data-aos='fade-right'>
              <div className="skill">
                <div className="skill-inner">
                  <img src="../assets/images/react.png" alt="React" />
                  <h1 className="percent">95%</h1>
                </div>
                <p className="name">React / Next.js</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos='fade-up'>
              <div className="skill">
                <div className="skill-inner">
                  <img src="../assets/images/typescript.png" alt="TypeScript" />
                  <h1 className="percent">92%</h1>
                </div>
                <p className="name">TypeScript</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos='fade-down'>
              <div className="skill">
                <div className="skill-inner">
                  <img src="../assets/images/nodejs.png" alt="Node.js" />
                  <h1 className="percent">90%</h1>
                </div>
                <p className="name">Node.js</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos='fade-left'>
              <div className="skill">
                <div className="skill-inner">
                  <img src="../assets/images/python.png" alt="Python" />
                  <h1 className="percent">85%</h1>
                </div>
                <p className="name">Python</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos='fade-right'>
              <div className="skill">
                <div className="skill-inner">
                  <img src="../assets/images/aws.png" alt="AWS" />
                  <h1 className="percent">82%</h1>
                </div>
                <p className="name">AWS / Cloud</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos='fade-up'>
              <div className="skill">
                <div className="skill-inner">
                  <img src="../assets/images/docker.png" alt="Docker" />
                  <h1 className="percent">80%</h1>
                </div>
                <p className="name">Docker / K8s</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos='fade-down'>
              <div className="skill">
                <div className="skill-inner">
                  <img src="../assets/images/csharp.png" alt="C#" />
                  <h1 className="percent">80%</h1>
                </div>
                <p className="name">C# / C++</p>
              </div>
            </div>
            <div className="col-md-3 scroll-animation" data-aos='fade-left'>
              <div className="skill">
                <div className="skill-inner">
                  <img src="../assets/images/postgresql.png" alt="PostgreSQL" />
                  <h1 className="percent">85%</h1>
                </div>
                <p className="name">PostgreSQL / MongoDB</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
