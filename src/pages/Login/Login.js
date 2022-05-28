import React from "react";
import Topbar from "../../components/Topbar";
import "../../assets/scss/login/login.scss";
import { FiMail } from "react-icons/fi";
import { HiKey } from "react-icons/hi";
import google from "../../assets/icon/google.svg";
import loginImg from "../../assets/images/login.png";
const Login = () => {
  return (
    <div className="login-page">
      <Topbar />
      <section className="login-section">
        <div className="login">
          <img src={loginImg} alt="log image" />
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
            ></input>
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
              placeholder="password "
            ></input>
          </div>
          <div className="remember">
            <div className="remem">
              <input
                type="checkbox"
                className="remember_check"
                name="remember"
              />
              <span className="rememberMe"> Remember Me</span>
            </div>
            <span className="forgot">Forgot Password</span>
          </div>
          <button className="primaryBtn">Login</button>
          <button className="signInGoogle">
            <img src={google} />
            SIGN IN GOOGLE
          </button>
          <div className="signupLink">
            <span className="ask">DON'T HAVE AN ACCOUNT?</span>
            <a href="/signup">SIGN UP</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
