import '@/styles/globals.css'
import UIFooter from '@/components/Footer'
import UINavbar from '@/components/Navbar'
import React from 'react'
import ErrorBoundary from '@/components/ErrorBoundary'
import ReactQueryWrapper from './ReactQueryWrapper'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Work+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ReactQueryWrapper>
          <ErrorBoundary>
            <div>
              <div className="max-w-[1280px] mx-auto px-5">
                <UINavbar />
              </div>
              <div>{children}</div>
              <UIFooter />
            </div>
          </ErrorBoundary>
        </ReactQueryWrapper>
      </body>
    </html>
  )
}
