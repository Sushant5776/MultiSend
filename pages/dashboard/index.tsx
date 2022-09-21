import Guest from "@/components/Guest"
import SwitchNetwork from "@/components/SwitchNetwork"
import { useEffect, useState } from "react"
import Head from "next/head"
import { useDispatch, useSelector } from "react-redux"
import { RootDispatch, RootState } from "@/store/index"
import {
  setDashboard,
  setDifferentChain,
  setUnAuth,
} from "@/store/dashboardState"
import { Window } from "types/global"

const dashboard = () => {
  const status = useSelector<RootState>((state) => state.dashboard.status)
  const dispatch: RootDispatch = useDispatch()

  useEffect(() => {
    const accountsChangedHandler = (accounts: string[]) => {
      if (!accounts.length) dispatch(setUnAuth())
      else dispatch(setDashboard())
    }

    if ((window as unknown as Window).ethereum) {
      const userAuth = (window as unknown as Window).ethereum.on(
        "accountsChanged",
        accountsChangedHandler
      )
    }

    return (window as unknown as Window).ethereum.removeListener(
      "accountsChanged",
      accountsChangedHandler
    )
  }, [])

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
        <Guest />
      ) : status === "differentChain" ? (
        <SwitchNetwork />
      ) : (
        // <Dashboard />
        ""
      )}
    </>
  )
}

export default dashboard
