import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Features1 from '../components/features1'
import CTA from '../components/cta'
import Features2 from '../components/features2'
import Pricing from '../components/pricing'
import Steps from '../components/steps'
import Testimonial from '../components/testimonial'
import Contact from '../components/contact'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Spotless Hungry Crocodile</title>
      </Helmet>
      <Navbar link5="How to Use"></Navbar>
      <Hero
        text={
          <Fragment>
            <span className="home-text10">
              <span>SEROTONIN</span>
              <br></br>
            </span>
          </Fragment>
        }
        text1={
          <Fragment>
            <span className="home-text13">Beyond Ecstacy</span>
          </Fragment>
        }
        text2={
          <Fragment>
            <span className="home-text14">
              <span>Struggling with patchy beard or thinning hair?</span>
              <br></br>
              <br></br>
              <span>BeGro is your go-to solution!</span>
              <br></br>
              <br></br>
              <span>
                Use it and watch your hair grow shinier and stronger 💪
              </span>
              <br></br>
              <br></br>
              <span>Order now and let your transformation begin!!🔥👌</span>
              Our beard serum is specially formulated to nourish and promote
              healthy beard growth. Say goodbye to dry, itchy skin and hello to
              a soft, luscious beard that will turn heads.
            </span>
          </Fragment>
        }
        heading1="Serotonin"
      ></Hero>
      <Features1></Features1>
      <CTA></CTA>
      <Features2></Features2>
      <Pricing plan3Price="$39.99"></Pricing>
      <Steps></Steps>
      <Testimonial></Testimonial>
      <Contact></Contact>
      <Footer></Footer>
      <img alt="pastedImage" src="/external/pastedimage-0rs-1500w.png" />
    </div>
  )
}

export default Home
