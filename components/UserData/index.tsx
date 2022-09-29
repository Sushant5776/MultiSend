import Header from '@/components/Header'
import { useEffect, useState } from 'react'
import { utils, Contract, providers, BigNumber, ContractFactory } from 'ethers'
import { CONTRACT_ABI, CONTRACT_ADDRESS } from 'utils/contractConfig'

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
				<>
					<p className='m-4 text-rare/75 text-center font-medium text-sm'>
						MultiSend Balance: {balance} ETH
					</p>
					{/* center form, remove outline, border textarea, placeholder->0x... */}
					<form className='w-1/2 mx-auto space-y-2'>
						<label
							htmlFor='textarea'
							className='block text-rare/75 font-medium text-sm'>
							Addresses to Pay
						</label>
						<textarea id='textarea' className='w-3/4' rows={6}></textarea>
					</form>
				</>
			) : (
				'You are not owner'
			)}
		</main>
	)
}

export default UserData
