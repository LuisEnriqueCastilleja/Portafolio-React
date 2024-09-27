import { Navigate, Route, Routes } from "react-router-dom";
import { CVPage } from "@/roadmap-designs/pages/CVPage";
import { HomePage } from "@/roadmap-designs/pages/HomePage";
import { BasicHTMLWebsitePage } from "@/roadmap-designs/pages/BasicHTMLWebsitePage";
import { ChangelogPage } from "@/roadmap-designs/pages/ChangelogPage";

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
