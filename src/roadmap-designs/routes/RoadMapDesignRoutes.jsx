import { Navigate, Route, Routes } from "react-router-dom";
import { CVPage } from "../pages/CVPage";
import { HomePage } from "../pages/HomePage";
import { BasicHTMLWebsitePage } from "../pages/BasicHTMLWebsitePage";
import { ChangelogPage } from "../pages/ChangelogPage";

export const RoadMapDesignRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/CV" element={<CVPage />} />
      <Route path="/basicHTML" element={<BasicHTMLWebsitePage />} />
      <Route path="/changelog" element={<ChangelogPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
