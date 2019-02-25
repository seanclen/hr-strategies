import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import './affiliations.sass'

import logo from '../img/logo-short.svg'

export default class Affiliations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
    }

    this.updateCurrentSlide = this.updateCurrentSlide.bind(this)
  }

  updateCurrentSlide = (index) => {
    const { currentSlide } = this.state;

    if (currentSlide !== index) {
      this.setState({
          currentSlide: index
      });
    }
  }

  clickedImage = (index) => {
    console.log(index);
  }

  isActive = (index) => {
    return 'column is-narrow ' + ((index===this.state.currentSlide) ? 'is-active' : '')
  }

  render() {
    return (
      <section className="affiliations section is-primary p-t-0 p-l-0 p-r-0 p-b-0">
        <Carousel className="presentation-mode"
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          showArrows={false}
          interval={5000}
          selectedItem={this.state.currentSlide}
          onChange={this.updateCurrentSlide}
          autoPlay infiniteLoop>
          <div key="0" className="custom-slide is-primary">
            <div className="width-100">
              <h3 className="is-uppercase">Delaware Chapter</h3>
              <h4 className="is-uppercase">Associated Builders and Contractors, Inc</h4>
            </div>
          </div>
          <div key="1" className="custom-slide is-primary">
            <div className="width-100">
              <h3 className="is-uppercase">State of Delaware OMWBE Vendor</h3>
              <h4 className="is-uppercase">Office of Minority & Women Business Enterprise</h4>
            </div>
          </div>
        </Carousel>
        <div className="has-background-white-bis has-text-grey-darker p-t-25 p-b-25">
          <div className="container">
            <div className="logo-bar columns is-mobile is-centered">
              <div className={this.isActive(0)}>
                <div className="thumbnail">
                  <img src={logo} onClick={() => this.updateCurrentSlide(0)} width="85" alt="HR Strategies" />
                </div>
              </div>
              <div className={this.isActive(1)}>
                <div className="thumbnail">
                  <img src={logo} onClick={() => this.updateCurrentSlide(1)} width="85" alt="HR Strategies" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
