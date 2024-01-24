import { configureStore } from "@reduxjs/toolkit";
import userBasicDetailsSlice from "./userBasicDetails/userBasicDetailsSlice";
import authenticationSlice from "./authentication/authenticationSlice";

export default configureStore({
    reducer: {
        user_basic_details: userBasicDetailsSlice.reducer,
        authentication_user: authenticationSlice.reducer,
    },
});