import React from "react";
import classes from "./Button.module.css";

const Button = ({ secondary, style, ...props }) => {
  return (
    <button
      {...props}
      style={style}
      className={`${classes.Btn} ${secondary ? classes["Btn--secondary"] : ""}`}
    ></button>
  );
};

export default Button;
