import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div>
      <a className="me-3" href="/roadmap/CV">
        CV
      </a>
      <a href="/roadmap/basichtml">Basic HTML Website</a>
    </div>
  );
};
