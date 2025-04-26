
//imports
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Slices/AuthSlice/authSlice";
import MapSlice from "./Slices/MapSlice/MapSlice";
import complaintsSlice from "./Slices/ComplaintsSlice/ComplaintsSlice";
import statsSlice from "./Slices/StatsSlice/StatsSlice";
import assignedJobSlice from "./Slices/AssignedJobSlice/AssignedJobSlice";

const store = configureStore({reducer:{
    auth: authSlice.reducer,
    map_data: MapSlice.reducer,
    complaints_data: complaintsSlice.reducer,
    stats: statsSlice.reducer,
    assigned_job: assignedJobSlice.reducer
}})

export default store;