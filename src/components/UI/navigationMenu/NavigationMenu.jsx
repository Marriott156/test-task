import React, { useState, useEffect } from "react";
import Button from "../button/Button";
import classes from "./NavigationMenu.module.css";
import UserIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { red } from "@mui/material/colors";

function NavigationMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 768) {
      setIsMenuOpen(false); 
    }
  }, [windowWidth]);

  return (
    <div className={classes.header}>
      <UserIcon
        style={{
          fontSize: 80,
          color: "#66837e",
          border: "2px",
          marginLeft: "30px",
        }}
      />
      <div className={classes.navigationMenu}>
        <Button style={{ border: "none", borderRadius: "0" }}>Home</Button>
        <Button secondary={true} style={{ border: "none", borderRadius: "0" }}>
          Contact
        </Button>
        <Button secondary={true} style={{ border: "none", borderRadius: "0" }}>
          About
        </Button>
      </div>
      <div className={classes.hamburger} onClick={toggleMenu}>
        {isMenuOpen ? (
          <CloseIcon style={{ fontSize: 40, color: "#37475e" }} />
        ) : (
          <MenuIcon style={{ fontSize: 40, color: "#37475e" }} />
        )}
      </div>
      <div
        className={`${classes.hamburgerMenu} ${
          isMenuOpen ? classes.active : ""
        }`}
      >
        <Button>Home</Button>
        <Button secondary={true}>Contact</Button>
        <Button secondary={true}>About</Button>
      </div>
      <div className={classes.emptySpace}>
        <Button>Login</Button>
      </div>
    </div>
  );
}

export default NavigationMenu;
