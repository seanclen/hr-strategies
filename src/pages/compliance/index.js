import React from 'react'
import Layout from '../../components/Layout'

const CompliancePage = class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <section className="section is-light">
          <div className="container">
            <h1 className="has-text-centered">Compliance</h1>
          </div>
        </section>
      </Layout>
    )
  }
}

export default CompliancePage
