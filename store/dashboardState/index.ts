import { createSlice } from '@reduxjs/toolkit'

interface InitialState {
	status: 'unAuth' | 'differentChain' | 'dashboard'
}

const initialState: InitialState = {
	status: 'unAuth',
}

export const dashboardSlice = createSlice({
	name: 'dashboard',
	initialState,
	reducers: {
		setDashboard: () => ({ status: 'dashboard' } as InitialState),
		setUnAuth: () => ({ status: 'unAuth' } as InitialState),
		setDifferentChain: () => ({ status: 'differentChain' } as InitialState),
	},
})

export const { setDashboard, setUnAuth, setDifferentChain } =
	dashboardSlice.actions
export default dashboardSlice.reducer
