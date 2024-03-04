import React from "react"
import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]"
import Link from "next/link"
import { connectToDatabase } from "../lib/mongodb"

const Dashboard = (props) => {
  const { codes } = props
  return <>
    <div className="p-4 min-h-screen bg-bg_main">
      <p className="text-5xl mt-6 text-gray-100 font-bold text-start">Your Dashboard</p>
      {!codes && (
        <>
          <p className="text-xl mt-4 text-gray-100 md:text-3xl font-black text-center">
            Save your codes to access them from your Dashboard!
          </p>
          <div className="text-center mt-4">
            <Link href="/">
              <span className="text-xl font-bold border-2 z-10 rounded-md px-4 py-2 hover:shadow transition duration-200 bg-white flex-shrink-0">
                Start Here
              </span>
            </Link>
          </div>
        </>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 w-full md:w-10/12 mx-auto">
        {codes?.map((code, idx) => (
          <Link href={`/code/${code._id}`} key={idx}>
            <div className="flex flex-col mb-4 md:mb-0 md:mx-8  p-4 w-full  h-52 border-2 z-10 rounded-md px-4 py-2 hover:bg-gray-400 transition duration-600 bg-white flex-shrink-0">
              <p className="text-3xl text-center font-bolder border-b-2 border-solid">
                {code.title}
              </p>
              <p className="text-lg mt-4">{code.description}</p>
              <p className="mt-auto text-md ml-auto">
                {new Date(code.timestamp).toDateString()}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </>
}
export default Dashboard

export async function getServerSideProps(context) {
  try {
    const session = await getServerSession(
      context.req,
      context.res,
      authOptions
    )

    if (!session) {
      return {
        redirect: {
          destination: "/auth/login",
          permanent: false
        }
      }
    }

    let { db } = await connectToDatabase()

    const checkUser = await db
      .collection("codes")
      .findOne({ email: session.user.email })

    // console.log("checkUser", checkUser);

    if (checkUser.codes) {
      const res = await db
        .collection("codeDoc")
        .find({ _id: { $in: checkUser.codes } })
        .project({ _id: 1, title: 1, description: 1, timestamp: 1 })

      const codes = await res.toArray()
      codes.map(c => {
        c._id = c._id.toString()
        c.timestamp = c.timestamp.toString()
      })
      //console.log("codes", codes)

      return { props: { codes: codes } }
    }
    return { props: {} }
  } catch (err) {
    console.log("error in get session", err)
    return { props: {} }
  }
}
