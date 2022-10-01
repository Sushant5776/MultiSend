import Header from '@/components/Header'
import { useEffect, useState } from 'react'
import { utils, Contract, providers, BigNumber, ContractFactory } from 'ethers'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from 'utils/contractConfig'
import ContractInterface from '@/components/ContractInterface'
import NotOwner from '@/components/NotOwner'

interface DashboardProps {
	// currentUser: string | null
	metamask: any
}

const UserData = ({ metamask }: DashboardProps) => {
	const [multiSendContract, setMultiSendContract] = useState<
		undefined | Contract
	>(undefined)
	const [balance, setBalance] = useState('')
	const [owner, setOwner] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		async function getContract() {
			setIsLoading(true)
			const web3Provider = new providers.Web3Provider(metamask, 'any')
			const signer = web3Provider.getSigner()

			const MultiSendContract = new Contract(
				CONTRACT_ADDRESS,
				CONTRACT_ABI,
				signer
			)

			const balance: BigNumber = await MultiSendContract.totalSupply()
			const owner: string = await MultiSendContract.owner()
			setOwner(owner)
			setBalance(utils.formatEther(balance))
			setMultiSendContract(MultiSendContract)
			setIsLoading(false)
		}

		if (metamask) {
			getContract()
		}
	}, [metamask])

	return (
		<main className='w-full min-h-screen'>
			<Header btnName='Go Home' walletAddress={metamask?.selectedAddress} />
			{isLoading ? (
				<div className='flex absolute items-center w-full top-1/2 -translate-y-1/2'>
					<div
						className='spinner-border animate-spin text-secondary mx-auto inline-block w-16 h-16 border-4 rounded-full'
						role='status'>
						<span className='visually-hidden'>Loading...</span>
					</div>
				</div>
			) : owner.toLowerCase() === metamask?.selectedAddress?.toLowerCase() ? (
				<ContractInterface contract={multiSendContract} balance={balance} />
			) : (
				<NotOwner />
			)}
		</main>
	)
}

export default UserData
