import Guest from '@/components/Guest'
import SwitchNetwork from '@/components/SwitchNetwork'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import { useDispatch, useSelector } from 'react-redux'
import { RootDispatch, RootState } from '@/store/index'
import {
	setDashboard,
	setDifferentChain,
	setUnAuth,
} from '@/store/dashboardState'
import detectEthereumProvider from '@metamask/detect-provider'
import { setUser } from '@/store/UserState'

const dashboard = () => {
	const [metamask, setMetamask] = useState<null | any>(null)
	const { status, user } = useSelector<
		RootState,
		{ status: 'unAuth' | 'differentChain' | 'dashboard'; user: string }
	>((state) => ({
		status: state.dashboard.status,
		user: state.user,
	}))
	const dispatch: RootDispatch = useDispatch()

	// Check If There is Provider
	useEffect(() => {
		async function detectProvider() {
			const provider = (await detectEthereumProvider()) as any
			return provider
		}

		detectProvider()
			.then(async (provider) => {
				if (provider) setMetamask(provider)
			})
			.catch((error) => {
				console.log(error)
				dispatch(setUnAuth())
			})
	}, [])

	useEffect(() => {
		const accountsChangedHandler = (accounts: string[]) => {
			if (!accounts.length) {
				dispatch(setUnAuth())
			} else {
				dispatch(setUser(accounts[0]))
				dispatch(setDashboard())
			}
		}

		if (metamask) {
			metamask.on('accountsChanged', accountsChangedHandler)
		}

		return () => metamask?.off('accountsChanged', accountsChangedHandler)
	}, [metamask])

	// User State
	useEffect(() => {
		if (metamask && status !== 'dashboard') {
			if (user) dispatch(setDashboard())
		}
	}, [metamask])

	return (
		<>
			<Head>
				<title>
					{status === 'unAuth'
						? 'Connect to MultiSend'
						: status === 'differentChain'
						? 'Switch Network'
						: 'Dashboard'}
				</title>
				<link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
			</Head>
			{status === 'unAuth' ? (
				<Guest metamask={metamask} />
			) : status === 'differentChain' ? (
				<SwitchNetwork />
			) : (
				// <Dashboard />
				<div>You are on dashboard {user}</div>
			)}
		</>
	)
}

export default dashboard
