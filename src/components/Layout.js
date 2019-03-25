import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from "gatsby"
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import '../assets/sass/all.sass'
import Cookies from 'universal-cookie'
import { CookiesNotification } from './Notification'
import useSiteMetadata from './SiteMetadata'

const Head = ({ data }) => (
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
)

export default class TemplateWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hasVisibleCookies: false
    }
  }

  componentDidMount() {
    const cookies = new Cookies();
    // if cookie undefined or debug
    if (cookies.get('hrs_viewed_cookies') === undefined) {
      this.setState({ hasVisibleCookies: true });
    }
  }

  render() {
    return (
      <div>
        <StaticQuery
          query={graphql`
            query {
              site {
                siteMetadata {
                  title
                }
              }
            }
          `}
          render={data => <Head data={data} />}
        />

        <Navbar isClear={this.props.hasClearNavbar} />

        {this.state.hasVisibleCookies && <CookiesNotification />}

        <div id="navigation-shadow"></div>
        <div id="main">{this.props.children}</div>
        <Footer />
      </div>
    )
  }
}
