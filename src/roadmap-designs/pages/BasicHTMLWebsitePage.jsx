import React from "react";
import "./styles/basicWebsiteStyle.css";

export const BasicHTMLWebsitePage = () => {
  const date = new Date().getFullYear();
  console.log(date);

  return (
    <div className="p-1">
      <div className="b-1">
        <nav style={{ padding: 10 }}>
          <div className="d-flex w-100 flex-row">
            <div className="row w-100">
              <div className="col">
                <h4>Luis Enrique Castilleja Tristán</h4>
              </div>
              <div className="d-flex col justify-content-end">
                <a href="#">Home</a>
                <span className="mx-1">/</span>
                <a href="#">Projects</a>
                <span className="mx-1">/</span>
                <a href="#">Articles</a>
                <span className="mx-1">/</span>
                <a href="#">Contact</a>
              </div>
            </div>
          </div>
        </nav>
        <div
          className="d-flex flex-column align-items-center"
          style={{ marginBottom: 150, marginTop: 150 }}
        >
          <h1>Frontend Developer</h1>
          <h5>html only with proper layout no styling</h5>
        </div>
      </div>
      <div className="mx-auto row col-12 row-cols-3 border border-black">
        <div className="col">
          <h3 style={{ marginTop: 20 }}>Projects</h3>
          <br />
          <h5>HTML Only portafolio</h5>
          <hr></hr>
          <h5>Calculator</h5>
          <hr></hr>
          <h5>Quiz App</h5>
          <hr></hr>
          <h5>Countdown Timer</h5>
          <hr></hr>
          <h5>Product Upcoming Page</h5>
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className="col border-left border-right border-black">
          <h3 style={{ marginTop: 20 }}>Work Experience</h3>
          <br />
          <h5>roadmap.sh</h5>
          <h4>Solved all the frontend project</h4>
          <a href="#">Visit my profile</a>
          <br />
          <hr />
          <br />
          <h5>OpenSource work</h5>
          <h4>
            Contributed to 50 opensource Projects. Made my own projects with 200
            GitHub stars.
          </h4>
          <a href="#">Visit my profile</a>
        </div>
        <div className="col">
          <h3 style={{ marginTop: 20 }}>Education</h3>
          <h5>Tecnológico Nacional de México Campus Región Carbonífera</h5>
          <br />
          <h5>Courses I Took:</h5>
          <ol>
            <li>Object Oriented Programming</li>
            <li>Artificial Intelligence</li>
            <li>Database</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>CISCO Networking</li>
            <li>Dart + Flutter</li>
            <li>React.js + React.ts</li>
            <li>C#</li>
          </ol>
        </div>
      </div>
      <div className="col">
        <h3 style={{ marginTop: 40, marginBottom: 25, marginLeft: 30 }}>
          Reviews from my Teachers
        </h3>
        <div className="d-flex justify-content-center">
          <div className="col-3 border border-2 border-black rounded-5 p-3">
            <h5>
              John Doe was a brilliant student; always stood out with his
              assignments.
            </h5>
            <h5>Jane Doe.</h5>
            <h5>Assistant Professor</h5>
          </div>
          <div
            className="col-3 border border-2 border-black rounded-5 p-3"
            style={{ marginLeft: 30, marginRight: 30 }}
          >
            <h5>
              John Doe was a brilliant student; always stood out with his
              assignments.
            </h5>
            <h5>Logan Doe.</h5>
            <h5>Assistant Professor</h5>
          </div>
          <div className="col-3 border border-2 border-black rounded-5 p-3">
            <h5>
              John Doe was a brilliant student; always stood out with his
              assignments.
            </h5>
            <h5>Megan Doe.</h5>
            <h5>Assistant Professor</h5>
          </div>
        </div>
      </div>
      <div
        className="col d-flex justify-content-center"
        style={{ marginTop: 150 }}
      >
        <h5>&copy; all rights reserved {date}</h5>
      </div>
    </div>
  );
};
