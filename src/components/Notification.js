import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Notification = ({
  closeToast,
  title,
  message,
  link,
}) => (
  <div className="notification landing">
    <div className="columns is-centered is-vcentered">
      <div className="column is-narrow">
        <p className="title m-b-0">{title}</p>
        <p className="content">{message}</p>
      </div>
      <div className="column is-narrow">
        <div className="buttons">
          {link &&
            <Link to={link} className="button is-primary has-text-weight-bold">Learn more</Link>
          }
          <button onClick={closeToast} className="button is-light">
            <span className="icon is-small">
              <i className="fas fa-times"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
)

Notification.propTypes = {
  closeToast: PropTypes.func,
  title: PropTypes.string,
  message: PropTypes.string,
  link: PropTypes.string,
}

export default Notification

export const CookiesNotification = ({
  closeToast,
}) => (
  <div>
    <div className="columns is-centered is-vcentered">
      <div className="column">
        <p className="is-size-7 has-text-light">HRStrategies.org uses cookies. By continuing to browse our site, you are agreeing to our use of cookies. For more details about cookies and how to manage them, please see our <Link to="/privacy" className="has-text-info">cookie policy</Link>.</p>
      </div>
      <div className="column is-narrow">
        <button onClick={closeToast} className="button is-small is-dark">
          <span className="icon is-small">
            <i className="fas fa-times"></i>
          </span>
        </button>
      </div>
    </div>
  </div>
)

CookiesNotification.propTypes = {
  closeToast: PropTypes.func,
}
