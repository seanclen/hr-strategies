import React from 'react'
import { Link } from 'gatsby'
import logo from '../assets/img/hrs-white.svg'

const Footer = () => (
  <footer className="footer">
    <div className="footer-body">
      <div className="container">
        <div className="columns">
          <div className="column">
            <div className="columns">
              <div className="column is-narrow">
                <img width="128px" src={logo} alt="HR Strategies" />
              </div>
              <div className="column">
                <h5 className="m-b-10">Contact</h5>
                <p>
                  137 Back Creek Dr.<br />
                  Middletown, DE 19709<br />
                  (302) 376-8595 <br />
                  <a href="mailto:contact@hrstrategies.org">contact@hrstragegies.org</a>
                </p>
              </div>
              <div className="column">
                <h5 className="m-b-10">Quick Links</h5>
                <p>
                  <a href="/">Services</a><br />
                  <a href="/">Training</a><br />
                  <a href="/">About Us</a><br />
                  <Link to="/contact">Contact Us</Link>
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <h5 className="m-b-10">Join Our Newsletter</h5>
            <div className="field has-addons">
              <div className="control is-expanded">
                <input className="input is-medium" type="email" placeholder="Email" />
              </div>
              <div className="control">
                <button className="button is-primary is-medium">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <div className="level">
          <div className="level-left">
            <div className="level-item">
              <p>&copy; 2019 HR Strategies, LLC.</p>
              <a href="/" className="p-l-25">Terms of Service</a>
              <Link to="/privacy" className="p-l-25">Privacy Policy</Link>
            </div>
          </div>
          <div className="level-right">
            <div className="level-item">
              <div>
                <span className="is-uppercase">Follow Us</span>
                <a href="/" className="icon is-large">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="/" className="icon is-large">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="/" className="icon is-large">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
