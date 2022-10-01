import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider as StateProvider } from 'react-redux'
import { store } from '@/store/index'
import nprogress from 'nprogress'
import Router from 'next/router'

nprogress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', () => nprogress.start())
Router.events.on('routeChangeComplete', () => nprogress.done())
Router.events.on('routeChangeError', () => nprogress.done())

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<StateProvider store={store}>
			<Component {...pageProps} />
		</StateProvider>
	)
}

export default MyApp
