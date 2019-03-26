import React from 'react'
import Layout from '../../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const ServicesPageTemplate = ({ contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section is-light">
      <div className="container">
        <h1 className="has-text-centered">Services</h1>
      </div>
    </section>
  )
}

const ServicesPage = ({ data }) => {
  // const { markdownRemark: post } = data
  return(
    <Layout>
      <ServicesPageTemplate contentComponent={HTMLContent} />
    </Layout>
  )
}

export default ServicesPage
