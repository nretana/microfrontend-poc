
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ProfileState = {
    name: string,
    lastName: string
}

const initialProfileState: ProfileState = {
    name: 'John',
    lastName: 'Doe',
}

const profileSlice = createSlice({
    name: 'profile',
    initialState: initialProfileState,
    reducers: {
        setProfile(state, action: PayloadAction<{ name: string, lastName: string }>) {
            state.name = action.payload?.name;
            state.lastName = action.payload?.lastName;
        }
    }
});

export const  { setProfile } = profileSlice.actions;
//export default profileSlice.reducer;
export default profileSlice;