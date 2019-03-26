import React from 'react'
import Layout from '../../components/Layout'

const TrainingPage = class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Layout>
        <section className="section is-light">
          <div className="container">
            <h1 className="has-text-centered">Training</h1>
          </div>
        </section>
      </Layout>
    )
  }
}

export default TrainingPage
