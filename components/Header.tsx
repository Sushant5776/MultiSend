import Link from "next/link"

type Props = {
  btnName: string
}

const Header = ({ btnName }: Props) => {
  return (
    <header className="flex justify-between px-8 pt-8 w-full">
      <p className="text-[32px] font-bold text-secondary">MultiSend</p>
      <Link href={`${btnName === "Go Home" ? "/" : "/dashboard"}`}>
        <button className="bg-secondary font-medium text-base rounded-md px-4 py-[12px] text-primary hover:bg-rare hover:scale-105 transition">
          {btnName}
        </button>
      </Link>
    </header>
  )
}

export default Header
