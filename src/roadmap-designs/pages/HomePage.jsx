import React from "react";
import "@/roadmap-designs/styles/homeStyle.css";

export const HomePage = () => {
  return (
    <div className="div-roadmap">
      <a href="/roadmap/CV">CV</a>
      <a href="/roadmap/basichtml" className="mx-1">
        Basic HTML Website
      </a>
      <a href="/roadmap/changelog">Changelog</a>
    </div>
  );
};
