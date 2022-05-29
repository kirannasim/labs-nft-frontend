import React from 'react'
import '../../assets/scss/home/footer.scss'
import footerLogoImage from '../../assets/images/footer_logo.png'
import facebookIcon from '../../assets/images/facebook.svg'
import twitterIcon from '../../assets/images/twitter.svg'
import instagramIcon from '../../assets/images/instagram.svg'
import discordIcon from '../../assets/images/discord.svg'

const Node = () => {
  return (
    <div className="footer--container">
      <div className="footer--container__title">
        <img src={footerLogoImage} />
      </div>
      <div className="footer--container__menu row">
        <a className="menu-item bb_16_medium col-6 col-md-4 col-lg-2" href="#">
          Home
        </a>

        <a className="menu-item bb_16_medium col-6 col-md-4 col-lg-2" href="#">
          About
        </a>

        <a className="menu-item bb_16_medium col-6 col-md-4 col-lg-2" href="#">
          Games
        </a>

        <a className="menu-item bb_16_medium col-6 col-md-4 col-lg-2" href="#">
          Nodes
        </a>

        <a className="menu-item bb_16_medium col-6 col-md-4 col-lg-2" href="#">
          Careers
        </a>

        <a className="menu-item bb_16_medium col-6 col-md-4 col-lg-2" href="#">
          Join Discord
        </a>
      </div>
      <div className="footer--container__social">
        <div className="social-item">
          <img src={facebookIcon} alt="facebook" />
        </div>
        <div className="social-item">
          <img src={twitterIcon} alt="facebook" />
        </div>
        <div className="social-item">
          <img src={instagramIcon} alt="facebook" />
        </div>
        <div className="social-item">
          <img src={discordIcon} alt="facebook" />
        </div>
      </div>
    </div>
  )
}

export default Node
