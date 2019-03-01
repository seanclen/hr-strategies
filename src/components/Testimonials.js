import React from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'react-responsive-carousel'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { v4 } from 'uuid'

import logo from '../img/logo-short.svg'

const Testimonials = ({data}) => (
  <div className="testimonials">
    <Carousel className="presentation-mode"
      showStatus={false}
      showThumbs={false}
      showIndicators={false}
      interval={6000}
      autoPlay infiniteLoop>
    </Carousel>
    <article key={v4()} className="columns is-mobile is-vcentered is-centered">
      <div className="column is-half">
        <div className="quote">
          <p>The biggest benefit in working with HR Strategies is that, unlike the big HR or PEO companies we’ve used in the past, we know the people we’re working with. I know the team by name, and they know  us.</p>
          <strong>
            <a className="is-uppercase">
              Explore Our Services
            </a>
          </strong>
        </div>
      </div>
      <div className="column is-narrow">
        <figure class="image is-128x128">
          <img class="is-rounded" src={logo} />
        </figure>
      </div>
    </article>
  </div>
)

export default Testimonials
