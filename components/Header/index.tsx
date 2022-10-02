import Link from 'next/link'

type Props = {
	btnName: string
	walletAddress: string | null
}

const Header = ({ btnName, walletAddress }: Props) => {
	return (
		<header className='flex justify-between px-8 pt-8 w-full'>
			<Link href={'/'}>
				<h1 className='text-[32px] cursor-pointer font-bold text-secondary'>
					MultiSend
				</h1>
			</Link>

			{walletAddress ? (
				<div className='space-x-8'>
					<h4 className='inline text-rare/75 dark:text-primary/75 font-medium'>
						{walletAddress.substring(0, 5)}...{walletAddress.substring(38)}
					</h4>
					<Link href={`${btnName === 'Go Home' ? '/' : '/dashboard'}`}>
						<button className='bg-secondary font-medium text-base rounded-md px-4 py-[12px] text-primary hover:bg-rare dark:hover:bg-gray-700 hover:scale-105 transition'>
							{btnName}
						</button>
					</Link>
				</div>
			) : (
				<Link href={`${btnName === 'Go Home' ? '/' : '/dashboard'}`}>
					<button className='bg-secondary font-medium rounded-md px-4 py-[12px] text-primary hover:bg-rare dark:hover:bg-gray-700 hover:scale-105 transition'>
						{btnName}
					</button>
				</Link>
			)}
		</header>
	)
}

export default Header
