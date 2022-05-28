import React from "react";
import { Link } from "react-router-dom";
import logoImgage from "../../assets/images/logo.png";
import "../../assets/scss/home/header.scss";
import NavLinks from "./NavLinks";
import { slide as Menu } from "react-burger-menu";

const HeaderLayout = () => {
  const links = [
    {
      href: "/",
      text: "HOME",
    },
    {
      href: "/mynode",
      text: "MYNODE",
    },
    {
      href: "/myaccount",
      text: "MYACCOUNT",
    },
  ];
  const styles = {
    bmBurgerButton: {
      position: "fixed",
      width: "36px",
      height: "30px",
      right: "36px",
      top: "70px",
    },
    bmBurgerBars: {
      background: "#373a47",
    },
    bmBurgerBarsHover: {
      background: "#a90000",
    },
    bmCrossButton: {
      height: "24px",
      width: "24px",
    },
    bmCross: {
      background: "#bdc3c7",
    },
    bmMenuWrap: {
      position: "fixed",
      height: "100%",
    },
    bmMenu: {
      background: "#373a47",
      padding: "2.5em 1.5em 0",
      fontSize: "1.15em",
    },
    bmMorphShape: {
      fill: "#373a47",
    },
    bmItemList: {
      color: "#b8b7ad",
      padding: "0.8em",
    },
    bmItem: {
      display: "inline-block",
    },
    bmOverlay: {
      background: "rgba(0, 0, 0, 0.3)",
    },
  };

  return (
    <div className="header">
      <Menu right width={280} styles={styles}>
        {links.map((link, index) => (
          <NavLinks href={link.href} text={link.text} key={index} />
        ))}
      </Menu>
    </div>
  );
};

export default HeaderLayout;
