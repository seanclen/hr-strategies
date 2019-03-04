import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { v4 } from 'uuid'

export const NewsletterCard = ({
  date,
  title,
  excerpt,
  slug,
}) => {
  return (
    <article key={v4()} className="tile is-child card is-primary">
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
  excerpt: PropTypes.string,
  slug: PropTypes.string,
}

export const BlogPostCard = ({
  date,
  title,
  slug
}) => (
  <article key={v4()} className="tile card is-child has-background-white">
    <div className="card-content">
      <small>{date}</small>
      <h2 className="title">{title}</h2>
      <strong>
        <Link className="is-uppercase" to={slug}>
          Read More
        </Link>
      </strong>
    </div>
  </article>
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
  <article key={v4()} className="tile is-child card is-tan">
    <div className="card-content">
      <p className="title">{title}</p>
      <div className="content">
        <p>{message}</p>
        {link &&
          <strong><a href={link} className="is-uppercase">Learn more</a></strong>
        }
      </div>
    </div>
  </article>
)

NotificationCard.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
}
