"use client"
import Link from "next/link";
import { signIn } from "next-auth/react"

const Login = () => {
    // const handleSignIn = () => {
    //     signIn("credentials", {
    //         username: "anik@gmail.com",  // Replace with actual input value
    //         password: "password123",     // Replace with actual input value
    //         redirect: false,             // Set redirect to false to handle the redirection manually
    //     });
    // };

    return (
        <div className="flex flex-col justify-center items-center">
            <h3>Login page</h3>
            <button className="btn" onClick={() => signIn()}>Sign in</button>
            <p className="text-yellow-300 underline">
                <Link href='/register'>Register</Link>
            </p>
        </div>
    );
};

export default Login;