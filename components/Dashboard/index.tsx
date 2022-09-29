import Header from "@/components/Header"
import { useEffect } from "react"
import { utils, Contract, providers, Signer } from "ethers"
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "utils/contractConfig"

interface DashboardProps {
  currentUser: string | null
  metamask: any
}

const Dashboard = ({ currentUser, metamask }: DashboardProps) => {
  // useEffect(() => {
  //   async function getContract() {
  //     const provider = new providers.Web3Provider(metamask, "any")
  //     const signer = provider.getSigner()
  //     const balance = await signer.getBalance()
  //     console.log(utils.formatEther(balance))

  //     const myContract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer)
  //   }

  //   if (metamask) getContract()
  // }, [metamask])

  return (
    <main>
      <Header btnName="Go Home" walletAddress={currentUser} />
      {/* <h1>{currentUser ?? ''}</h1> */}
    </main>
  )
}

export default Dashboard
