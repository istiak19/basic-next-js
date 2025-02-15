// "use client"
import { signIn } from "next-auth/react";
import UserInfo from "./components/UserInfo";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <>
      <h2>Hello World! </h2>
      <p className="font-bold text-xl">FROM CLIENT COMPONENT</p>
      <UserInfo></UserInfo>
      <p className="font-bold text-xl">FROM SERVER COMPONENT</p>
      {JSON.stringify(session)}
    </>
  );
}