import React from 'react'
import { graphql, Link } from 'gatsby'
import { MarkdownContent } from '../../components/Content'
import Layout from '../../components/Layout'
import { Breadcrumbs } from '../../components/Navigation'
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage'

export const AffirmativeActionPageTemplate = ({ hero, warning, law, history, amendments, failureToComply, footer, location }) => {
  return (
    <div>
      <section className="section header-compliance is-medium">
        <div className="container">
          <h1 className="has-text-centered">{hero.heading}</h1>
          <h3 className="has-text-centered">{hero.subheading}</h3>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Breadcrumbs location={location} />
        </div>
      </section>

      <section className="section is-light is-medium">
        <div className="container">
          <h3 className="has-text-centered">Does this describe your company?</h3>
          <div className="level p-t-50 p-b-50">
            <div className="level-item has-text-centered">
              <div>
                <h1 className="has-text-primary is-size-0 has-text-weight-bold"><i className="fas fa-flag-usa" /></h1>
                <h1 className="heading is-size-5">Government Contractor</h1>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <h1 className="has-text-primary is-size-0 has-text-weight-bold">50<span className="has-text-primary-light">+</span></h1>
                <h1 className="heading is-size-5">Employees</h1>
              </div>
            </div>
            <div className="level-item has-text-centered">
              <div>
                <h1 className="has-text-primary is-size-0 has-text-weight-bold">
                  $50k <span className="has-text-primary-light is-size-3">or higher</span>
                </h1>
                <h1 className="heading is-size-5">Contract</h1>
              </div>
            </div>
          </div>
          <div className="tile card">
            <div className="card-content">
              <h3 className="has-text-centered">If so, your business is <strong>legally required</strong> to prepare and maintain an AAP.</h3>
              <div className="has-text-centered m-t-25">
                <Link to="/contact" className="button is-primary is-large">Request a Consultation<span className="m-l-10 icon"><i className="fas fa-chevron-right"></i></span></Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section is-dark-danger">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-3 has-text-centered">
              <h1 className="has-text-danger"><i className="fas fa-exclamation-triangle" style={{fontSize: '10rem'}} /></h1>
            </div>
            <div className="column">
              <MarkdownContent className="content" content={warning.content} />
              <Link to={warning.link.url} className="button is-danger m-t-10">{warning.link.text}</Link> <Link to="/contact" className="button is-success is-outlined m-t-10 m-l-10">Is my company compliant?<span className="m-l-10 icon"><i className="fas fa-chevron-right"></i></span></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section has-shadow is-medium">
        <div className="container">
          <h1 className="has-text-centered m-b-25">{law.heading}</h1>
          <div className="columns is-vcentered">
            <div className="column">
              <MarkdownContent className="content" content={law.content} />
            </div>
            <div className="column">
              <h4 className="is-italic has-text-grey-light">{law.quote}</h4>
            </div>
          </div>
        </div>

        <div className="container m-t-200">
          <div className="columns">
            <div className="column is-5">
              <PreviewCompatibleImage imageInfo={history.image} />
              <small>{history.caption}</small>
            </div>
            <div className="column">
              <h3>{history.heading}</h3>
              <hr />
              <MarkdownContent className="content" content={history.content} />
            </div>
          </div>
        </div>
      </section>


      <section id="amendments" className="section is-primary has-blue-gradient-primary-stripe-background">
        <div className="container">
          {amendments.map((item, index) => (
            <div className="columns">
              {(index % 2 === 1) &&
                <div className="column is-4"></div>
              }
              <div className="column is-8">
                <div className="tile card">
                  <div className="card-content">
                    <h4>{item.title}</h4>
                    <p className="m-b-25">{item.description}</p>
                    <strong><a href={item.url}>Learn more</a></strong>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="failure-to-comply" className="section is-primary is-medium">
        <div className="container">
          <h1>{failureToComply.heading}</h1>
          <div class="content">
            <MarkdownContent className="content" content={failureToComply.content} />
          </div>
          <h4 className="m-t-25">Your company may be susceptible to:</h4>
          <div className="tile is-ancestor m-t-25">
            <div className="tile is-parent">
              <div className="tile is-child card">
                <div className="card-content">
                  <p className="subtitle"><i class="has-text-primary-light fas fa-check-circle"></i> AAP audit</p>
                </div>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child card">
                <div className="card-content">
                  <p className="subtitle"><i class="has-text-primary-light fas fa-check-circle"></i> Employment practices audit</p>
                </div>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child card">
                <div className="card-content">
                  <p className="subtitle"><i class="has-text-primary-light fas fa-check-circle"></i> Compliance evaluations</p>
                </div>
              </div>
            </div>
          </div>
          <div className="tile is-ancestor">
            <div className="tile is-parent">
              <div className="tile is-child card">
                <div className="card-content">
                  <p className="subtitle"><i class="has-text-primary-light fas fa-check-circle"></i> Off-site review of records</p>
                </div>
              </div>
            </div>
            <div className="tile is-parent">
              <div className="tile is-child card">
                <div className="card-content">
                  <p className="subtitle"><i class="has-text-primary-light fas fa-check-circle"></i> On-site review of records and interviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section is-medium">
        <div className="container">
          <h4 className="has-text-primary">{footer.heading}</h4>
          <p className="m-t-25 subtitle">{footer.subheading}</p>
          <div className="has-text-centered m-t-100">
            <Link to="/contact" className="button is-primary is-large">Request a Consultation<span className="m-l-10 icon"><i className="fas fa-chevron-right"></i></span></Link>
          </div>
        </div>
      </section>

    </div>
  )
}

const AffirmativeActionPage = ({ data, location }) => {
  const { markdownRemark: query } = data;

  return (
    <Layout>
      <AffirmativeActionPageTemplate
        hero={query.frontmatter.hero}
        warning={query.frontmatter.warning}
        law={query.frontmatter.law}
        history={query.frontmatter.history}
        amendments={query.frontmatter.amendments}
        failureToComply={query.frontmatter.failureToComply}
        footer={query.frontmatter.footer}
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
        warning {
          content
          link {
            text
            url
          }
        }
        law {
          heading
          content
          quote
        }
        history {
          heading
          content
          image {
            childImageSharp {
              fluid(quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          caption
        }
        amendments {
          title
          description
          url
        }
        failureToComply {
          heading
          content
        }
        footer {
          heading
          subheading
        }
      }
    }
  }
`
