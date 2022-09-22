import { configureStore } from '@reduxjs/toolkit'
import dashboardReducer from '@/store/dashboardState'

export const store = configureStore({
	reducer: {
		dashboard: dashboardReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }),
})

export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch
