import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const Logout = () => {
  console.log("dfasfdasdfs");
  const { logout } = useAuth0();
  logout({ returnTo: window.location.origin });
};

export default Logout;
