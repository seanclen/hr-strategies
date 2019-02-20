import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'

export const HomePageTemplate = ({data}) => (
  <div></div>
)

const HomePage = ({data}) => {
  return (
    <Layout>
      <HomePageTemplate data={data} />
    </Layout>
  )
}

export default HomePage
