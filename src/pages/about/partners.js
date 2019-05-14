import React from "react";
import { navigate } from "gatsby-link";
import Layout from '../../components/Layout'
import { ContactLink, Breadcrumbs } from '../../components/Navigation'

export const PartnersPageTemplate = ({ location }) => {
  return (
    <div>
      <section className="section header-compliance">
        <div className="container">
          <h1 className="has-text-centered">Our Strategic Business Partners</h1>
          <h3 className="has-text-centered">We have partnered with industry-leading businesses to offer the best solutions for all of our current and potential clients.</h3>
        </div>
      </section>

      <section className="section is-light">
        <div className="container">
          <Breadcrumbs location={location} />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="columns is-vcentered has-text-centered">
            <div className="column is-3"></div>
            <div className="column is-2">
              <a className="image" href="http://www.weinerbenefitsgroup.com">
                <img src="/img/image6.png" />
              </a>
            </div>
            <div className="column is-2">
              <a className="image" href="https://williamsagency.com">
                <img src="/img/image8.png" />
              </a>
            </div>
            <div className="column is-2">
              <a className="image" href="https://www.abcdelaware.com">
                <img src="/img/image7.png" />
              </a>
            </div>
          </div>

          <hr />

          <div className="content">
            <blockquote>
              HR Strategies is a valuable asset to ABC Delaware and its members.  The company provides our members and staff with comprehensive human resource management classes as well leadership and staff improvement programs.  Tricia’s advice and counsel regarding diversity & inclusion issues have helped our organization grow and be more in tune with today’s changing workforce. The company’s understanding of all things HR-related provides a great resource for ABC Delaware.
            </blockquote>
            <p className="subtitle">
              Ed Cappadano<br />
            <small>President &mdash; ABC of Delaware</small></p>
          </div>

          <hr />

          <div className="columns is-vcentered">
            <div className="column is-4"></div>
            <div className="column is-2">
              <a className="image" href="https://www.bluerockriversedge.com">
                <img src="/img/image9.jpg" />
              </a>
            </div>
            <div className="column is-2">
              <a className="image" href="https://www.safetyworksinc.com">
                <img src="/img/image10.jpg" />
              </a>
            </div>
          </div>

          <hr />

          <div className="content">
            <blockquote>
              Blue Rock RiversEdge has been partnering with HR Strategies and providing financial services and comprehensive financial planning to their clients for over ten years. Similar to HR Strategies’ philosophy, our process is centered around our client’s unique goals and objectives.
            </blockquote>
            <p className="subtitle">
              Jarrett Morris, CFP®, AIF®, ChFC®<br />
            <small>Partner &mdash; Blue Rock RiversEdge</small></p>
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

const PartnersPage = ({ data, location }) => {
  return(
    <Layout>
      <PartnersPageTemplate
        location={location} />
    </Layout>
  )
}

export default PartnersPage
