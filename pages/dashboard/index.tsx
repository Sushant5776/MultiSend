import Guest from "@/components/Guest"
import SwitchNetwork from "@/components/SwitchNetwork"
import { useEffect, useState } from "react"
import Head from "next/head"
import { useDispatch, useSelector } from "react-redux"
import { RootDispatch, RootState } from "@/store/index"
import {
  setDashboard,
  setDifferentChain,
  setNoMetamask,
  setUnAuth,
} from "@/store/dashboardState"
import detectEthereumProvider from "@metamask/detect-provider"
import Dashboard from "@/components/Dashboard"
import NoMetamask from "@/components/NoMetamask"

const dashboard = () => {
  const [metamask, setMetamask] = useState<null | any>(null)
  const { status } = useSelector<
    RootState,
    { status: "unAuth" | "differentChain" | "dashboard" | "noMetamask" }
  >((state) => ({
    status: state.dashboard.status,
  }))
  const dispatch: RootDispatch = useDispatch()

  // Check If There is Provider
  useEffect(() => {
    async function detectProvider() {
      const provider = (await detectEthereumProvider()) as any
      return provider
    }

    detectProvider()
      .then((provider) => {
        if (provider) setMetamask(provider)
      })
      .catch((error) => {
        console.log(error)
        dispatch(setNoMetamask())
      })
  }, [])

  useEffect(() => {
    const accountsChangedHandler = (accounts: string[]) => {
      if (!accounts.length) {
        dispatch(setUnAuth())
      } else {
        if (metamask.chainId === "0x5") {
          dispatch(setDashboard())
        } else {
          dispatch(setDifferentChain())
        }
      }
    }

    const chainChangedHandler = (chainId: string) => {
      if (metamask.selectedAddress) {
        if (chainId !== "0x5") dispatch(setDifferentChain())
        else dispatch(setDashboard())
      } else {
        dispatch(setUnAuth())
      }
    }

    if (metamask) {
      metamask.on("accountsChanged", accountsChangedHandler)
      metamask.on("chainChanged", chainChangedHandler)
    } else dispatch(setNoMetamask())

    return () => {
      metamask?.removeListener("accountsChanged", accountsChangedHandler)
      metamask?.removeListener("chainChanged", chainChangedHandler)
    }
  }, [metamask])

  // User State
  useEffect(() => {
    if (metamask) {
      if (metamask.selectedAddress) {
        if (metamask.chainId !== "0x5") dispatch(setDifferentChain())
        else {
          dispatch(setDashboard())
        }
      } else dispatch(setUnAuth())
    } else dispatch(setNoMetamask())
  }, [metamask])

  return (
    <>
      <Head>
        <title>
          {status === "unAuth"
            ? "Connect to MultiSend"
            : status === "differentChain"
            ? "Switch Network"
            : "Dashboard"}
        </title>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      {status === "unAuth" ? (
        <Guest metamask={metamask} />
      ) : status === "differentChain" ? (
        <SwitchNetwork metamask={metamask} />
      ) : status === "dashboard" ? (
        <Dashboard currentUser={metamask?.selectedAddress} />
      ) : (
        // <div>You are on dashboard {metamask?.selectedAddress}</div>
        <NoMetamask />
      )}
    </>
  )
}

export default dashboard
