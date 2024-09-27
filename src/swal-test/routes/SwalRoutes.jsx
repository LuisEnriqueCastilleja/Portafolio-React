import { Navigate, Route, Routes } from "react-router-dom";
import { SwalPage } from "@/swal-test/pages/SwalPage";

export const SwalRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SwalPage />} />
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};
