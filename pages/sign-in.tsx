// -------------------------------------------------------------------------- //
// File Name: sign-in.tsx
// Created By: Quin Adam
// Description: The sign in page.
// -------------------------------------------------------------------------- //

// **** Imports ****
import type { NextPage } from 'next'
import Head from 'next/head'
import {useRouter} from 'next/router';
import Image from "next/image";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Layout from "../components/Layout";
import {GoogleAuthProvider, signInWithPopup} from "@firebase/auth";
import {auth} from "../firebase/firebase";


// **** Main Page ****
const SignIn: NextPage = () => {

    // Next.js router
    const router = useRouter()
    // firebase auth
    const provider = new GoogleAuthProvider();

    // **** Click Handlers ****
    function signInWithGoogle() {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential?.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }

    // **** HTML ****
    return (
        <Layout>
            <div className="flex flex-col max-w-screen-sm border-orange-600 border p-16 m-5 items-center">
                {/*title*/}
                <h2 className="text-xl font-bold mb-10">Sign In</h2>
                <form action="" method="post"
                      className="flex flex-col">
                    {/*email*/}
                    <label htmlFor="email" className="mb-2">Email</label>
                    <input type="email" id="email" name="email" placeholder="xxx" size={50}
                           className="border border-orange-600 p-2 mb-5 rounded-md w-full"/>
                    {/*password*/}
                    <label htmlFor="pass" className="mb-2">Password</label>
                    <input type="password" id="pass" name="pass" placeholder="******" size={50}
                           className="border border-orange-600 p-2 mb-8 rounded-md w-full"/>
                    {/*submit*/}
                    <button type="submit" className="text-white bg-orange-600 rounded-md py-1">Sign In</button>
                </form>

                {/*third party auth*/}
                <p className="mt-6">Or</p>
                <button onClick={signInWithGoogle} className="flex gap-2 flex-row border border-orange-600 rounded-md py-1 px-3 mt-6">
                    <p>Sign In with Google</p>
                    {/*TODO: make real google pic*/}
                    <Image className="" src="/placeholder.png" alt="" width="25" height="25"></Image>
                </button>
            </div>
        </Layout>
    )
}

export default SignIn
