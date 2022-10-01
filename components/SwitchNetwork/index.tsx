import Image from 'next/image'
import Header from '@/components/Header'

interface SwitchNetworkProps {
	metamask: any
}

const SwitchNetwork = ({ metamask }: SwitchNetworkProps) => {
	const handleSwitchNetwork = async () => {
		if (metamask) {
			try {
				await metamask.request({
					method: 'wallet_switchEthereumChain',
					params: [{ chainId: '0x5' }],
				})
			} catch (error) {
				alert((error as any).message)
			}
		} else {
			alert('Metamask is not installed!')
		}
	}

	return (
		<>
			<Header btnName='Go Home' walletAddress={metamask.selectedAddress} />
			<div
				data-id='glow-center'
				className='glow bottom-[6.11vh] left-[25vh] w-[71.11vh] h-[71.11vh]'
			/>

			<main className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>
				<div className='relative h-[35.56vh] mb-[4.44vh]'>
					<Image
						layout='fill'
						src='/ethImage.svg'
						alt='image'
						className='object-contain'
					/>
				</div>
				<h1 className='text-rare italic font-semibold text-[32px] mb-[2.22vh]'>
					Switch Your Network to{' '}
					<span className='text-secondary underline'>Goerli</span>!
				</h1>
				<p className='text-rare/75 text-sm font-medium mb-[4.44vh]'>
					Currently We Only Support{' '}
					<span className='italic text-rare font-semibold'>Goerli</span> Network
					(Main/Test)
				</p>
				<button
					onClick={() => handleSwitchNetwork()}
					className='bg-secondary font-medium text-base rounded-md px-4 py-[12px] block mx-auto text-primary hover:bg-rare hover:scale-105 transition'>
					Switch Network
				</button>
			</main>
		</>
	)
}

export default SwitchNetwork
