import { Navigate, Route, Routes } from "react-router-dom";
import { GraphicsChartPage } from "@/graphics-chart/pages/GraphicsChartPage";

export const GraphicsRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<GraphicsChartPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
