import { createSlice } from '@reduxjs/toolkit';

export const profileSlice = createSlice({
    name: 'profile_user',
    initialState: {
        name: null,
        profile_pic: null,
    },
    reducers: {
        setProfile: (state, action) => {
            state.name = action.payload.name;
            state.profile_pic = action.payload.profile_pic;
        },
    },
});

export const { setProfile } = profileSlice.actions;

export default profileSlice.reducer;