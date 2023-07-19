import '../styles/globals.css'
import { Kumbh_Sans } from "@next/font/google"

const kumbhSans = Kumbh_Sans({ subsets: ['latin'], weight:['400','700'], })

function MyApp({ Component, pageProps }) {
  return(
  <main className={kumbhSans.className}>
   <Component {...pageProps} />
  </main>
  )
}

export default MyApp
