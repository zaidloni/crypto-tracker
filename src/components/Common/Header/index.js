import { Switch } from "@mui/material";
import React, { useState } from "react";
import Button from "../Button/Button";
import MobileDrawer from "./Drawer";
import "./styles.css";

const Header = () => {
  const setDark = () => {
    localStorage.setItem("theme", "dark");
    //setting the data-theme attribute of root i.e html
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  const storedTheme = localStorage.getItem("theme");

  //setting it true if user system preference is dark
  const prefersDark =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  //setting it true if storedTheme is dark OR is null & system preference is dark
  const defaultDark =
    storedTheme === "dark" || (storedTheme === null && prefersDark);

  if (defaultDark) {
    setDark();
  }

  const [mode, setMode] = useState(defaultDark ? true : false);

  //toggling theme based on state variable mode if false then setDark else setLight and invert the value of mode after setting
  const toggleTheme = (e) => {
    if (!mode) {
      setDark();
    } else {
      setLight();
    }
    setMode(!mode);
  };

  return (
    <div className="navbar">
      <h1 className="heading">
        <a href="/">
          CryptoTracker<span style={{ color: "var(--blue)" }}>.</span>
        </a>
      </h1>
      <div className="links">
        <Switch checked={!mode} onClick={toggleTheme} />
        <a href="/">
          <p className="link">Home</p>
        </a>
        <a href="/compare">
          <p className="link">Compare</p>
        </a>
        <a href="/watchlist">
          <p className="link">Watchlist</p>
        </a>
        <a href="/dashboard">
          <Button text="dashboard" />
        </a>
      </div>
      <MobileDrawer />
    </div>
  );
};

export default Header;
