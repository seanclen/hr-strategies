import React from 'react'
import Layout from '../../components/Layout'

const PrivacyPage = class extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section is-light">
          <div className="container">
            <h1 className="has-text-centered">We take your privacy seriously</h1>
            <div className="box m-t-50">
              <div className="tabs is-centered">
                <ul>
                  <li className="is-active is-size-3"><a href="/">Privacy Policy</a></li>
                  <li className="is-size-3"><a href="/">Cookie Policy</a></li>
                </ul>
              </div>
              <div>
                <p><strong>Last Updated: January 01, 1967</strong></p>
              </div>
              <div className="content">
                Insert content here.
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default PrivacyPage
