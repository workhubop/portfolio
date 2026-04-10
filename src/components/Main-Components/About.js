import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function About() {
	useEffect(() => {
		AOS.init({ duration: 1000 })
	}, [])
	return (
		<section className="about-area page-section scroll-to-page" id="about">
			<div className="custom-container">
				<div className="about-content content-width">
					<div className="section-header">
						<h4 className="subtitle scroll-animation" data-aos='fade-up'>
							<i className="lar la-user"></i> About
						</h4>
						<h1 className="scroll-animation" data-aos='fade-up'>Every great product begins with<br />
							an even <span>better engineer</span></h1>
					</div>
					<p className="scroll-animation" data-aos='fade-up'>Senior Software Engineer with over 10 years of experience building and
						maintaining web applications and backend systems. Strong background in
						C++, C#, JavaScript, Python, and React, with hands-on experience
						designing APIs, working with databases, and deploying applications to
						cloud environments. Experienced in collaborating with cross-functional
						teams to deliver reliable, maintainable software that meets real user
						and business needs. Focused on writing clean code, making practical
						architectural decisions, and using modern tools effectively to solve
						concrete problems.</p>
				</div>
			</div>
		</section>
	)
}
