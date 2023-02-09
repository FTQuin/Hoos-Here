// -------------------------------------------------------------------------- //
// File Name: take-attendance.tsx
// Created By: Quin Adam
// Description: Show's QR code for students to scan. Also show results for the
//              prof and a manual way to enter attendance for prof.
// -------------------------------------------------------------------------- //

// **** Imports ****
import type { NextPage } from 'next'
import Head from 'next/head'
import {useRouter} from 'next/router';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";


// **** **** Components **** ****
// **** QRCode Component ****
function QRCode() {
    // **** HTML ****
    return(
        <div>
            <h2>QR Code</h2>
            <Image src="/placeholder.png" alt="place" width={100} height={100}></Image>
        </div>
    );
}

// **** LiveResults Component ****
function LiveResults() {
    // **** HTML ****
    return(
        <div>
            <h2>Live Results</h2>
            <Image src="/placeholder.png" alt="place" width={100} height={100}></Image>
        </div>
    );
}

// **** ManualAttendance Component ****
function ManualAttendance() {
    // **** HTML ****
    return(
        <div>
            <h2>Manual Attendance</h2>
            <Image src="/placeholder.png" alt="place" width={100} height={100}></Image>
        </div>
    );
}

// **** Main Page ****
const TakeAttendance: NextPage = () => {

    // Next.js router
    const router = useRouter()

    // **** HTML ****
    return (
        <>
            {/* Meta Data */}
            <Head>
                <title>Take Attendance</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            </Head>

            {/* Start of Wrapper */}
            <div className="flex flex-col bg-white min-h-screen border-orange-600 border-l border-r">
                {/* Header */}
                <Header />

                {/* Start of Main Content */}
                <main className="flex flex-col items-center justify-center ">
                    {/*title*/}
                    <h2>Take Attendance</h2>
                    {/*components*/}
                    <div className="flex">
                        <QRCode></QRCode>
                        <LiveResults></LiveResults>
                    </div>
                    <ManualAttendance></ManualAttendance>
                </main>
                {/* End of Main Content */}

                {/* Footer */}
                <Footer />

            </div>
            {/* End of Wrapper */}
        </>
    )
}

export default TakeAttendance
