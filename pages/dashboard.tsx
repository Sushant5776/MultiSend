import Guest from "@/components/Guest"
import SwitchNetwork from "@/components/SwitchNetwork"
import { useState } from "react"
import Head from "next/head"

const dashboard = () => {
  const [status, setStatus] = useState<
    "differentChain" | "dashboard" | "unAuth"
  >("unAuth")

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
