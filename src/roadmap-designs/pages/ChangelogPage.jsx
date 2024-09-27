import "@/roadmap-designs/styles/changelogStyle.css";

export const ChangelogPage = () => {
  return (
    <div>
      <h1 className="text-center">Changelog</h1>
      <h6 className="text-center mt-4">
        Here's everythinh we have shipped in the past few days
      </h6>
      <div className="time-line-container">
        <div className="time-border"></div>
        <div
          className="d-flex w-100 align-items-center justify-content-between"
          style={{ marginTop: 40, paddingTop: 50 }}
        >
          <h6 className="time-date">September 3, 2024</h6>
          <div className="div-circle"></div>
          <h6 className="time-event">
            Announcing Projects on Frontend Roadmap
          </h6>
        </div>
        <div
          className="d-flex w-100 align-items-center justify-content-between"
          style={{ marginTop: 40 }}
        >
          <h6 className="time-date">August 28, 2024</h6>
          <div className="div-circle"></div>
          <h6 className="time-event">
            Build your learning habits with learning streaks
          </h6>
        </div>
        <div
          className="d-flex w-100 align-items-center justify-content-between"
          style={{ marginTop: 40 }}
        >
          <h6 className="time-date">August 25, 2024</h6>
          <div className="div-circle"></div>
          <h6 className="time-event">Git and GitHub Roadmap</h6>
        </div>
        <div
          className="d-flex w-100 align-items-center justify-content-between"
          style={{ marginTop: 40 }}
        >
          <h6 className="time-date">August 22, 2024</h6>
          <div className="div-circle"></div>
          <h6 className="time-event">
            Submit your project solution and get feedback
          </h6>
        </div>
        <div
          className="d-flex w-100 align-items-center justify-content-between"
          style={{ marginTop: 40 }}
        >
          <h6 className="time-date">August 15, 2024</h6>
          <div className="div-circle"></div>
          <h6 className="time-event">Backend Project Ideas</h6>
        </div>
        <div
          className="d-flex w-100 align-items-center justify-content-between"
          style={{ marginTop: 40 }}
        >
          <h6 className="time-date">August 10, 2024</h6>
          <div className="div-circle"></div>
          <h6 className="time-event">Redis roadmap</h6>
        </div>
        <div
          className="d-flex w-100 align-items-center justify-content-between"
          style={{ marginTop: 40, paddingBottom: 50 }}
        >
          <h6 className="time-date">August 01, 2024</h6>
          <div className="div-circle"></div>
          <h6 className="time-event">
            Changelog page to help you stay in the loop
          </h6>
        </div>
      </div>

      <div className="w-100" style={{ marginTop: 80, paddingBottom: 30 }}>
        <button>Visit Complete Changelog</button>
      </div>
    </div>
  );
};
