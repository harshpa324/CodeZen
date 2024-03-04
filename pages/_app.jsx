import React from "react"
import { ToastContainer } from "react-toastify"
import { ChakraProvider } from "@chakra-ui/react"
import { SessionProvider } from "next-auth/react"
import "../styles/index.css"
import Navbar from "../components/Navbar"
import Head from "next/head"

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
