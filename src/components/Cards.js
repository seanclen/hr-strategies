import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

export const NewsletterCard = ({
  date,
  title,
  excerpt,
  slug,
}) => {
  return (
    <article className="tile is-child card is-primary">
      <div className="card-content">
        <small>Newsletter &bull; {date}</small>
        <p className="title">{title}</p>
        <div className="content" dangerouslySetInnerHTML={{__html: excerpt}}></div>
        <strong>
          <Link className="is-uppercase" to={slug}>
            Read More
          </Link>
        </strong>
      </div>
    </article>
  )
}

NewsletterCard.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
  excerpt: PropTypes.object,
  slug: PropTypes.string,
}

// export default NewsletterCard
