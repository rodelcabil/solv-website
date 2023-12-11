import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    active: "home",
};

const activeNavSlice = createSlice({
    name: "activeNav",
    initialState,
    reducers: {
        setActiveNav(state, action) {
            state.active = action.payload;
        },
        
    },
});

export const { setActiveNav } = activeNavSlice.actions;

export default activeNavSlice.reducer;
