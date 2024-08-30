import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isLoading: false,
        id: null,
        name: null,
        rol: null
    },
    reducers: {
        beginLogin: (state) => {
            state.isLoading = true;
        },
        login: (state, { payload }) => {
            state.name = payload.name;
            state.rol = payload.rol;
        },
        endLogin: (state) => {
            state.isLoading = false;
        }
    }
});


export const { beginLogin, login, endLogin } = authSlice.actions;