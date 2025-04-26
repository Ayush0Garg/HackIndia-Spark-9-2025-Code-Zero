import { createSlice } from "@reduxjs/toolkit";

const complaintsSlice = createSlice({
    name:"complaints",
    initialState:[{
        imgURL: "https://media.istockphoto.com/id/927987734/photo/recycling-plastic-in-junkyard.jpg?s=612x612&w=0&k=20&c=ZJ6SJcFxYM-xew2yUKlCp1W9HiX4CYNjrm7bKmvReRE=",
        date: "12/06/25",
        lang:27.897654,
        lat:77.982313,
        severity:"High",
        type:"Bio-Degradable"
    }],
    reducers:{
        add_data: (state, action) => {
            return action.payload;
        }
    }
})

export const complaintsSliceActions = complaintsSlice.actions;
export default complaintsSlice;