import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"
import { Location } from '@reach/router'

import Navbar from '../components/Navbar'
import './styles/all.sass'
import logo from '../img/hrs-white.svg'

const TemplateWrapper = ({ children }) => (
  <StaticQuery
    query={graphql`
      query HeadingQuery {
          site {
            siteMetadata {
              title,
              description,
            }
          }
        }
    `}
    render={data => (
      <div>
        <Helmet>
          <html lang="en" />
          <title>{data.site.siteMetadata.title}</title>
          <meta name="description" content={data.site.siteMetadata.description} />

          <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
	        <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
	        <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />

	        <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#5d68a6" />
	        <meta name="theme-color" content="fff" />

	        <meta property="og:type" content="business.business" />
          <meta property="og:title" content={data.site.siteMetadata.title} />
          <meta property="og:url" content="/" />
          <meta property="og:image" content="/img/og-image.jpg" />
        </Helmet>

        <Location>
          {({ location }) => {
            console.log(location)
            return <Navbar location={location.pathname} />
          }}
        </Location>
        <div id="main">{children}</div>
        <footer className="footer">
          <div className="footer-body">
            <div className="container">
              <div className="columns">
                <div className="column">
                  <img width="128px" src={logo} alt="HR Strategies" />
                </div>
                <div className="column">
                  <h5>Join Our Newsletter</h5>
                  <div className="field has-addons">
                    <div className="control is-expanded">
                      <input className="input is-medium" type="email" placeholder="Email" />
                    </div>
                    <div className="control">
                      <button className="button is-primary is-medium">
                        Join
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom p-t-25 p-b-25">
            <div className="container">
              <div className="level">
                <div className="level-left">
                  <div className="level-item">
                    <p>&copy; 2019 HR Strategies, LLC.</p>
                    <a href="/" className="p-l-25">Terms of Service</a>
                    <a href="/" className="p-l-25">Privacy Policy</a>
                  </div>
                </div>
                <div className="level-right">
                  <div className="level-item">
                    <div>
                      <span className="is-uppercase">Follow Us</span>
                      <a href="/" className="icon is-large">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="/" className="icon is-large">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="/" className="icon is-large">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )}
  />
)

export default TemplateWrapper
