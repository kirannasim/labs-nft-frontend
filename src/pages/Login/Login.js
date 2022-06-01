import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Topbar from "../../components/Topbar";
import { FiMail } from "react-icons/fi";
import { HiKey } from "react-icons/hi";
import google from "../../assets/icon/google.svg";
import loginImg from "../../assets/images/login.png";
import "../../assets/scss/login/login.scss";
// Oauth google login part
// import { GoogleLogin, GoogleLogout } from "react-google-login";
// import SignInGoogle from "./SignInGoogle";
import { useAuth0 } from "@auth0/auth0-react";
const clientId =
  "498758921859-o179v4o7ub530vdsjld75qjd2o1uf3li.apps.googleusercontent.com";

// refresh token
// import { refreshTokenSetup } from "./data/refreshToken";

// import users from "./data/users";
// import authService from "./service/authService";

const Login = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading, logout, loginWithRedirect } =
    useAuth0();
  const [account, setAccount] = useState({ email: "", password: "" });

  const logOut = () => {
    logout({ returnTo: window.location.origin });
  };

  const singINGoogle = () => {
    loginWithRedirect();
    console.log("first");
    if (isAuthenticated) {
      navigate("/mynodes");
    } else {
      navigate("/login");
    }
    // getprofile();
  };

  const getprofile = () => {
    isAuthenticated && alert(user.name);
    // alert(user.email);
    // <div>
    //   <img src={user.picture} alt={user.name} />
    //   <h2>{user.name}</h2>
    //   <p>{user.email}</p>
    // </div>
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  const handelAccount = (property, event) => {
    const accountCopy = { ...account };
    accountCopy[property] = event.target.value;
  };

  const handelLogin = () => {
    if (isAuthenticated) {
      alert(user.email);
      navigate("/mynodes");
    }
  };
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
              name="email"
              className="input-edit bb_16_thin"
              width={400}
              height={60}
              placeholder="Enter Your Email Address / User Name "
              onChange={(event) => handelAccount("email", event)}
            ></input>
          </div>
          <div className="input-box">
            <div className="icon">
              <HiKey />
            </div>
            <input
              type="password"
              name="password"
              className="input-edit bb_16_thin"
              width={400}
              height={60}
              onChange={(event) => handelAccount("password", event)}
              placeholder="Password "
            ></input>
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
            className="btn-primary primaryBtn bb_18"
            onClick={handelLogin}
          >
            LOG IN
          </button>
          <button className="signInGoogle" onClick={singINGoogle}>
            <img src={google} />
            <div className="google-text">SIGN IN GOOGLE</div>
          </button>

          <div className="signupLink">
            <span className="ask px-1">DON'T HAVE AN ACCOUNT?</span>
            <a href="/signup">SIGN UP</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
