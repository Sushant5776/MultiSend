import Header from "@/components/Header"
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Multi-Send</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header btnName="Let's Connect" />

      {/* MainContent */}
      <section className="flex">
        <div className="relative w-[408px] h-[368px] top-[216px] left-[232px]">
          <Image layout="fill" src="/homeImage.png" alt="homeImage" />
        </div>
        <div className="relative top-[155px] right-[132px] left-[772px] text-rare">
          <h1 className="text-[32px] italic font-semibold text-center">
            Hassel <span className="underline text-secondary">Free</span>{" "}
            Payments <span className="text-secondary">!</span>
          </h1>
          <div className="mt-6 leading-[24px] text-justify space-y-8 w-[375px] h-[360px] break-words text-base text-rare/95">
            <p>
              <span className="font-medium">Whether</span> you have to track
              your payments or send one, We have all that you need!
            </p>
            <p>
              Let's have a{" "}
              <span className="text-secondary font-medium">safer</span>,
              <span className="text-secondary font-medium">reliable</span> and{" "}
              <span className="text-secondary font-medium">easy to use</span>{" "}
              way of broadcasting payments at just click of a button.
            </p>
            <p>
              With not jst being one amongst other payment systems on the web,
              MultiSend comes with the additional benefits of{" "}
              <span className="font-medium text-secondary">
                Ethereum Blockchain
              </span>
              .
            </p>
            <p>
              MultiSend is a completely transparent and{" "}
              <span className="text-secondary font-medium">decentralized</span>{" "}
              payment system built using the power of{" "}
              <span className="text-secondary font-medium">
                Smart Contracts
              </span>
              !
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
