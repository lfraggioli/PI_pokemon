import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="landing-page">
      <h1>Landing Page - TEST</h1>
      <Link to="/home">
        <button>Ir a HOME</button>
      </Link>
    </div>
  );
}

export default LandingPage;
