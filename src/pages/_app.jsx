import '../styles/globals.css'
import {ThemeProvider, RegexProvider} from 'core/providers'

export default function MyApp({Component, pageProps}) {
  return (
    <ThemeProvider>
      <RegexProvider>
        <Component {...pageProps} />
      </RegexProvider>
    </ThemeProvider>
  )
}
