import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserInfo } from '@/core/@core-types/userInfo';


export type UserState = UserInfo;

const initialState: UserState = {
    avatar: '',
    name: '',
    username: '',
    email: '',
    authority: ['mono-admin'],
}

const userSlice = createSlice({
    name: 'auth-user',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<UserState>) {
            state.avatar = action.payload?.avatar
            state.name = action.payload?.name
            state.email = action.payload?.email
            state.username = action.payload?.username
            state.authority = action.payload?.authority
        },
    }
})

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
