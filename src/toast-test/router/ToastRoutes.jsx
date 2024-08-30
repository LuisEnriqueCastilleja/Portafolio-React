import { Navigate, Route, Routes } from "react-router-dom"
import { ToastPage } from "../pages/ToastPage"

export const ToastRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<ToastPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    )
}
