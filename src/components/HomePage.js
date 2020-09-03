import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Pluralsight Adminstrator</h1>
      <p>React, Flux bla bla text</p>
      <Link to="about" className="btn btn-primary">
        About Page
      </Link>
    </div>
  );
}
export default HomePage;
