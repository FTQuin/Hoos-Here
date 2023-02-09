// -------------------------------------------------------------------------- //
// File Name: attend.tsx
// Created By: Quin Adam
// Description: The page where students mark that they have attended the class
// -------------------------------------------------------------------------- //

// **** Imports ****
import type { NextPage } from 'next'
import Head from 'next/head'
import {useRouter} from 'next/router';
import Header from "../components/Header";
import Footer from "../components/Footer";


// **** Main Page ****
const Attend: NextPage = () => {

    // Next.js router
    const router = useRouter()

    // How to use a link
    // onClick={() => router.push('/dashboard')}
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
                        {/*Title*/}
                        <h2 className="text-xl font-bold mb-10">Register Your Attendance</h2>
                        <form action="/send-data-here" method="post"
                              className="flex flex-col">
                            {/*Name*/}
                            <label htmlFor="name" className="mb-2">Name</label>
                            <input type="text" id="name" name="name" placeholder="xxx" size={50}
                                   className="border border-orange-600 p-2 mb-5 rounded-md w-full"/>
                            {/*Student number*/}
                            <label htmlFor="student-number" className="mb-2">Student Number</label>
                            <input type="text" id="student-number" name="student-number" placeholder="123456" size={50}
                                   className="border border-orange-600 p-2 mb-8 rounded-md w-full"/>
                            {/*submit*/}
                            <button type="submit" className="text-white bg-orange-600 rounded-md py-1">Register</button>
                        </form>
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

export default Attend
