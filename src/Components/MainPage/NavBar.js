import React from "react";
import { Link } from "react-router-dom";
import classes from "./Cards.module.css";

export default function NavBar() {
  return (
    <div className={classes.navWrapper}>
      <Link to="/">
        <h4>Home</h4>
      </Link>
      <Link to="/about">
        <h4>About</h4>
      </Link>
      <Link to="/contact">
        <h4>Contact</h4>
      </Link>
    </div>
  );
}
