import '../styles/globals.css'
import {ThemeProvider, RegexProvider} from 'core/providers'
import {Navbar} from 'core/components'

export default function MyApp({Component, pageProps}) {
  return (
    <ThemeProvider>
      <RegexProvider>
        <Navbar />
        <Component {...pageProps} />
      </RegexProvider>
    </ThemeProvider>
  )
}
