import '@/styles/globals.css'
import * as React from 'react'
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { type AppProps } from 'next/app'
import ErrorBoundary from '@/components/ErrorBoundary'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  const [queryClient] = React.useState<QueryClient>(() => new QueryClient())
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ErrorBoundary>
  )
}
