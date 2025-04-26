import { createSlice } from "@reduxjs/toolkit"; 

const statsSlice = createSlice({
    name:"stats",
    initialState:{},
    reducers: {
        add_data: (state, action) => {
            return action.payload;
        } 
    }
})

export const statsSliceActions = statsSlice.actions;
export default statsSlice;