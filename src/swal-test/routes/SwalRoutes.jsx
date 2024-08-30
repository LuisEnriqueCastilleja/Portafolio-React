import { Navigate, Route, Routes } from "react-router-dom"
import { SwalPage } from "../pages/SwalPage"

export const SwalRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<SwalPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    )
}
