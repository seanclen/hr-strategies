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
    <Link to={slug} className="tile is-child card is-primary">
      <article key={v4()}>
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
    </Link>
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
  <Link to={slug} className="tile card is-child has-background-white">
    <article key={v4()}>
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
  </Link>
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

  <Link to={link} className="tile is-child card is-tan">
    <article key={v4()}>
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
  </Link>

)

NotificationCard.propTypes = {
  date: PropTypes.string,
  title: PropTypes.string,
  link: PropTypes.string,
}
