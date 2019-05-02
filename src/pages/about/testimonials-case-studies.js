import React from "react";
import { navigate } from "gatsby-link";
import Layout from '../../components/Layout'
import { ContactLink, Breadcrumbs } from '../../components/Navigation'

export const TestimonialsCaseStudiesPageTemplate = ({ location }) => {
  return (
    <div>
      <section className="section header-compliance">
        <div className="container">
          <h1 className="has-text-centered">Testimonials & Case Studies</h1>
          <h3 className="has-text-centered">We've been lucky to work with so many great organizations.</h3>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Breadcrumbs location={location} />
        </div>
      </section>
    </div>
  )
}

const TestimonialsCaseStudiesPage = ({ data, location }) => {
  return(
    <Layout>
      <TestimonialsCaseStudiesPageTemplate
        location={location} />
    </Layout>
  )
}

export default TestimonialsCaseStudiesPage
