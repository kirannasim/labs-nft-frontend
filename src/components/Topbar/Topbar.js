import React from 'react'
import { Link } from 'react-router-dom'
import logoImgage from '../../assets/images/logo.png'
import loginRightIconImage from '../../assets/images/loginRightIcon.svg'
import '../../assets/scss/home/topbar.scss'
import { FiMenu } from 'react-icons/fi'
const nav_menus_unlogined = [
  {
    name: 'home',
    href: '',
  },
  {
    name: 'about',
    href: '',
  },
  {
    name: 'games',
    href: '',
  },
  {
    name: 'nodes',
    href: '',
  },
  {
    name: 'careers',
    href: '',
  },
  {
    name: 'join discord',
    href: '',
  },
]

const nav_menus_logined = [
  {
    name: 'home',
    href: '',
  },
  {
    name: 'my node',
    href: '',
  },
  {
    name: 'my account',
    href: '',
  },
]
const Topbar = ({ loginStatus }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="navbar-container">
        <a className="navbar-brand" href="#">
          <img src={logoImgage} alt="Logo Image" />
        </a>

        <div
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <div className="icon">
            <FiMenu />
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            {(!loginStatus ? nav_menus_unlogined : nav_menus_logined).map(
              (item) => (
                <li className="nav-item" key={item.name}>
                  <a className="nav-link" href={item.href}>
                    {item.name}
                  </a>
                </li>
              )
            )}
          </ul>
          <div className="d-flex">
            {!loginStatus ? (
              <>
                <Link to="/login">
                  <button
                    type="button"
                    className="btn btn-outline-primary topbar--btn"
                  >
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button type="button" className="btn btn-primary topbar--btn">
                    Sign Up
                  </button>
                </Link>
              </>
            ) : (
              <div className="login--container">
                <div className="login--container__image--wapper"></div>
                <span className="login--container__user--name bb_16_thin">
                  Linthang Chang
                </span>
                <div className="login--container__toggole--button">
                  <img src={loginRightIconImage} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Topbar
