import { configureStore } from '@reduxjs/toolkit'
import dashboardReducer from '@/store/dashboardState'
import userReducer from '@/store/UserState'

export const store = configureStore({
	reducer: {
		dashboard: dashboardReducer,
		user: userReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch
