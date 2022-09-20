import Header from "@/components/Header"
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"

const Home: NextPage = () => {
  return (
    <div className="h-screen w-full">
      <Head>
        <title>Multi-Send</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header */}
      <Header btnName="Let's Connect" />

      {/* MainContent */}
      <section className="flex justify-center">
        <div className="relative w-[31.875vw] top-[21.53vh] mr-[10.32vw]">
          <Image
            layout="fill"
            src="/homeImage.png"
            alt="homeImage"
            className="object-contain"
          />
        </div>
        <div className="relative top-[21.53vh] text-rare">
          <h1 className="text-[32px] italic font-semibold mb-8 text-center">
            Hassel <span className="underline text-secondary">Free</span>{" "}
            Payments<span className="text-secondary">!</span>
          </h1>
          <div className="leading-6 text-justify space-y-8 w-[29.3vw] max-w-[384px] max-h-[50vh] h-fit break-words text-base text-rare/95">
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
              With not just being one amongst other payment systems on the web,
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
