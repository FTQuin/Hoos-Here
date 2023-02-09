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


// **** Main Page ****
const SignIn: NextPage = () => {

    // Next.js router
    const router = useRouter()

    // **** HTML ****
    return (
        <>
            {/* Meta Data */}
            <Head>
                <title>Register - Hooshere</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            </Head>

            {/* Start of Wrapper */}
            <div className="bg-white text-orange-600 border-orange-600 border-l border-r">
                {/* Header */}
                <Header />

                {/* Start of Main Content */}
                <main className="flex items-center justify-center">
                    <div className="shrink flex flex-col border-orange-600 border p-16 m-5 items-center">
                        {/*title*/}
                        <h2 className="text-xl font-bold mb-10">Sign In</h2>
                        <form action="/send-data-here" method="post"
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
                        <Image className="mt-6" src="/placeholder.png" alt="" width="25" height="25"></Image>
                        <Image className="mt-6" src="/placeholder.png" alt="" width="25" height="25"></Image>
                    </div>
                </main>
                {/* End of Main Content */}

                {/* Footer */}
                {/*TODO: make footer go to bottom*/}
                <Footer />

            </div>
            {/* End of Wrapper */}
        </>
    )
}

export default SignIn
