import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../assets/sass/all.sass'
import Cookies from 'universal-cookie'
import { CookiesNotification } from './Notification'
import useSiteMetadata from './SiteMetadata'

const TemplateWrapper = ({ children, hasClearNavbar }) => {
  const cookies = new Cookies();
  const { title, description } = useSiteMetadata()

  if (cookies.get('hrs_viewed_cookies') !== 'true') {

  }

  // Navbbar

  // {cookies.get('hrs_viewed_cookies') !== 'true' &&
  //   <CookiesNotification />
  // }

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
        <link rel="icon" type="image/png" href="/img/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/img/favicon-16x16.png" sizes="16x16" />

        <link rel="mask-icon" href="/img/safari-pinned-tab.svg" color="#5d68a6" />
        <meta name="theme-color" content="fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta property="og:image" content="/img/og-image.jpg" />
      </Helmet>

      <Navbar isClear={hasClearNavbar} />

      <div id="navigation-shadow"></div>
      <div id="main">{children}</div>
      <Footer />
    </div>
  )
}

export default TemplateWrapper
