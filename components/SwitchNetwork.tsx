import Image from "next/image"
import Header from "./Header"

const SwitchNetwork = () => {
  return (
    <>
      <Header btnName="Go Home" />

      <main className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-center">
        <div className="relative h-[256px] mb-[32px]">
          <Image
            layout="fill"
            src="/ethImage.svg"
            alt="image"
            className="object-contain"
          />
        </div>
        <h1 className="text-rare italic font-semibold text-[32px] mb-4">
          Switch Your Network to{" "}
          <span className="text-secondary underline">Goerli</span>!
        </h1>
        <p className="text-rare text-xs mb-[32px]">
          Currently We Only Support{" "}
          <span className="italic text-rare">Goerli</span> Network (Main/Test)
        </p>
        <button className="bg-secondary font-medium text-base rounded-md px-4 py-[12px] block mx-auto text-primary hover:bg-rare hover:scale-105 transition">
          Switch Network
        </button>
      </main>
    </>
  )
}

export default SwitchNetwork
