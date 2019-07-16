import React from "react";
import { navigate } from "gatsby-link";
import Layout from '../../components/Layout'

export function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default class Index extends React.Component {
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
      <Layout hasClearNavbar={true}>
        <section className="contact-landing hero is-fullheight has-blue-gradient-background">
          <div className="container">
            <div class="columns is-mobile is-centered">
              <div class="column is-half">
                <div className="has-text-centered p-t-100 p-b-100">
                  <h2 className="has-text-white">Contact Us</h2>
                  <h5 className="has-text-white">Got a question? We’d love to hear from you. Send us a message and we’ll respond as soon as possible.</h5>
                </div>
                <form
                  name="contact"
                  method="post"
                  action="/contact/thanks/"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={this.handleSubmit}
                >
                  {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                  <input type="hidden" name="form-name" value="contact" />
                  <div hidden>
                    <label>
                      Don’t fill this out:{" "}
                      <input name="bot-field" onChange={this.handleChange} />
                    </label>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={"name"} >Your name</label>
                    <div className="control is-large">
                      <input className="input is-large" type={"text"} name={"name"} onChange={this.handleChange} id={"name"} required={true} />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={"email"}>Email</label>
                    <div className="control is-large">
                      <input className="input is-large" type={"email"} name={"email"} onChange={this.handleChange} id={"email"} required={true} />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label" htmlFor={"message"}>Message</label>
                    <div className="control is-large">
                      <textarea className="textarea is-large" name={"message"} onChange={this.handleChange} id={"message"} required={true} />
                    </div>
                  </div>
                  <div className="field has-text-centered">
                    <button className="button is-white is-large" type="submit">Send Message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
