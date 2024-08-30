import { configureStore } from "@reduxjs/toolkit";
import { pokemonSlice } from "./slices/pokemonSlice";
import { gifSlice } from "../app-gif/slices/gifSlice";
import { journalSlice } from "../journal/slices/JournalSlice";
import { sideBarSlice } from "../journal/slices/SideBarSlice";
import { uiSlice } from "../auth/slices/ui";
import { authSlice } from "../auth/slices/authSlice";

export const store = configureStore({
    reducer: {
        pokemon: pokemonSlice.reducer,
        gifs: gifSlice.reducer,
        journal: journalSlice.reducer,
        sideBar: sideBarSlice.reducer,
        auth: authSlice.reducer,
        ui: uiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
    }),
})
