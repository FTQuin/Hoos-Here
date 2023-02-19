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
import { useQRCode } from 'next-qrcode';



// **** **** Components **** ****
// **** QRCode Component ****
function QRCode() {
    // **** HTML ****
    const { SVG } = useQRCode();

    return (
        <div className={"border-orange-600 border p-2"}>
            <SVG
                //TODO: make link work in production
                text={'http://localhost:3001/attend'}
                options={{
                    level: 'L',
                    margin: 3,
                    scale: 4,
                    width: 200,
                    color: {
                        dark: '#e8570c',
                        light: '#ffffff',
                    },
                }}
            />
        </div>
    );
}

// **** LiveResults Component ****
function LiveResults() {
    let percent = 45
    // **** HTML ****
    return(
        <div className={"border-orange-600 border p-2"}>
            <h2>Live Results</h2>
            <p>Student McStudentson</p>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
                <div
                    className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                    style={{width: String(percent)+'%'}}> {percent}%
                </div>
            </div>

        </div>
    );
}

// **** ManualAttendance Component ****
function ManualAttendance() {
    // **** HTML ****
    return(
        <div className={"grid grid-cols-2 gap-3 border-orange-600 border p-2"}>
            <div className={"col-span-2"}>Manual Attendance</div>
            <div>Name</div><div>Status</div>
            <div>John</div><div>Here</div>
            <div>Dave</div><div>Away</div>
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
