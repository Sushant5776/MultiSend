import Header from '@/components/Header'
import { useEffect, useState } from 'react'
import { utils, Contract, providers, BigNumber, ContractFactory } from 'ethers'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from 'utils/contractConfig'
import ContractInterface from '@/components/ContractInterface'

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

	useEffect(() => {
		async function getContract() {
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
		}

		if (metamask) getContract()
	}, [metamask])
	return (
		<main>
			<Header btnName='Go Home' walletAddress={metamask?.selectedAddress} />
			{owner.toLowerCase() === metamask?.selectedAddress?.toLowerCase() ? (
				// <ContractInterface />

				<ContractInterface contract={multiSendContract} balance={balance} />
			) : (
				'You are not owner'
			)}
		</main>
	)
}

export default UserData
