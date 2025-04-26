import { createSlice } from "@reduxjs/toolkit";

const assignedJobSlice = createSlice({
    name:'assigned_job',
    initialState:[],
    reducers:{
        add_data:(state, action)=>{
            return action.payload;
        }
    }
})

export const assignedJobSliceActions = assignedJobSlice.actions;
export default assignedJobSlice;