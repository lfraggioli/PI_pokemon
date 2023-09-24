import React from "react";
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

function LandingPage() {
  return (
    <div className={`${styles["hero-container"]} `}>
      <div className={`${styles["hero-content"]}`}>
        <h1>Landing Page - TEST</h1>
        <Link to="/home">
          <button className={styles["hero-button"]}>Ir a HOME</button>
        </Link>
        <Link to="/create">
          <button className={styles["hero-button"]}>Creación de Pokemon</button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
