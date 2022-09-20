import Header from "./Header"
import { useRouter } from "next/router"
import GuestContent from "./GuestContent"

const Guest = () => {
  const router = useRouter()

  return (
    <div>
      <Header btnName="Go Home" />
      <GuestContent />
    </div>
  )
}

export default Guest
