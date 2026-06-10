"use server";

//import { auth } from "@/auth";
import Link from "next/link";
//import { SignInButton } from "@/components/SignInButton";
//import { SignOutButton } from "@/components/signOutButton";

export default async function SignIn() {
  //const session = await auth();

  //if (session?.user) {
    return (
      <div>
        <Link href="/userInfo"> User Info </Link>
        {/* <SignOutButton /> */}
      </div>
    );
  //}

  return (
    <div>
      {" "}
      <p> You Are Not Signed In</p> {/* <SignInButton /> */}
    </div>
  );
}
