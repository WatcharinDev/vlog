import Navbar from '@/components/navbar/navbar'
import '@/styles/globals.css'
import React from 'react'
export default function App({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Navbar>
        <Component {...pageProps} />
      </Navbar>
    </React.Fragment>
  )

}
