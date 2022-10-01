import Image from "next/image"

const NotOwner = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center flex-col">
      <h1 className="text-rare italic font-semibold text-[32px] mb-[2.22vh] animate-bounce">
        You are not <span className="text-secondary underline">Owner</span>!
      </h1>
      {/* <Image layout="fill" src="/Think.png" className="object-contain" /> */}
    </div>
  )
}

export default NotOwner
