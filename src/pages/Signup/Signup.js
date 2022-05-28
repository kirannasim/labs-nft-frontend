import React from "react";
import Topbar from "../../components/Topbar";
import "../../assets/scss/login/login.scss";
import { FiMail } from "react-icons/fi";
import { HiKey } from "react-icons/hi";
import { HiOutlineUserCircle } from "react-icons/hi";
import signupImg from "../../assets/images/signup.png";

const Signup = () => {
  return (
    <div className="login-page">
      <Topbar />
      <section className="login-section">
        <div className="login">
          <img src={signupImg} alt="log image" />
        </div>
        <div className="login-form">
          <h2 className="login-title">SIGN UP</h2>
          <div className="input-box">
            <div className="icon">
              <HiOutlineUserCircle />
            </div>
            <input
              type="text"
              className="input-edit"
              width={400}
              height={60}
              placeholder="Enter Your Full Name "
            ></input>
          </div>

          <div className="input-box">
            <div className="icon">
              <FiMail />
            </div>
            <input
              className="input-edit"
              width={400}
              height={60}
              placeholder="Enter Your Email Address"
            />
          </div>

          <div className="input-box">
            <div className="icon">
              <HiKey />
            </div>
            <input
              type="password"
              className="input-edit"
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
              <div className="rememberMe">
                {/* I accept the terms and conditions, cookie policy and privacy
                policy. Send me vouchers and news on great promotions and the
                latest updates, competitions and news from Look Labs. */}
              </div>
            </div>
          </div>
          <button className="primaryBtn">SIGN UP</button>
          <div className="signupLink">
            <span className="ask">Already nave an account? Log in</span>
            <a href="/signup">SIGN UP</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
