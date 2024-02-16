import { createSlice } from "@reduxjs/toolkit";

const themeSlice =  createSlice({
    name: "theme",
    initialState: true,
    reducers: {
        mudarTheme: (state) => {
            return !state
        }
    }
})

export default themeSlice.reducer

export const { mudarTheme } = themeSlice.actions
