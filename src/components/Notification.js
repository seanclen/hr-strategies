import React from 'react'
import PropTypes from 'prop-types'
import { ToastContainer, toast } from 'react-toastify'

const Notification = ({ closeToast }) => (
  <div className="notification landing">
    <div className="level">
      <div className="level-left">
        <div className="level-item">
          <div>
            <p className="title">New FCRA Disclosure Notice</p>
            <p className="content">The Fair Credit Reporting Act (FCRA) will apply for third-party background checks.</p>
          </div>
        </div>
      </div>
      <div className="level-right margin-left-50">
        <div className="level-item">
          <div className="buttons">
            <span className="button is-warning has-text-weight-bold">Learn more</span>
            <a onClick={closeToast} className="button is-light">
              <span className="icon is-small">
                <i className="fas fa-times"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

Notification.propTypes = {
  closeToast: PropTypes.func
}

export default Notification
