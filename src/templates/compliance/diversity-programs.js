import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'
import { CardPanel } from '../../components/Cards'
import { MarkdownContent } from '../../components/Content'
import { ContactLink, Breadcrumbs } from '../../components/Navigation'

export const DiversityProgramsPageTemplate = ({ hero, location }) => {
  const panelBusinessStrategies = [
    "Create focus at upper levels",
    "Creating behavioral standards",
    "Training people at  all levels",
    "Integration in recruitment, performance management, leadership assessment"
  ]
  const panelBestPractices = [
    "Fair treatment",
    "Equal access to opportunity",
    "Teamwork and collaboration",
    "Collaborative conflict resolution processes"
  ]

  return (
    <div>
      <section className="section header-compliance">
        <div className="container">
          <h1 className="has-text-centered">{hero.heading}</h1>
          <h3 className="has-text-centered">Less of a HR Program, More of a Business Strategy</h3>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Breadcrumbs location={location} />
        </div>
      </section>

      <section className="section is-light is-medium">
        <div className="container">
          <blockquote>
            <span className="is-size-3">Companies that embrace diversity and inclusion in all aspects of their business statistically outperform their peers.</span>
            <p className="cite"><a href="https://joshbersin.com">Josh Bersin</a> &mdash; President and Founder of Bersin & Associates</p>
          </blockquote>
        </div>
      </section>

      <section className="section is-medium has-white-top-right-blue-bottom-left-gradient-background">
        <div className="container">
          <div className="columns">
            <div className="column is-6">
              <div className="content">
                <h1>Culture change breeds internal innovation.</h1>
                <p>When an organization embarks on a process of culture change that seeks to incorporate <i>diversity and inclusion</i> as part of that change, this is a recognition that an organization’s most valuable assets are its people and that because each person is unique, everyone brings different potential contributions to the workplace.</p>
              </div>
            </div>
            <div className="column is-1"></div>
            <div className="column is-4">
              <CardPanel items={panelBusinessStrategies} title="Business Strategies" icon="far fa-check-square m-r-10"/>
            </div>
          </div>
          <div className="columns">
            <div className="column has-text-centered">
              <i class="fas fa-plus is-size-1 has-text-primary"></i>
            </div>
          </div>
          <div className="columns">
            <div className="column is-1"></div>
            <div className="column is-4">
              <CardPanel items={panelBestPractices} title="Best Practices" icon="far fa-check-square m-r-10"/>
            </div>
          </div>
          <div className="columns">
            <div className="column is-6"></div>
            <div className="column is-size-1 has-text-primary">
              <h1><i class="fas fa-equals"></i> GROWTH
                <span class="fa-stack fa-1x">
                  <i class="fas fa-circle fa-stack-2x"></i>
                  <i class="fas fa-thumbs-up fa-stack-1x fa-inverse"></i>
                </span>
              </h1>
            </div>
          </div>
          <div className="tile card has-shadow-primary m-t-50">
            <div className="card-content">
              <h4>Diversity is a key driver of innovation and is a critical component of successful business</h4>
              <p>According to <a href="">The <i>Forbes Insights</i> survey</a>, senior executives are recognizing that a diverse set of experiences, perspectives, and backgrounds is crucial to innovation and the development of new ideas. Multiple voices lead to new ideas, new services, and new products, and encourage out-of-the-box thinking.</p>
              <h4 className="m-t-50">The Facts</h4>
              <div className="content p-l-25">
                <p><span className="is-size-4 has-text-primary has-text-weight-bold">85%</span> believe a diverse and inclusive workforce is crucial to encouraging different perspectives and ideas that drive innovation &mdash; <a href="https://images.forbes.com/forbesinsights/StudyPDFs/Innovation_Through_Diversity.pdf">read more</a></p>
                <p><span className="is-size-4 has-text-primary has-text-weight-bold">35%</span> of diverse companies outperform homogeneous ones &mdash; <a href="https://www.mckinsey.com/business-functions/organization/our-insights/why-diversity-matters">read more</a></p>
                <p><span className="is-size-4 has-text-primary has-text-weight-bold">2.3x</span> higher cash flow enjoyed by inclusive companies &mdash; <a href="http://joshbersin.com/2015/12/why-diversity-and-inclusion-will-be-a-top-priority-for-2016/">read more</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section is-primary has-text-centered">
        <div className="level">
          <p className="level-item"><span className="subtitle has-text-white m-r-25">Have Questions?</span> <ContactLink location={location} className="button is-info is-large">Request a Consultation<span className="m-l-10 icon"><i className="fas fa-chevron-right"></i></span></ContactLink></p>
        </div>
      </section>

      <section className="section is-medium">
        <div className="container">
          <h2 className="has-text-centered m-b-25">Diversity Has Many Dimensions</h2>
          <p>There is no single, universally-accepted definition of <i>diversity</i> or <i>inclusion</i>. Rather, workplace diversity is understanding and valuing differences between people to give an organization a competitive business advantage.</p>
          <hr />
          <div className="columns is-vcentered p-t-25">
            <div className="column">
              <h4 className="is-italic has-text-grey-lighter">"... everyone has personal traits that can offer potential contributions to the workplace."</h4>
            </div>
            <div className="column">
              <p>While these high level definitions briefly describe a person's characteristics, everyone has personal traits that can offer potential contributions to the workplace. This can be broken down into two main categories: </p>
              <br />
              <p><strong>Inherent Diversity</strong> - race, ethnicity, gender, age, religion, disability, and sexual orientation</p>
              <p><strong>Acquired Diversity</strong> - communication style, work habits, behavioral attitudes, economic status, and knowledge</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const DiversityProgramsPage = ({ data, location }) => {
  const { markdownRemark: query } = data

  return (
    <Layout>
      <DiversityProgramsPageTemplate
        hero={query.frontmatter.hero}
        location={location}
      />
    </Layout>
  )
}

export default DiversityProgramsPage

export const DiversityProgramsPageQuery = graphql`
  query DiversityProgramsPage($id: String!) {
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
