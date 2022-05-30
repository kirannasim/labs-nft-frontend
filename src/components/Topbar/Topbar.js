import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logoImgage from '../../assets/images/logo.png'
import loginRightIconImage from '../../assets/images/loginRightIcon.svg'
import '../../assets/scss/home/topbar.scss'
import { nav_menus_unlogined, nav_menus_logined } from '../../utils/public'

const Topbar = ({ loginStatus }) => {
  return (
    <nav className="navbar navbar-expand-xl navbar-light fixed-top">
      <div className="navbar-container">
        <a className="navbar-brand" href="#">
          <img src={logoImgage} alt="Logo Image" />
        </a>

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
                    >
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
                  <img
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse_conent"
                    src={loginRightIconImage}
                  />
                </div>
                <div
                  id="collapse_conent"
                  className="collapse login--container__collapse--content"
                >
                  <Link to="/login">
                    <p>Login</p>
                  </Link>
                  <Link to="/signup">
                    <p>Signup</p>
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
