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
    <div className="tile is-child card is-primary">
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
    </div>
  )
}

NewsletterCard.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
  excerpt: PropTypes.object,
  slug: PropTypes.string,
}

export const BlogPostCard = ({
  date,
  title,
  slug
}) => (
  <div className="tile card is-child has-background-white">
    <div className="card-content">
      <small>{date}</small>
      <p className="title">{title}</p>
      <strong>
        <Link className="is-uppercase" to={slug}>
          Read More
        </Link>
      </strong>
    </div>
  </div>
)

BlogPostCard.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
  slug: PropTypes.string,
}

export const NotificationCard = ({
  message,
  title,
  link
}) => (
  <div className="tile is-child card is-tan">
    <div className="card-content">
      <p className="title">{title}</p>
      <div className="content">
        <p>{message}</p>
        {link &&
          <strong><a href={link} className="is-uppercase">Learn more</a></strong>
        }
      </div>
    </div>
  </div>
)

NotificationCard.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
}
