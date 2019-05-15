import React from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby-link"
import Layout from '../../components/Layout'
import { ContactLink, Breadcrumbs } from '../../components/Navigation'

import landingjpg from '../../assets/img/video/Oculus.jpg'
import landingmp4 from '../../assets/img/video/Oculus.mp4'

export const OurApproachPageTemplate = ({ location }) => {
  return (
    <div>
      <section className="hero is-fullheight has-video-background is-dark">
        <div className="hero-body">
          <div className="container">
            <div className="columns is-mobile is-centered">
              <div className="column is-10 has-text-centered">
                <h4 class="has-text-white">Our Approach</h4>
                <h1 class="has-text-white has-text-weight-bold">We provide one-stop-shopping for HR, not a one-way-approach for supporting businesses.</h1>
                <Link to="/about/our-approach/#content" className="button is-info is-large m-t-10">How We Do It <span className="m-l-10 icon"><i className="fas fa-arrow-down"></i></span></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="video-viewport">
          <video width="1920" height="1280" autoPlay muted loop>
            <source src={landingmp4} type="video/mp4" />
          </video>
          <img src={landingjpg} alt="People walking" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Breadcrumbs location={location} />
        </div>
      </section>

      <section id="content" className="section is-light">
        <div className="container">
          <h2 className="has-text-primary">Every company is different, as are their needs.</h2>
          <h2 className="has-text-primary-light">We customize our approach based on those needs.</h2>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h5>We take into consideration your industry, culture, philosophy, business model and your current or pressing needs to collaboratively develop a recommended path forward. Whether your company has 10 employees or 500, our comprehensive evaluation process allows us to discover, analyze and create an HR plan to help you achieve your business goals.</h5>
          <h4 className="has-text-centered m-t-100">How We Do It</h4>
          <div className="steps m-t-50">
            <div className="step-item is-active">
              <div className="step-marker">1</div>
              <div className="step-details">
                <p className="step-title">Discovery</p>
                <p>Our staff will personally meet with you to discuss your company's wants and needs.</p>
              </div>
            </div>
            <div className="step-item is-active">
              <div className="step-marker">2</div>
              <div className="step-details">
                <p className="step-title">Analysis</p>
                <p>Evaluation of current practices versus best practices to determine gap analysis.</p>
              </div>
            </div>
            <div className="step-item is-active">
              <div className="step-marker">3</div>
              <div className="step-details">
                <p className="step-title">Create</p>
                <p>In collaboration with our clients we develop an action plan with recommendations to achieve HR excellence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section is-primary">
        <div className="container has-text-centered">
          <ContactLink location={location} className="button is-light is-outlined is-large">Request a Consultation<span className="m-l-10 icon"><i className="fas fa-chevron-right"></i></span></ContactLink>
        </div>
      </section>
    </div>
  )
}

const OurApproachPage = ({ data, location }) => {
  return(
    <Layout hasClearNavbar={true}>
      <OurApproachPageTemplate
        location={location} />
    </Layout>
  )
}

export default OurApproachPage
