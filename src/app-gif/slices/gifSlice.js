import { createSlice } from '@reduxjs/toolkit'

export const gifSlice = createSlice({
    name: 'gif',
    initialState: {
        isLoading: false,
        gifs: [],
    },
    reducers: {
        startLoadingGifs: (state,) => {
            state.isLoading = true;
        },
        setGifs: (state, action) => {
            state.isLoading = false;
            state.gifs = action.payload.gifs;
        }
    }
});


export const { startLoadingGifs, setGifs } = gifSlice.actions;
