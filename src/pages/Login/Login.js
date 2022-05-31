import React from 'react'
import Topbar from '../../components/Topbar'
import { FiMail } from 'react-icons/fi'
import { HiKey } from 'react-icons/hi'
import google from '../../assets/icon/google.svg'
import loginImg from '../../assets/images/login.png'
import '../../assets/scss/login/login.scss'
const Login = () => {
  const signInGoogle = () => {
    console.log('signIn')
  }

  const signin = () => {
    console.log('logIn')
  }

  return (
    <div className="login-page">
      <Topbar />
      <section className="login-section">
        <div className="login">
          <img src={loginImg} alt="login" />
        </div>
        <div className="login-form">
          <h3 className="login-title">LOG IN</h3>
          <div className="input-box">
            <div className="icon">
              <FiMail />
            </div>
            <input
              className="input-edit bb_16_thin"
              width={400}
              height={60}
              placeholder="Enter Your Email Address / User Name "
            />
          </div>

          <div className="input-box">
            <div className="icon">
              <HiKey />
            </div>
            <input
              type="password"
              className="input-edit bb_16_thin"
              width={400}
              height={60}
              placeholder="Password "
            />
          </div>
          <div className="remember">
            <div className="remem">
              <input
                type="checkbox"
                className="remember_check"
                name="remember"
              />
              <span className="rememberMe bb_14"> Remember Me</span>
            </div>
            <span className="forgot">Forgot Password?</span>
          </div>
          <button
            type="button"
            className="btn-primary primaryBtn bb_18"
            onClick={signin}
          >
            LOG IN
          </button>

          <button
            type="button"
            className="btn-outline-primary signInGoogle"
            onClick={signInGoogle}
          >
            <img src={google} alt="google" />
            <div className="google-text">SIGN IN GOOGLE</div>
          </button>
          <div className="signupLink bb_18">
            <span className="ask me-1">DON'T HAVE AN ACCOUNT?</span>
            <a href="/signup">SIGN UP</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Login
