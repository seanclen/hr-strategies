import React from 'react'
import PropTypes from 'prop-types'
import { HomePageTemplate } from '../../templates/home-page'

const HomePagePreview = ({ entry, getAsset }) => {
  const entryStatistics = entry.getIn(['data', 'statistics', 'statistics'])
  const statistics = entryStatistics ? entryStatistics.toJS() : []

  const entryAffiliations = entry.getIn(['data', 'affiliations'])
  const affiliations = entryAffiliations ? entryAffiliations.toJS() : []

  const entryTestimonials = entry.getIn(['data', 'testimonials'])
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : []

  const blogPosts = []
  const newsletter = []
  const frontmatter = {
    notification: {
      display: entry.getIn(['data', 'notification', 'display']),
      link: entry.getIn(['data', 'notification', 'link']),
      message: entry.getIn(['data', 'notification', 'message']),
      title: entry.getIn(['data', 'notification', 'title']),
    },
    hero: {
      tagline: entry.getIn(['data', 'hero', 'tagline']),
    },
    affiliations: affiliations,
    section1: {
      heading: entry.getIn(['data', 'section1', 'heading']),
      description: entry.getIn(['data', 'section1', 'description']),
      linkText: entry.getIn(['data', 'section1', 'linkText']),
      linkUrl: entry.getIn(['data', 'section1', 'linkUrl']),
    },
    statistics: {
      heading: entry.getIn(['data', 'statistics', 'heading']),
      subheading: entry.getIn(['data', 'statistics', 'subheading']),
      statistics: statistics,
    },
    discount: {
      display: entry.getIn(['data', 'discount', 'display']),
      title: entry.getIn(['data', 'discount', 'title']),
      description: entry.getIn(['data', 'discount', 'description']),
      percentage: entry.getIn(['data', 'discount', 'percentage']),
      linkText: entry.getIn(['data', 'discount', 'linkText']),
      linkUrl: entry.getIn(['data', 'discount', 'linkUrl']),
    },
    testimonials: testimonials,
  }
  
  return (
    <HomePageTemplate
      blogPosts={blogPosts}
      newsletter={newsletter}
      content={frontmatter}
    />
  )
}

export default HomePagePreview
