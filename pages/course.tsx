// -------------------------------------------------------------------------- //
// File Name: course.tsx
// Created By: Quin Adam
// Description: An overview of an individual courses information and attendance
//              records.
// -------------------------------------------------------------------------- //

// **** Imports ****
import type { NextPage } from 'next'
import Head from 'next/head'
import {useRouter} from 'next/router';
import Header from "../components/Header";
import Footer from "../components/Footer";


// **** Main Page ****
const Course: NextPage = () => {

    // Next.js router
    const router = useRouter()

    // **** HTML ****
    return (
        <>
            {/* Meta Data */}
            <Head>
                <title>Course Summary</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            </Head>

            {/* Start of Wrapper */}
            <div className="flex flex-col bg-white min-h-screen border-orange-600 border-l border-r">
                {/* Header */}
                <Header />

                {/* Start of Main Content */}
                <main className="flex flex-col items-center justify-center ">
                    <p>fancy table</p>
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

export default Course
