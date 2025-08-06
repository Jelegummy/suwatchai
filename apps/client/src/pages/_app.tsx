import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider as JotaiProvider } from 'jotai'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { SessionProvider } from 'next-auth/react'
import { useState } from 'react'
import { Toaster } from 'sonner'

const App = ({ Component, pageProps: { session, ...pageProps } }: AppProps) => {
  const [client] = useState(() => new QueryClient())

  return (
    <JotaiProvider>
      <SessionProvider session={session}>
        <QueryClientProvider client={client}>
          <Head>
            <link rel="icon" type="image/png" href="/images/logo.png" />
          </Head>
          <main data-theme="massage">
            <Component {...pageProps} />
            <Toaster richColors={true} position="bottom-center" />
          </main>
        </QueryClientProvider>
      </SessionProvider>
    </JotaiProvider>
  )
}

export default App
