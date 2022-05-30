import React from 'react'
import '../../assets/scss/home/footer.scss'
import footerLogoImage from '../../assets/images/footer_logo.png'
import facebookIcon from '../../assets/images/facebook.svg'
import twitterIcon from '../../assets/images/twitter.svg'
import instagramIcon from '../../assets/images/instagram.svg'
import discordIcon from '../../assets/images/discord.svg'
import { nav_menus_unlogined } from '../../utils/public'

const Node = () => {
  return (
    <div className="footer--container">
      <div className="footer--container__title">
        <img src={footerLogoImage} />
      </div>
      <hr></hr>
      <div className="footer--container__menu row">
        {nav_menus_unlogined.map((item) => (
          <a
            className="menu-item bb_16_medium col-6 col-md-4 col-lg-2"
            href="#"
            key={item.name}
          >
            <span>{item.name}</span>
          </a>
        ))}
      </div>
      <hr></hr>
      <div className="footer--container__bottom">
        <div className="copyright--wrapper text--wrapper">
          <span className="bb_16_regular">
            © 2021. loklabs. All Rights Reserved
          </span>
        </div>
        <div className="social--wrapper">
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
        <div className="extra--wrapper text--wrapper">
          <span className="bb_16_regular privacy">Privacy Policy</span>
          <span className="bb_16_regular">Terms & Condition</span>
        </div>
      </div>
    </div>
  )
}

export default Node
