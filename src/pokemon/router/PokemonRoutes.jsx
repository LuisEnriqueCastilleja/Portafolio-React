import { Navigate, Route, Routes } from "react-router-dom"
import { PokemonsPage } from "../pages/PokemonsPage"

export const PokemonRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<PokemonsPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
    )
}
