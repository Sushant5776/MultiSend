import Guest from "@/components/Guest"
import SwitchNetwork from "@/components/SwitchNetwork"
import { useState } from "react"

const dashboard = () => {
  const [status, setStatus] = useState<
    "differentChain" | "dashboard" | "unAuth"
  >("differentChain")
  return (
    <>
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
