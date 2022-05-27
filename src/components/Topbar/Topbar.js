import React from 'react'
import logoImgage from '../../assets/images/logo.png'
import '../../assets/scss/home/topbar.scss'

const Topbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="navbar-container">
        <a className="navbar-brand" href="#">
          <img src={logoImgage} alt="Logo Image" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Games
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Nodes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Careers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Join Discord
              </a>
            </li>
          </ul>
          <div className="d-flex">
            <button
              type="button"
              className="btn btn-outline-primary topbar--btn"
            >
              Login
            </button>
            <button type="button" className="btn btn-primary topbar--btn">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
    // <div className="header--container">
    //   <div className="header--container__logo d-none d-xxl-block">
    //     <a href="#">
    //       <img src={logoImgage} alt="Logo Image" />
    //     </a>
    //   </div>
    //   <div className="header--container__menus d-none d-xxl-flex">
    //     <ul className="header--container__menus--list">
    //       <li>
    //         <a className="header--link" aria-current="page" href="#">
    //           HOME
    //         </a>
    //       </li>
    //       <li>
    //         <a className="header--link" aria-current="page" href="#">
    //           ABOUT
    //         </a>
    //       </li>
    //       <li>
    //         <a className="header--link" aria-current="page" href="#">
    //           GAMES
    //         </a>
    //       </li>
    //       <li>
    //         <a className="header--link" aria-current="page" href="#">
    //           NODES
    //         </a>
    //       </li>
    //       <li>
    //         <a className="header--link" aria-current="page" href="#">
    //           CAREERS
    //         </a>
    //       </li>
    //       <li>
    //         <a className="header--link" aria-current="page" href="#">
    //           DISCORD
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="header--container__btns">
    //     <button
    //       type="button"
    //       className="btn btn-outline-primary header--btn__login"
    //     >
    //       Login
    //     </button>
    //     <button type="button" className="btn btn-primary header--btn__signup">
    //       Sign Up
    //     </button>
    //   </div>
    //   <div className="hambuger text-white d-block d-xxl-none">
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       width="40"
    //       height="40"
    //       fill="currentColor"
    //       className="bi bi-list"
    //       viewBox="0 0 16 16"
    //       onClick={() => console.log('dddddddddddddddd')}
    //     >
    //       <path
    //         fillRule="evenodd"
    //         d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
    //       />
    //     </svg>
    //   </div>
    // </div>
  )
}

export default Topbar
