import React from "react";
import LoginPanel from "../components/loginPanel/LoginPanel";
import classes from "./LoginPage.module.css";
import BackgroundDesign from "../components/backgroundDesign/BackgroundDesign";
import NavigationMenu from "../components/UI/navigationMenu/NavigationMenu";

function LoginPage() {
  return (
    <div className={classes.pageContainer}>
      <NavigationMenu />
      <BackgroundDesign />
      <div className={classes.loginContainer}>
        <LoginPanel />
      </div>
    </div>
  );
}

export default LoginPage;
