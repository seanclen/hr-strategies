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

      <section className="section is-light is-medium">
        <div className="container">
          <div className="card is-primary">
            <div className="card-content">
              <h1 className="is-uppercase has-text-centered">This is why we do what we do.</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content">
            <h1>Bringing Tricia and her staff on board was the best business decision we made.</h1>
            <blockquote>
              HR Strategies has been on board with us for over twenty years. Tricia and staff handle all aspects of our HR needs, including, but not limited to, new employee orientation, exit interviews, health care benefits and harassment training just to name a few. Being a volunteer organization without an office staff, bringing Tricia and her staff on board was the best business decision we made.
            </blockquote>
            <p className="subtitle">
              Tom DiCristofaro<br />
            <small>President &mdash; Claymont Fire Company</small></p>
          </div>

          <hr />

          <div className="content">
            <h1>We receive outstanding customer service, response time, and follow up.</h1>
            <blockquote>
              HR Strategies has been a valued partner with Boland for the past five years. Tricia's professionalism, expertise and knowledge are second to none! We receive outstanding customer service, response time, and follow up. HR Strategies is a critical resource for us and we greatly appreciate their knowledge, insight, and guidance. We highly recommend their services to organizations who wish to work with a great HR business partner!
            </blockquote>
            <div className="columns">
              <div className="column is-narrow">
                <p className="subtitle">
                  Sarah Heitkemper<br />
                <small>Vice President &mdash; Boland</small></p>
              </div>
              <div className="column is-narrow">
                <p className="subtitle">
                  Min Oh<br />
                <small>HR Business Partner &mdash; Boland</small></p>
              </div>
            </div>
          </div>

          <hr />

          <div className="content">
            <h1>Their continuous educational courses allow us to trust that our policies and procedure are the most current to date.</h1>
            <blockquote>
              As the need for standard business practices and policies evolve, so did the need for our company's handbook. In doing so we were faced with incorporating HR policies and procedures. Having known Tricia from networking and her professional career in HR Strategies we decided to reach out for advice on implementing HR into our handbook. Having experience working with Tricia about HR there would be no other option to work with anyone else.<br />
              <h2>We were delighted with the amount of time and effort that was spent exclusively working with us on how the company could implement various HR strategies into our handbook.</h2> We were amazed at the amount of empirical and practical knowledge they presented along with practical situations where different HR strategies would be most beneficial or effective. Consulting with Tricia not only surpassed our needs for HR but expanded into our approach on terminations and recruiting candidates best qualified for positions. They also complete our Affirmative Action Plan accurately and on time. The most crucial difference that sets her apart is how readily accessible she makes herself for her clients & any issues or problems that arise. Not only is her response prompt & accurate, she provides multiple options for solutions and proceeds unwaveringly with whichever option chosen. Their continuous educational courses allow us to trust that our policies and procedure are the most current to date. They give us the tools and knowledge to confidently handle any current issue and their forward thinking allows us to always be prepared for future potential issues.
            </blockquote>
            <p className="subtitle">
              Rebecca Suppe<br />
            <small>CEO Treasurer &mdash; R. C. Fabricators, Inc.</small></p>
          </div>

          <hr />

          <div className="content">
            <h1>When Tri-Supply and Equipment was faced with the decision of either employing a full-time HR person or working with a private human resources firm, it was an easy decision.</h1>
            <blockquote>
              In today’s everchanging world of employee regulatory compliancy, employers are required to be aware and fulfill their obligations to federal, state, and local agencies. When Tri-Supply and Equipment was faced with the decision of either employing a full-time HR person or working with a private human resources firm, it was an easy decision. We brought on HR Strategies and Tricia Clendening’s team. They immediately evaluated our human resource requirements and implemented an action plan for both the near term and ongoing maintenance of our HR department. HR Strategies continues to work with us on an ongoing basis. They vet and make recommendations on new hires, work with our insurance company, and continually advise our management team on recommended updates on everything from our handbook to employee education. Thank you Tricia for being part of the TRI-Supply & Equipment team!
            </blockquote>
            <p className="subtitle">
              Dave Curran<br />
            <small>Partner &mdash; Tri-Supply & Equipment</small></p>
          </div>

          <hr />

          <div className="content">
            <h1>Tricia and her team have taken the time to learn our business and culture.</h1>
            <blockquote>
              HR Strategies serves as a strategic extension of our organizations human resources department in terms of compensation, training, recruiting and government reporting.  Tricia and her team have taken the time to learn our business and culture which has allowed them to successfully recruit and place candidates in record time at a fraction of the cost traditional recruiting agencies charge.  Additionally, the personalized dynamic training delivered by HR Strategies makes our employees feel comfortable and connected to the topic.  We continue to be impressed by their knowledge, dedication and professionalism and highly recommend their services.
            </blockquote>
            <p className="subtitle">
              Amanda Novak, PHR, SHRM-CP<br />
            <small>Human Resources Director &mdash; The Tri-M Group, LLC</small></p>
          </div>

          <hr />

          <div className="content">
            <h1>Tricia is knowledgeable, professional and responsive.</h1>
            <blockquote>
              Tricia Clendening and HR Strategies have been a great resource for Advanced Materials Technology.  Tricia is knowledgeable, professional and responsive.  As we have grown she has helped us update our HR policies to fit the needs of the company.  Whether you need help updating your employee handbook, training of federally mandated topics or help managing a delicate HR situation, I would strongly recommend HR Strategies.
            </blockquote>
            <p className="subtitle">
              Timothy Langlois<br />
            <small>Founder and CEO &mdash; Advanced Materials Technology</small></p>
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

const TestimonialsCaseStudiesPage = ({ data, location }) => {
  return(
    <Layout>
      <TestimonialsCaseStudiesPageTemplate
        location={location} />
    </Layout>
  )
}

export default TestimonialsCaseStudiesPage
