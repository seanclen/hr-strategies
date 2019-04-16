import React from 'react'
import PropTypes from 'prop-types'
import { navigate } from 'gatsby'
import Cookies from 'universal-cookie'

const Notification = ({
  closeToast,
  title,
  message,
  link,
}) => {
  const cookies = new Cookies();
  const handleClose = (e, href) => {
    e.preventDefault();
    document.getElementById('homepage-notification').classList.toggle('hide');
    cookies.set('hrs_previously_viewed_notification', title, { path: '/' });
    if (href) {
      navigate(href)
    }
  }
  return(
    <div id="homepage-notification" className="columns is-centered is-vcentered">
      <div className="column is-narrow notification landing">
        <div className="columns is-centered is-vcentered">
          <div className="column is-narrow">
            <p className="title m-b-0">{title}</p>
            <p className="content">{message}</p>
          </div>
          <div className="column is-narrow">
            <div className="buttons">
              {link &&
                <a href={link} onClick={(e) => {handleClose(e, link);}} className="button is-primary has-text-weight-bold">Learn more</a>
              }
              <button onClick={(e) => {handleClose(e);}} className="button is-light">
                <span className="icon is-small">
                  <i className="fas fa-times"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Notification.propTypes = {
  closeToast: PropTypes.func,
  title: PropTypes.string,
  message: PropTypes.string,
  link: PropTypes.string,
}

export default Notification

export const CookiesNotification = () => {
  const cookies = new Cookies();
  const handleClose = (e, href) => {
    e.preventDefault();
    document.getElementById('cookies-notification').classList.toggle('hide');
    cookies.set('hrs_viewed_cookies', 'true', { path: '/' });
    if (href) {
      navigate(href)
    }
  }
  return (
    <div id="cookies-notification">
      <div className="columns is-centered is-vcentered">
        <div className="column">
          <p className="is-size-7 has-text-light">HRStrategies.org uses cookies. By continuing to browse our site, you are agreeing to our use of cookies. For more details about cookies and how to manage them, please see our <a href="/privacy" onClick={(e) => {handleClose(e, "/privacy")}} className="has-text-info">cookie policy</a>.</p>
        </div>
        <div className="column is-narrow">
          <button onClick={(e) => {handleClose(e);}} className="button is-small is-dark">
            <span className="icon is-small">
              <i className="fas fa-times"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
