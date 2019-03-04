import React from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'react-responsive-carousel'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { v4 } from 'uuid'

import logo from '../img/logo-short.svg'

export default class Affiliations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
    }

    this.updateCurrentSlide = this.updateCurrentSlide.bind(this);
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
          {this.props.items.map((item, index) => (
            <div key={v4()} className="custom-slide is-dark">
              <div className="width-100">
                <h2 className="is-size-3 is-uppercase has-text-white">{item.heading}</h2>
                <p className="is-size-5 is-uppercase has-text-white">{item.subheading}</p>
              </div>
            </div>
          ))}
        </Carousel>
        <div className="is-hidden-touch has-background-white-bis has-text-grey-darker p-t-25 p-b-25">
          <div className="container">
            <div className="logo-bar columns is-mobile is-centered">
              {this.props.items.map((item, index) => (
                <div className={this.isActive(index)}>
                  <div className="thumbnail-wrapper"
                    style={{
                      width: '150px',
                    }}
                    onClick={() => this.updateCurrentSlide(index)}>
                    <div className="thumbnail-base">
                      <div className="thumbnail">
                        <PreviewCompatibleImage imageInfo={item} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>
    )
  }
}

Affiliations.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      heading: PropTypes.string,
      subheading: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    })
  )
}
