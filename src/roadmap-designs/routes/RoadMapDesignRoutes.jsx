import { Navigate, Route, Routes } from "react-router-dom";
import { CVPage } from "../pages/CVPage";
import { HomePage } from "../pages/HomePage";
import { BasicHTMLWebsitePage } from "../pages/BasicHTMLWebsitePage";

export const RoadMapDesignRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/CV" element={<CVPage />} />
      <Route path="/basicHTML" element={<BasicHTMLWebsitePage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
