import React from 'react'
import PropTypes from 'prop-types'
import { ToastContainer, toast } from 'react-toastify'

const Notification = ({
  closeToast,
  title,
  message,
  link,
}) => (
  <div className="notification landing">
    <div className="columns is-centered is-vcentered">
      <div className="column is-narrow">
        <p className="title">{title}</p>
        <p className="content">{message}</p>
      </div>
      <div className="column is-narrow">
        <div className="buttons">
          {link &&
            <a href={link} className="button is-primary has-text-weight-bold">Learn more</a>
          }
          <a onClick={closeToast} className="button is-light">
            <span className="icon is-small">
              <i className="fas fa-times"></i>
            </span>
          </a>
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
