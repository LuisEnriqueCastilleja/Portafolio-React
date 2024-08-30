import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage, RegisterPage } from "../pages"
import { JournalPage } from "../../journal/pages/JournalPage"

export const AuthRoutes = () => {
    return (
        <Routes>
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            {/* <Route path="journal" element={<JournalPage />} /> */}
            <Route path="/*" element={<Navigate to="/auth/login" />} />
        </Routes>
    )
}
