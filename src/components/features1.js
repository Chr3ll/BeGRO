import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features1-container2 thq-section-max-width">
        <div className="features1-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features1-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features1-image2 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features1-image3 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features1-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features1-tab-horizontal1"
          >
            <div className="features1-divider-container1">
              {activeTab === 0 && <div className="features1-container3"></div>}
            </div>
            <div className="features1-content1">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <span className="thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features1-tab-horizontal2"
          >
            <div className="features1-divider-container2">
              {activeTab === 1 && <div className="features1-container4"></div>}
            </div>
            <div className="features1-content2">
              <h2 className="thq-heading-2">{props.feature2Title}</h2>
              <span className="thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features1-tab-horizontal3"
          >
            <div className="features1-divider-container3">
              {activeTab === 2 && <div className="features1-container5"></div>}
            </div>
            <div className="features1-content3">
              <h2 className="thq-heading-2">{props.feature3Title}</h2>
              <span className="thq-body-small">
                {props.feature3Description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  feature2Description:
    'Made with a blend of natural oils and vitamins that nourish and condition the beard, leaving it soft and manageable.',
  feature3Description:
    'The serum comes with a convenient dropper for easy application directly to the beard, ensuring even coverage.',
  feature1Title: 'Promotes Beard Growth',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1578054295632-7e25aa52e4dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mjc5MTM1Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: 'Natural Ingredients',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1640543600979-0078814565a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mjc5MTM1Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImgAlt: 'Beard serum bottle',
  feature1Description:
    'Our beard serum is specially formulated to stimulate hair follicles and promote healthy beard growth.',
  feature3ImgAlt: 'Beard serum application',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1531857414472-edf16a1bb78c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mjc5MTM1Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3Title: 'Easy Application',
  feature2ImgAlt: 'Beard serum ingredients',
}

Features1.propTypes = {
  feature2Description: PropTypes.string,
  feature3Description: PropTypes.string,
  feature1Title: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature2Title: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature3Title: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
}

export default Features1
