import React from 'react'
import { Link } from 'gatsby'
import { navigate } from 'gatsby-link'
import logo from '../assets/img/hrs-white.svg'
import { encode } from '../pages/contact'

export default class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(
        form.getAttribute("action"),
        {
          state: {
            name: document.getElementById("name").value,
            contactFrom: this.props.location.state.contactFrom
          }
        }
      ))
      .catch(error => alert(error));
  }

  render() {
    return (
      <footer className="footer">
        <div className="footer-body">
          <div className="container">
            <div className="columns has-text-centered-mobile">
              <div className="column">
                <div className="columns">
                  <div className="column is-narrow">
                    <img width="128px" src={logo} alt="HR Strategies" />
                  </div>
                  <div className="column">
                    <h5 className="m-b-10">Contact</h5>
                    <p>
                      <a href="https://goo.gl/maps/MU85kR3DDZv1K8dR9">
                        137 Back Creek Dr.<br />
                        Middletown, DE 19709<br />
                      </a>
                      <a href="tel:+13023768595">(302) 376-8595<br /></a>
                      <a href="mailto:contact@hrstrategies.org">contact@hrstragegies.org</a>
                    </p>
                  </div>
                  <div className="column">
                    <h5 className="m-b-10">Quick Links</h5>
                    <p>
                      <Link to="/services">Services</Link><br />
                      <Link to="/training">Training</Link><br />
                      <Link to="/about">About Us</Link><br />
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
                    <button className="button is-primary no-grow is-medium">
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
                  <p>&copy; {new Date().getFullYear()} HR Strategies, LLC.</p>
                  <Link to="/privacy" className="p-l-25">Privacy Policy</Link>
                </div>
              </div>
              <div className="level-right">
                <div className="level-item">
                  <div>
                    <span className="is-uppercase">Follow Us</span>
                    <a href="https://www.facebook.com/HRSTRATEGIESLLC/" className="icon is-large">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/hr-strategies-llc-0b1307182" className="icon is-large">
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
  }
}
