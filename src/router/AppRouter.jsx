import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { PokemonRoutes } from "../pokemon/router/PokemonRoutes"
import { GifRoutes } from "../app-gif/router/GifRoutes"
import { SignalrRouttes } from "../signalR/routes/SignalrRoutes"
import { GraphicsRoutes } from "../graphics-chart/routes/GraphicsRoutes"
import { ToastRoutes } from "../toast-test/router/ToastRoutes"
import { SwalRoutes } from "../swal-test/routes/SwalRoutes"

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/auth/*" element={<AuthRoutes />} />
            <Route path="/pokemons/*" element={<PokemonRoutes />} />
            <Route path="/gifs/*" element={<GifRoutes />} />
            <Route path="/signalr/*" element={<SignalrRouttes />}></Route>
            <Route path="/graphics/*" element={<GraphicsRoutes />}></Route>
            <Route path="/toast/*" element={<ToastRoutes />}></Route>
            <Route path="/swal/*" element={<SwalRoutes />}></Route>
            <Route path="/*" element={<JournalRoutes />} />
        </Routes>
    )
}
