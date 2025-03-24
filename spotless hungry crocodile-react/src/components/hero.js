import React, { Fragment } from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './hero.css'

const Hero = (props) => {
  return (
    <div className="hero-header78">
      <div className="hero-column thq-section-max-width thq-section-padding">
        <div className="hero-content1">
          <h1 className="hero-text1 thq-heading-1">
            {props.text ?? (
              <Fragment>
                <span className="hero-text7">
                  Transform Your Beard with Our Premium Serum
                </span>
              </Fragment>
            )}
          </h1>
          <h1 className="hero-text2 thq-heading-1">
            {props.text1 ?? (
              <Fragment>
                <span className="hero-text8">
                  Transform Your Beard with Our Premium Serum
                </span>
              </Fragment>
            )}
          </h1>
          <p className="hero-text3 thq-body-large">
            {props.text2 ?? (
              <Fragment>
                <span className="hero-text6">
                  Our beard serum is specially formulated to nourish and promote
                  healthy beard growth. Say goodbye to dry, itchy skin and hello
                  to a soft, luscious beard that will turn heads.
                </span>
              </Fragment>
            )}
          </p>
        </div>
        <div className="hero-actions">
          <button className="thq-button-filled hero-button1">
            <span className="thq-body-small">{props.action1}</span>
          </button>
          <button className="thq-button-outline hero-button2">
            <span className="thq-body-small">{props.action2}</span>
          </button>
        </div>
      </div>
      <div className="hero-content2">
        <div className="hero-row-container1 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="hero-strip1 thq-animated-group-horizontal">
            <img
              alt={props.imageAlt}
              src={props.imageSrc}
              className="hero-image10"
            />
            <img
              alt={props.imageAlt1}
              src={props.imageSrc1}
              className="hero-image11"
            />
            <img
              alt={props.imageAlt2}
              src={props.imageSrc2}
              className="hero-image12"
            />
            <img
              alt={props.imageAlt3}
              src={props.imageSrc3}
              className="hero-image13"
            />
            <img
              alt={props.imageAlt4}
              src={props.imageSrc4}
              className="hero-image14"
            />
          </div>
          <div className="thq-animated-group-horizontal">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="hero-placeholder-image10 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="hero-placeholder-image11 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="hero-placeholder-image12 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image4Alt}
              src={props.image4Src}
              className="hero-placeholder-image13 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image5Alt}
              src={props.image5Src}
              className="hero-placeholder-image14 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1534312527009-56c7016453e6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIxfHxhYnN0cmFjdHxlbnwwfHx8fDE3MTA4NzA5MzB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero-placeholder-image15 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
        </div>
        <div className="hero-container1">
          <div className="hero-container2">
            <div className="hero-container3">
              <div className="hero-container4">
                <div className="hero-container5">
                  <img
                    alt={props.imageAlt5}
                    src={props.imageSrc5}
                    className="hero-image15"
                  />
                  <img
                    alt={props.imageAlt6}
                    src={props.imageSrc6}
                    className="hero-image16"
                  />
                </div>
                <img
                  alt={props.imageAlt7}
                  src={props.imageSrc7}
                  className="hero-image17"
                />
              </div>
              <img
                alt={props.imageAlt8}
                src={props.imageSrc8}
                className="hero-image18"
              />
            </div>
          </div>
          <img
            alt={props.imageAlt9}
            src={props.imageSrc9}
            className="hero-image19"
          />
        </div>
        <div className="hero-row-container2 thq-animated-group-container-horizontal thq-mask-image-horizontal">
          <div className="hero-strip3 thq-animated-group-horizontal-reverse"></div>
          <div className="thq-animated-group-horizontal-reverse">
            <img
              alt={props.image7Alt}
              src={props.image7Src}
              className="hero-placeholder-image16 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image8Alt}
              src={props.image8Src}
              className="hero-placeholder-image17 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image9Alt}
              src={props.image9Src}
              className="hero-placeholder-image18 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image10Alt}
              src={props.image10Src}
              className="hero-placeholder-image19 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt={props.image11Alt}
              src={props.image11Src}
              className="hero-placeholder-image20 thq-img-ratio-1-1 thq-img-scale"
            />
            <img
              alt="Hero Image"
              src="https://images.unsplash.com/photo-1568214379698-8aeb8c6c6ac8?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyfHxncmFmaWN8ZW58MHx8fHwxNzE1Nzk0OTk5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
              className="hero-placeholder-image21 thq-img-ratio-1-1 thq-img-scale"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="hero-container7">
          <Script
            html={`<style>
  @keyframes scroll-x {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(-100% - 16px));
    }
  }

  @keyframes scroll-y {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(calc(-100% - 16px));
    }
  }
</style>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

Hero.defaultProps = {
  imageSrc6:
    '/external/whatsapp%20image%202025-03-05%20at%2021.45.53_7a99740b-200h.jpg',
  image11Alt: 'Follow us on social media',
  text2: undefined,
  image10Alt: 'Subscribe for exclusive offers',
  imageAlt6: 'image',
  image9Alt: 'Beard grooming tips',
  imageSrc:
    '/external/whatsapp%20image%202025-03-05%20at%2021.45.52_38cd9b49-200h.jpg',
  image7Src:
    'https://images.unsplash.com/photo-1649346716613-d92f359d0c2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mjc5MTM1N3w&ixlib=rb-4.0.3&q=80&w=1080',
  text: undefined,
  imageSrc4:
    '/external/whatsapp%20image%202025-03-05%20at%2021.45.53_7a99740b-200h.jpg',
  imageAlt: 'image',
  image10Src:
    'https://images.unsplash.com/photo-1654994798641-b4f009c65caf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mjc5MTM1OHw&ixlib=rb-4.0.3&q=80&w=1080',
  imageSrc7:
    '/external/whatsapp%20image%202025-03-05%20at%2021.45.53_7f3c16ed-200h.jpg',
  imageAlt3: 'image',
  image7Alt: 'FAQs about beard serum',
  image11Src:
    'https://images.unsplash.com/photo-1650871778463-71922f196eb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mjc5MTM1Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  imageSrc3:
    '/external/whatsapp%20image%202025-03-05%20at%2021.45.52_7d827a6c-200h.jpg',
  imageSrc8:
    '/external/whatsapp%20image%202025-03-05%20at%2021.45.53_d89ea32f-200h.jpg',
  action2: 'Learn More',
  image3Src:
    'https://images.unsplash.com/photo-1530305408560-82d13781b33a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mjc5MTM1NXw&ixlib=rb-4.0.3&q=80&w=1080',
  imageAlt8: 'image',
  imageAlt4: 'image',
  image1Alt: 'Beard serum bottle',
  imageSrc9:
    '/external/whatsapp%20image%202025-03-05%20at%2021.45.53_f65f014a-200h.jpg',
  image9Src:
    'https://images.unsplash.com/photo-1650485463224-2f5b7f5c7759?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mjc5MTM1N3w&ixlib=rb-4.0.3&q=80&w=1080',
  image8Alt: 'Contact us for more information',
  imageSrc1:
    '/external/whatsapp%20image%202025-03-05%20at%2021.45.52_5fbeaade-200h.jpg',
  image1Src:
    'https://images.unsplash.com/photo-1597130576213-bbdbbd9e62ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mjc5MTM1OXw&ixlib=rb-4.0.3&q=80&w=1080',
  image3Alt: 'Ingredients of beard serum',
  image8Src:
    'https://images.unsplash.com/photo-1709925910546-e3cc02586932?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mjc5MTM1OHw&ixlib=rb-4.0.3&q=80&w=1080',
  imageAlt2: 'image',
  image4Src:
    'https://images.unsplash.com/photo-1700006759977-0b1e1f43600f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mjc5MTM1OHw&ixlib=rb-4.0.3&q=80&w=1080',
  image2Alt: 'Man applying beard serum',
  image5Alt: 'Beard serum benefits',
  text1: undefined,
  image5Src:
    'https://images.unsplash.com/photo-1597130576213-bbdbbd9e62ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mjc5MTM1OHw&ixlib=rb-4.0.3&q=80&w=1080',
  image2Src:
    'https://images.unsplash.com/photo-1533113354171-490d836238e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0Mjc5MTM1Nnw&ixlib=rb-4.0.3&q=80&w=1080',
  imageAlt5: 'image',
  imageSrc2:
    '/external/whatsapp%20image%202025-03-05%20at%2021.45.52_6f360adf-200h.jpg',
  action1: 'Shop Now',
  imageAlt7: 'image',
  image4Alt: 'Before and after using beard serum',
  imageAlt9: 'image',
  imageAlt1: 'image',
  imageSrc5:
    '/external/whatsapp%20image%202025-03-05%20at%2021.45.53_7f3c16ed-200h.jpg',
}

Hero.propTypes = {
  imageSrc6: PropTypes.string,
  image11Alt: PropTypes.string,
  text2: PropTypes.element,
  image10Alt: PropTypes.string,
  imageAlt6: PropTypes.string,
  image9Alt: PropTypes.string,
  imageSrc: PropTypes.string,
  image7Src: PropTypes.string,
  text: PropTypes.element,
  imageSrc4: PropTypes.string,
  imageAlt: PropTypes.string,
  image10Src: PropTypes.string,
  imageSrc7: PropTypes.string,
  imageAlt3: PropTypes.string,
  image7Alt: PropTypes.string,
  image11Src: PropTypes.string,
  imageSrc3: PropTypes.string,
  imageSrc8: PropTypes.string,
  action2: PropTypes.string,
  image3Src: PropTypes.string,
  imageAlt8: PropTypes.string,
  imageAlt4: PropTypes.string,
  image1Alt: PropTypes.string,
  imageSrc9: PropTypes.string,
  image9Src: PropTypes.string,
  image8Alt: PropTypes.string,
  imageSrc1: PropTypes.string,
  image1Src: PropTypes.string,
  image3Alt: PropTypes.string,
  image8Src: PropTypes.string,
  imageAlt2: PropTypes.string,
  image4Src: PropTypes.string,
  image2Alt: PropTypes.string,
  image5Alt: PropTypes.string,
  text1: PropTypes.element,
  image5Src: PropTypes.string,
  image2Src: PropTypes.string,
  imageAlt5: PropTypes.string,
  imageSrc2: PropTypes.string,
  action1: PropTypes.string,
  imageAlt7: PropTypes.string,
  image4Alt: PropTypes.string,
  imageAlt9: PropTypes.string,
  imageAlt1: PropTypes.string,
  imageSrc5: PropTypes.string,
}

export default Hero
