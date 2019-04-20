import React from 'react'
import PropTypes from 'prop-types'

export const HTMLContent = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
)

const Content = ({ content, className }) => (
  <div className={className}>{content}</div>
)

export const MarkdownContent = ({ content, className }) => {
  var remark = require('remark')
  var html = require('remark-html')

  let convert = remark().use(html).processSync(content).toString()

  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: convert }} />
  )
}

Content.propTypes = {
  content: PropTypes.node,
  className: PropTypes.string,
}

HTMLContent.propTypes = Content.propTypes

export default Content
