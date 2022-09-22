import { createSlice } from '@reduxjs/toolkit'

interface IDashboardState {
	status: 'unAuth' | 'differentChain' | 'dashboard' | 'noMetamask'
}

const initialState: IDashboardState = {
	status: 'unAuth',
}

export const dashboardSlice = createSlice({
	name: 'dashboard',
	initialState,
	reducers: {
		setDashboard: () => ({ status: 'dashboard' } as IDashboardState),
		setUnAuth: () => ({ status: 'unAuth' } as IDashboardState),
		setDifferentChain: () => ({ status: 'differentChain' } as IDashboardState),
		setNoMetamask: () => ({ status: 'noMetamask' } as IDashboardState),
	},
})

export const { setDashboard, setUnAuth, setDifferentChain, setNoMetamask } =
	dashboardSlice.actions
export default dashboardSlice.reducer
