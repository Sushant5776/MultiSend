import Image from "next/image"

const Content = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <h1 className="font-semibold text-[32px] text-center italic mb-[32px] text-rare">
        You aren't <span className="text-secondary underline">Connected</span>!
      </h1>

      <div className="relative h-80 w-[640px] mb-[32px]">
        <Image src="/unauthImage.svg" alt="image" layout="fill" />
      </div>
      <p className="text-[14px] font-medium text-center text-rare/75 mb-4">
        Connect Using Your{" "}
        <span className="text-rare italic font-semibold">Web3</span> Wallet!
      </p>
      <button className="bg-secondary font-medium text-base rounded-md px-4 py-[12px] block mx-auto text-primary hover:bg-rare hover:scale-105 transition">
        Let's Get In
      </button>
    </div>
  )
}

export default Content
