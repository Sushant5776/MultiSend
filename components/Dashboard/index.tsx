import Header from '@/components/Header'

interface DashboardProps {
	currentUser: string | null
}

const Dashboard = ({ currentUser }: DashboardProps) => {
	return (
		<main>
			<Header btnName='Go Home' walletAddress={currentUser} />
			{/* <h1>{currentUser ?? ''}</h1> */}
		</main>
	)
}

export default Dashboard
