import React from 'react'
import { graphql } from 'gatsby'
import Content, { HTMLContent } from '../../components/Content'
import Layout from '../../components/Layout'
import { Breadcrumbs } from '../../components/Navigation'

export const AffirmativeActionPageTemplate = ({ hero, content, contentComponent, location }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className="section is-light">
      <div className="container">
        <h1 className="has-text-centered">{hero.heading}</h1>
        <h3 className="has-text-centered">{hero.subheading}</h3>
        <Breadcrumbs location={location} />
        <PageContent className="content" content={content} />
      </div>
    </section>
  )
}

const AffirmativeActionPage = ({ data, location }) => {
  const { markdownRemark: query } = data;

  return (
    <Layout>
      <AffirmativeActionPageTemplate
        contentComponent={HTMLContent}
        hero={query.frontmatter.hero}
        content={query.html}
        location={location}
      />
    </Layout>
  )
}

export default AffirmativeActionPage

export const AffirmativeActionPageQuery = graphql`
  query AffirmativeActionPage($id: String!) {
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
