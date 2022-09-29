import { useState } from "react"

interface IContractInterfaceProps {
  balance: string
}

const ContractInterface = ({ balance }: IContractInterfaceProps) => {
  const [input, setInput] = useState("")
  //   const [addresses, setAddresses] = useState([])

  return (
    <>
      <p className="m-4 text-rare/75 text-center font-medium text-sm">
        MultiSend Balance: <span className="text-secondary">{balance}</span> ETH
      </p>
      {/* center form, remove outline, border textarea, placeholder->0x... */}
      <form className="w-1/2   space-y-2 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <label
          htmlFor="textarea"
          className="block text-rare/75 font-medium text-sm"
        >
          Addresses to Pay
        </label>
        <textarea
          id="textarea"
          className="block w-3/4 mx-auto outline-none  focus:border focus:border-rare/75"
          rows={6}
          placeholder="0x...,0x...,0x...  etc"
          onChange={(e) => setInput(e.target.value)}
        />
        {/* <button onClick={getAddress}>Submit</button> */}
      </form>
    </>
  )
}

export default ContractInterface
