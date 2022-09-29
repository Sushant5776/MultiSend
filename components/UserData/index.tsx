import Header from '@/components/Header'
import { useEffect } from 'react'
import { utils, Contract, providers, Signer } from 'ethers'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from 'utils/contractConfig'

interface DashboardProps {
	currentUser: string | null
	metamask: any
}

const UserData = ({ currentUser }: DashboardProps) => {
	return (
		<main>
			<Header btnName='Go Home' walletAddress={currentUser} />
			{/* <h1>{currentUser ?? ''}</h1> */}
		</main>
	)
}

export default UserData
