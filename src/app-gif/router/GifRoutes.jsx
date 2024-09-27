import { Navigate, Route, Routes } from "react-router-dom";
import { GifPage } from "@/app-gif/pages/GifPage";

export const GifRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<GifPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
