import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import Content, { HTMLContent } from '../../components/Content'

export const EmployeeRelationsPageTemplate = ({ hero, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section is-light">
      <div className="container">
        <h1 className="has-text-centered">{hero.heading}</h1>
        <h3 className="has-text-centered">{hero.subheading}</h3>
        <PageContent className="content" content={content} />
      </div>
    </section>
  )
}

const EmployeeRelationsPage = ({ data }) => {
  const { markdownRemark: query } = data

  return (
    <Layout>
      <EmployeeRelationsPageTemplate
        contentComponent={HTMLContent}
        hero={query.frontmatter.hero}
        content={query.html}
      />
    </Layout>
  )
}

export default EmployeeRelationsPage

export const employeeRelationsPageQuery = graphql`
  query EmployeeRelationsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        hero {
          heading
          subheading
        }
      }
    }
  }
`