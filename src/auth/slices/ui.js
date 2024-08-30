import { createSlice } from '@reduxjs/toolkit'

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        error: ''
    },
    reducers: {
        setError: (state, { payload }) => {
            state.error = payload.error;
        },
    }
});


export const { setError } = uiSlice.actions;