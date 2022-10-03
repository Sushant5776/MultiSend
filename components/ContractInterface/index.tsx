import { Contract, utils } from 'ethers'
import { MouseEvent, useState } from 'react'

interface IContractInterfaceProps {
	balance: string
	contract: Contract | undefined
}

const ContractInterface = ({ balance, contract }: IContractInterfaceProps) => {
	const [addressesString, setAddressesString] = useState('')
	const [amountToSend, setAmountToSend] = useState('1')

	const handlePayment = async (event: MouseEvent) => {
		event.preventDefault()
		const addressesToPay = addressesString.split('\n')
		const regex = /^0x[a-fA-F0-9]{40}$/
		const areAddressesValid = addressesToPay.every((value) => regex.test(value))
		if (areAddressesValid) {
			console.log(utils.parseEther(amountToSend))
			if (contract) {
				try {
					const data = await contract.multiSend(
						addressesToPay,
						utils.parseEther(amountToSend)
					)
					console.log(data)
				} catch (error: any) {
					alert(error.error.message)
				}
			} else alert('Could not get contract!')
		}
	}

	return (
		<div>
			<form className='lg:w-1/4 w-1/2 space-y-5 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
				<p className='mb-16 text-rare dark:text-white text-center text-xl font-medium'>
					MultiSend Balance:{' '}
					<span className='text-secondary italic'>{balance}</span> ETH
				</p>

				<div className='space-y-3'>
					<label
						htmlFor='amount'
						className='block text-rare/60 dark:text-primary/60 ml-1 font-medium'>
						Amount To Pay
					</label>

					<input
						type='number'
						id='amount'
						min={1}
						value={amountToSend}
						onChange={(event) => setAmountToSend(event.target.value)}
						placeholder='Enter Numeric Value in ETH currency (1 means 1 ETH)'
						className='block transition w-full outline-none rounded-lg py-2 px-4 dark:bg-slate-800 text-rare/60 dark:text-primary/60 font-medium ring-2 dark:ring-white/10 dark:focus:ring-white/25 ring-rare/10 focus:ring-rare/30'
					/>
				</div>

				<div className='space-y-3'>
					<label
						htmlFor='textarea'
						className='block text-rare/60 dark:text-primary/60 ml-1 font-medium'>
						Addresses to Pay
					</label>

					<textarea
						id='textarea'
						className='block transition resize-none w-full outline-none rounded-lg py-2 px-4 text-rare/60 dark:text-primary/60 font-medium ring-2 dark:bg-slate-800 ring-rare/10 focus:ring-rare/30 dark:ring-white/10 dark:focus:ring-white/25'
						rows={6}
						value={addressesString}
						placeholder='0x...,etc (Each Address on New Line)'
						onChange={(event) => setAddressesString(event.target.value)}
					/>
				</div>

				<button
					disabled={!addressesString || !amountToSend}
					onClick={(event) => handlePayment(event)}
					className='w-full active:scale-95 font-medium disabled:scale-100 disabled:bg-rare/30 hover:bg-rare transition py-2 px-4 text-primary dark:disabled:bg-gray-800 bg-secondary/100 rounded-lg'>
					Pay
				</button>
			</form>
		</div>
	)
}

export default ContractInterface
