import Header from '@/components/Header'

interface DashboardProps {
	currentUser: string | null
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
