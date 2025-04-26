import { createSlice } from "@reduxjs/toolkit";

const MapSlice = createSlice({
  name: "map_data",
  initialState: [],
  reducers: {
    update_data: (state, action) => {
        return action.payload;
    }
  },
});


export const mapSliceActions =  MapSlice.actions;
export default MapSlice;