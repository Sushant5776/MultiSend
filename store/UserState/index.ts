import { createSlice } from '@reduxjs/toolkit'

type InitialState = string

const initialState: InitialState = ''

export const UserSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (_state, { payload }) => payload,
	},
})

export const { setUser } = UserSlice.actions
export default UserSlice.reducer
