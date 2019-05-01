import React from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'react-responsive-carousel'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { v4 } from 'uuid'

const imageStyle = { borderRadius: '10000px', height: '128px', width: '128px' }

const Testimonials = ({items}) => (
  <div className="testimonials">
    <Carousel className="presentation-mode"
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      showArrows={false}
      interval={6000}
      autoPlay infiniteLoop>
      {items.map((item, index) => (
        <div key={v4()} className="width-100 p-b-25 p-t-25">
          <div className="columns is-vcentered is-centered">
            <div className="column is-half has-text-left">
              <h6 className="quote">{item.quote}</h6>
              <p>{item.author} &mdash; <a href="/">read story</a></p>
            </div>
            <div className="column is-hidden-mobile is-narrow">
              <figure className="image">
                <PreviewCompatibleImage imgStyle={imageStyle} imageInfo={item} />
              </figure>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  </div>
)

Testimonials.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      quote: PropTypes.string,
      author: PropTypes.string,
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    })
  )
}

export default Testimonials
