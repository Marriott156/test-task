import React from "react";
import classes from "./BackgroundDesign.module.css";

const BackgroundDesign = () => {
  return (
    <div className={classes.squareContainer}>
      <div className={`${classes.rectangle} ${classes.firstColor}`}></div>
      <div className={`${classes.rectangle} ${classes.secondColor}`}></div>
      <div className={`${classes.rectangle} ${classes.secondColor}`}></div>
      <div className={`${classes.rectangle} ${classes.firstColor}`}></div>
      <div className={`${classes.rectangle} ${classes.fifthColor}`}></div>
      <div className={`${classes.rectangle} ${classes.thirdColor}`}></div>
      <div className={`${classes.rectangle} ${classes.fourthColor}`}></div>
      <div className={`${classes.rectangle} ${classes.fourthColor}`}></div>
      <div className={`${classes.rectangle} ${classes.thirdColor}`}></div>
    </div>
  );
};

export default BackgroundDesign;
