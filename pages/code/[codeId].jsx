import { ObjectId } from "mongodb"
import { getServerSession } from "next-auth"
import React from "react"
import Landing from "@/components/Landing"
import { connectToDatabase } from "../../lib/mongodb"
import { authOptions } from "../api/auth/[...nextauth]"

const CodePage = props => {
  return (
    <>
    <div className="bg-bg_main">
      <Landing
        code={props.code}
        codeId={props.codeId}
        title={props.title}
        description={props.description}
        update={true}
      />
      </div>
    </>
  )
}
export default CodePage

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

    //console.log(context.params)
    const { codeId } = context.params

    try {
      const code = await db
        .collection("codeDoc")
        .findOne({ _id: new ObjectId(codeId) })
      //console.log("fetched code", code)
      return {
        props: {
          title: code.title,
          code: code.code,
          description: code.description,
          codeId: code._id.toString()
        }
      }
    } catch (err) {
      console.log("error in fetching code", err)
    }

    return { props: {} }
  } catch (err) {
    console.log("error in get session", err)
    return { props: {} }
  }
}
