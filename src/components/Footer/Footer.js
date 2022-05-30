import React from 'react'
import { NavLink } from 'react-router-dom'
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
        {nav_menus_unlogined.map((item) =>
          item.is_react_router ? (
            <NavLink
              to={item.href}
              className={(isActive) =>
                'nav-link' +
                (!isActive ? ' unselected' : '') +
                ' menu-item bb_16_medium col-6 col-md-4 col-lg-2'
              }
              key={item.name}
            >
              {item.name}
            </NavLink>
          ) : (
            <a
              key={item.name}
              className="nav-link menu-item bb_16_medium col-6 col-md-4 col-lg-2"
              href={item.href}
              target={item.is_new_target ? '_blank' : null}
            >
              {item.name}
            </a>
          )
        )}
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
            <a href="https://facebook.com" target="_blank">
              <img src={facebookIcon} alt="facebook icon" />
            </a>
          </div>
          <div className="social-item">
            <a href="https://twitter.com" target="_blank">
              <img src={twitterIcon} alt="twitter icon" />
            </a>
          </div>
          <div className="social-item">
            <a href="https://instagram.com" target="_blank">
              <img src={instagramIcon} alt="instagram icon" />
            </a>
          </div>
          <div className="social-item">
            <a href="https://discord.com" target="_blank">
              <img src={discordIcon} alt="discord" />
            </a>
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
