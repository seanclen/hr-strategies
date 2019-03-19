import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"
import { Location } from '@reach/router'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './styles/all.sass'
import Cookies from 'universal-cookie'
import { CookiesNotification } from './Notification'

const TemplateWrapper = ({ children }) => {
  const cookies = new Cookies();
  if (cookies.get('hrs_viewed_cookies') !== 'true') {

  }
  return (
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
              return <Navbar location={location.pathname} />
            }}
          </Location>
          {cookies.get('hrs_viewed_cookies') !== 'true' &&
            <CookiesNotification />
          }
          <div id="navigation-shadow"></div>
          <div id="main">{children}</div>
          <Footer />
        </div>
      )}
    />
  )
}

export default TemplateWrapper
