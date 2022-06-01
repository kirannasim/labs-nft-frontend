import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoImgage from '../../assets/images/logo.png'
import loginRightIconImage from '../../assets/images/loginRightIcon.svg'
import '../../assets/scss/home/topbar.scss'
import { nav_menus_unlogined, nav_menus_logined } from '../../utils/public'
import { FiMenu } from 'react-icons/fi'
import { LoginStatusContext } from '../../context/LoginStatusContext'

const Topbar = () => {
  const { loginStatus } = useContext(LoginStatusContext)

  console.log('dfasfdsa', loginStatus)

  return (
    <nav className="navbar navbar-expand-xl navbar-light fixed-top">
      <div className="navbar-container">
        <a className="navbar-brand" href="#">
          <img src={logoImgage} alt="Logo" />
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
          <ul className="navbar-nav mb-2 mb-xl-0">
            {(!loginStatus ? nav_menus_unlogined : nav_menus_logined).map(
              (item) =>
                item.is_react_router ? (
                  <NavLink
                    to={item.href}
                    className={(isActive) =>
                      'nav-link' + (!isActive ? ' unselected' : '')
                    }
                    key={item.name}
                  >
                    {item.name}
                  </NavLink>
                ) : (
                  <li className="nav-item" key={item.name}>
                    <a
                      className="nav-link"
                      href={item.href}
                      target={item.is_new_target ? '_blank' : null}
                      rel="noreferrer"
                    >
                      {item.name}
                    </a>
                  </li>
                )
            )}
          </ul>
          <div className="d-flex buttons">
            {!loginStatus ? (
              <>
                <Link to="/login">
                  <button
                    type="button"
                    className="btn btn-outline-primary topbar--btn btn--login"
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
              <div
                className="login--container"
                data-bs-toggle="collapse"
                data-bs-target="#collapse_conent"
              >
                <div className="login--container__image--wapper"></div>
                <span className="login--container__user--name bb_16_thin">
                  Linthang Chang
                </span>
                <div className="login--container__toggole--button">
                  <img alt="login Right Icon" src={loginRightIconImage} />
                </div>
                <div
                  id="collapse_conent"
                  className="collapse login--container__collapse--content"
                >
                  <Link to="/account-details">
                    <p className="bb_16_thin">My Account</p>
                  </Link>
                  <Link to="/home">
                    <p className="bb_16_thin">Sign Out</p>
                  </Link>
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
