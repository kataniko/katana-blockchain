import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'



function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  )
}

export default MyApp


// serverUrl='https://gqasdf4tkkiu.usemoralis.com:2053/server'
// appId='TL0YJzCoVXgYv0fMKfzmgD52UaoaMllZI1DxTJWJ'