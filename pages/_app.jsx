import React from "react"
import { ToastContainer } from "react-toastify"
import { ChakraProvider } from "@chakra-ui/react"
import { SessionProvider } from "next-auth/react"
import "../styles/index.css"
import Navbar from "../components/Navbar"
import Head from "next/head"
import NextTopLoader from "nextjs-toploader"

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <>
      <Head>
      <title>CodeZen</title>
      </Head>
      <SessionProvider session={session}>
        <ChakraProvider>
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <div className="hidden md:block">
            <Navbar />
          </div>
          <NextTopLoader 
          color="#E6E6FA"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          template='<div class="bar" role="bar"><div class="peg"></div></div> 
          <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={1600}
          showAtBottom={false}
          />
          <Component {...pageProps} />
          <div className="block md:hidden fixed bottom-0 z-10 w-full">
            <Navbar />
          </div>
        </ChakraProvider>
      </SessionProvider>
    </>
  )
}

export default MyApp
