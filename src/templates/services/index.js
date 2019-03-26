import React from 'react'
import Layout from '../../components/Layout'
import Content, { HTMLContent } from '../../components/Content'

export const ServicesPageTemplate = ({ hero, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section is-light">
      <div className="container">
        <h1 className="has-text-centered">{hero.heading}</h1>
        <h3 className="has-text-centered">{hero.subheading}</h3>
      </div>
    </section>
  )
}

const ServicesPage = ({ data }) => {
  const { markdownRemark: query } = data
  return(
    <Layout>
      <ServicesPageTemplate
        hero={query.frontmatter.hero}
        contentComponent={HTMLContent} />
    </Layout>
  )
}

export default ServicesPage

export const servicesPageQuery = graphql`
  query ServicesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        hero {
          heading
          subheading
        }
        body
      }
    }
  }
`
