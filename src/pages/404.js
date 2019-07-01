import React from 'react'
import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <section className="hero is-large">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            Uh Oh...
          </h1>
          <h2 className="subtitle">
            You just hit a route that doesn&#39;t exist... the sadness.
          </h2>
        </div>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
