import "../styles/globals.css"
import type { AppProps } from "next/app"
import { Provider as StateProvider } from "react-redux"
import { store } from "@/store/index"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StateProvider store={store}>
      <Component {...pageProps} />
    </StateProvider>
  )
}

export default MyApp
